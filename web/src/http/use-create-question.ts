import { useMutation } from "@tanstack/react-query";
import type { CreateQuestionRequest } from "./types/create-question-request";
import type { CreateQuestionResponse } from "./types/create-question-response";
import { useQueryClient } from "@tanstack/react-query";
import type { GetRoomQuestionResponse } from "./types/get-room-question-response";

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result: CreateQuestionResponse = await response.json();
      return result;
    },

    onMutate: ({ question }) => {
      const questions = queryClient.getQueryData<GetRoomQuestionResponse>([
        "get-questions",
        roomId,
      ]);

      const questionArray = questions ?? [];

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
        isGeneratingAnswer: true,
      };

      queryClient.setQueryData<GetRoomQuestionResponse>(
        ["get-questions", roomId],
        [newQuestion, ...questionArray]
      );

      return { newQuestion, questions };
    },

    onSuccess: (data, _variables, context) => {
      queryClient.setQueryData<GetRoomQuestionResponse>(
        ["get-questions", roomId],
        (questions) => {
          if (!questions) {
            return questions;
          }

          if (!context.newQuestion) {
            return questions;
          }

          return questions.map((question) => {
            if (question.id === context.newQuestion.id) {
              return {
                ...context.newQuestion,
                id: data.questionId,
                answer: data.answer,
                isGeneratingAnswer: false,
              };
            }

            return question;
          });
        }
      );
    },

    onError: (_error, _variables, context) => {
      if (context?.questions) {
        queryClient.setQueryData<GetRoomQuestionResponse>(
          ["get-questions", roomId],
          context.questions
        );
      }
    },
  });
}
