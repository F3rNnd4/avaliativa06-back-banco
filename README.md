# Atividade Avaliativa: Desenvolvimento de API Backend com CRUD Completo e Prisma ORM

## Contextualização

Uma biblioteca municipal está passando por um processo de modernização e precisa de um sistema digital para gerenciar seu acervo de livros. A instituição deseja ter uma plataforma onde possa cadastrar, consultar, atualizar e remover informações sobre os livros disponíveis para empréstimo. Para isso, é necessário desenvolver uma API backend que permitirá a gestão completa do acervo bibliográfico.

## Requisitos do Projeto

### Funcionalidades Obrigatórias

**API RESTful** com as seguintes rotas: - `GET /books` - Listar todos os livros - `GET /books/:id` - Obter detalhes de um livro específico - `POST /books` - Adicionar um novo livro - `PUT /books/:id` - Atualizar informações de um livro - `DELETE /books/:id` - Remover um livro do acervo

## Instruções de instalação

1. Clone o repositório
2. Dê um `npm install` para instalar as dependências
3. Crie um arquivo .env na raiz do projeto com `DATABASE_URL="file:./dev.db"` para usar o SQLite
4. Execute `npx prisma migrate dev` após alterar o arquivo **schema.prisma** para criar o banco de dados SQLite
5. Execute npm run dev para iniciar o servidor

## Exemplos de Requisições para Cada Endpoint

### GET /livros

Lista todos os livros cadastrados.
URL: `http://localhost:3000/books`

Exemplo de resposta:

```json
[
    {
        "id": 1,
        "title": "Não é como nos filmes",
        "author": "Lynn Painter",
        "publisher": "Editora Intrínseca",
        "isbn": 7558,
        "category": "Romance",
        "year": null,
        "description": null,
        "createdAt": "2025-04-10T17:57:06.529Z",
        "updatedAt": "2025-04-10T18:18:56.803Z"
    },
    {
        "id": 2,
        "title": "Melhor do que nos filmes",
        "author": "Lynn Painter",
        "publisher": "Editora Intrínseca",
        "isbn": 6948,
        "category": "Romance",
        "year": null,
        "description": null,
        "createdAt": "2025-04-10T17:58:30.019Z",
        "updatedAt": "2025-04-10T17:58:30.019Z"
    }
]
```

### GET /livros/:id

Busca um livro pelo ID.
URL: `http://localhost:3000/books/1`

Exemplo de resposta:

```json
[
    {
        "id": 1,
        "title": "Não é como nos filmes",
        "author": "Lynn Painter",
        "publisher": "Editora Intrínseca",
        "isbn": 7558,
        "category": "Romance",
        "year": null,
        "description": null,
        "createdAt": "2025-04-10T17:57:06.529Z",
        "updatedAt": "2025-04-10T18:18:56.803Z"
    }
]
```

### POST /livros

Cria um novo livro.
URL: `http://localhost:3000/books`

Exemplo de corpo da requisição:

```json
{
    "title": "Não é como nos filmes",
    "author": "Lynn Painter",
    "publisher": "Editora Intrínseca",
    "isbn": 7558,
    "category": "Romance",
    "year": null,
    "description": null
}
```

Exemplo de resposta:

```json
[
    {
        "id": 1,
        "title": "Não é como nos filmes",
        "author": "Lynn Painter",
        "publisher": "Editora Intrínseca",
        "isbn": 7558,
        "category": "Romance",
        "year": null,
        "description": null,
        "createdAt": "2025-04-10T17:57:06.529Z",
        "updatedAt": "2025-04-10T18:18:56.803Z"
    }
]
```

### PUT /livros/:id

Atualiza um livro existente.
URL: `http://localhost:3000/books/1`

Exemplo de corpo da requisição:

```json
{
    "title": "Apostando no amor"
}
```

Exemplo de resposta:

```json
[
    {
        "id": 1,
        "title": "Apostando no amor",
        "author": "Lynn Painter",
        "publisher": "Editora Intrínseca",
        "isbn": 7558,
        "category": "Romance",
        "year": null,
        "description": null,
        "createdAt": "2025-04-10T17:57:06.529Z",
        "updatedAt": "2025-04-10T18:18:56.803Z"
    }
]
```

### DELETE /livros/:id

Remove um livro do acervo.
URL: `http://localhost:3000/books/1`

Exemplo de resposta:

```json
{
    "message": "Livro removido com sucesso!"
}
```

## Decisões de Design e Arquitetura

1. Estrutura MVC:

- O projeto foi estruturado seguindo o padrão MVC (Model-View-Controller) para separar responsabilidades:
    - Model: Gerencia a interação com o banco de dados usando o Prisma.
    - Controller: Contém a lógica de negócios e manipula as requisições/respostas.
    - Routes: Define os endpoints da API.

2. Validação de Dados:

- Validações básicas foram implementadas nos controladores para garantir que os dados enviados pelo cliente sejam consistentes.

3. Mensagens de Erro:

- Mensagens claras foram configuradas para facilitar o entendimento de erros por parte do cliente.

## Tecnologias Utilizadas

- Node.js: Plataforma para execução do JavaScript no backend.
- Express.js: Framework para criação de APIs REST.
- Prisma ORM: Gerenciamento do banco de dados.
- SQLite: Banco de dados utilizado no desenvolvimento.
- JavaScript (ES6): Linguagem de programação principal.