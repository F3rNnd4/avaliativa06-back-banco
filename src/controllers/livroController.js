import livroModel from "../models/livroModel.js";

class LivroController {
  getAll = async (req, res) => {
    try {
      const livros = await livroModel.getAll();
      res.json(livros);
    } catch (error) {
      console.log(error);
      res.satus(500).json({ erro: "Erro ao buscar livro" })
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const livro = await livroModel.getById(Number(id));
      if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado" });
      }
      res.json(livro);
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Erro ao buscar livro" });
    }
  }

  create = async (req, res) => {
    const { title, author, publisher, isbn, category } = req.body;
    try {
      if (!title || !author || !publisher || !isbn || !category) {
        return res.status(400).json({ erro: "É preciso prencher com as informações" });
      }
      const novoLivro = await livroModel.create(title, author, publisher, isbn, category);
      res.status(201).json(novoLivro);
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Erro ao criar livro" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { concluida, descricao } = req.body;

    try {
      const tarefaAtualizada = await tarefaModel.update(Number(id), concluida, descricao);

      if (!tarefaAtualizada) {
        return res.status(404).json({ erro: "Tarefa não encontrada!" });
      }

      res.json(tarefaAtualizada);

    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar tarefa!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await tarefaModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Tarefa não encontrada" });
      }

      res.status(200).send({ message: "Tarefa deletada com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Erro ao deletar tarefa" });
    }
  };
}

export default new LivroController();