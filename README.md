# NLW Agents

<p align="center">
  <img src="https://img.shields.io/github/last-commit/CauanLagrotta/nlw-agents" alt="Último commit">
</p>

## 🚀 Sobre o Projeto

NLW Agents é uma aplicação desenvolvida durante a Next Level Week da Rocketseat, trilha avançada. O projeto tem como objetivo criar uma plataforma interativa onde os usuários podem criar e gerenciar salas virtuais para discussões e perguntas, com suporte a respostas geradas por IA.

## ✨ Funcionalidades

- 🏠 Criação de salas virtuais
- 💬 Envio de perguntas
- 🤖 Respostas automáticas utilizando IA (Google Gemini)
- 🔄 Atualização em tempo real das perguntas e respostas
- 🎨 Interface moderna e responsiva
- 🔒 Autenticação e controle de acesso

## 🛠️ Tecnologias

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Hook Form + Zod
- React Query
- React Router Dom
- Radix UI

### Backend
- Node.js
- Fastify
- Drizzle ORM
- PostgreSQL
- Google Gemini API
- Zod para validação de dados

## 🚀 Como executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- PostgreSQL
- Conta no Google AI Studio (para acessar a API do Gemini)

### Configuração do Ambiente

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/CauanLagrotta/nlw-agents.git
   cd nlw-agents
   ```

2. **Configurar as variáveis de ambiente**
   - Crie um arquivo `.env` na pasta `server` baseado no `.env.example`
   - Adicione suas credenciais da Google AI
   - Configure as variáveis do banco de dados

3. **Instalar dependências**
   ```bash
   # Instalar dependências do servidor
   cd server
   npm install
   
   # Instalar dependências do frontend
   cd ../web
   npm install
   ```

4. **Executar as migrações do banco de dados**
   ```bash
   cd ../server
   npm run migrate
   ```

### Iniciando a aplicação

1. **Iniciar o servidor**
   ```bash
   cd server
   npm run dev
   ```

2. **Iniciar o frontend**
   ```bash
   cd ../web
   npm run dev
   ```

3. **Acessar a aplicação**
   Abra o navegador e acesse: `http://localhost:5173`


## 🤝 Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## 📧 Contato

Cauan Lagrotta - [GitHub](https://github.com/CauanLagrotta)

---

Desenvolvido durante a NLW da [Rocketseat](https://www.rocketseat.com.br/)