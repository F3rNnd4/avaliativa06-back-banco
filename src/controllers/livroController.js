import livroModel from "../models/livroModel.js";

class LivroController {
  getAll = async (req, res) => {
    try {
      const livros = await livroModel.getAll();
      if (!livros || livros.length === 0) {
        return res.status(404).json({ erro: "Nenhum livro encontrado" });
      }
      res.json(livros);
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Erro ao buscar livro" })
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
    const { title, author, publisher, isbn, category } = req.body;

    try {
      const livroAtualizado = await livroModel.update(Number(id), title, author, publisher, isbn, category);

      if (!livroAtualizado) {
        return res.status(404).json({ erro: "Livro não encontrado!" });
      }

      res.json(livroAtualizado);

    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar livro!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await livroModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Livro não encontrado" });
      }

      res.status(200).send({ message: "Livro deletado com sucesso" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ erro: "Erro ao deletar livro" });
    }
  };
}

export default new LivroController();