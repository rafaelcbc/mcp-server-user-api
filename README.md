# MCPServers

API Node.js/Express para gerenciamento de usuários (exemplo).

## Requisitos
- Node.js >= 22
- npm
- Docker (opcional)
- Docker Compose (opcional)

## Instalação e Execução Local

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Rode em modo desenvolvimento (TypeScript):
   ```sh
   npm run dev
   ```
3. Para buildar e rodar em produção:
   ```sh
   npm run build
   npm start
   ```

A API estará disponível em `http://localhost:3000`.

## Endpoints
- `GET /health` — Health check (deve retornar `{ "status": "ok" }`)
- `GET /api/users` — Listagem de usuários (verifique implementação em `src/routes/userRoutes.ts`)

## Executando com Docker

1. **Build e execute o container:**
   ```sh
   docker build -t mcpservers .
   docker run -p 3000:3000 mcpservers
   ```

## Executando com Docker Compose

1. **Suba o serviço:**
   ```sh
   docker compose up --build -d
   ```
2. **Derrube o serviço:**
   ```sh
   docker compose down
   ```

A API estará disponível em `http://localhost:3000`.

---

Sinta-se à vontade para adaptar as instruções conforme evoluir o projeto! 