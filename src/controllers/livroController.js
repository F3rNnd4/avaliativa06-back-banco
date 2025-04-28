import livroModel from "../models/livroModel.js";

class LivroController {
  getAll = async (req, res) => {
    try {
      const livros = await livroModel.getAll();
      
      if (!livros || livros.length === 0) {
        return res.status(404).json({ message: "Nenhum livro encontrado! Cadastre um agora mesmo!" });
      }
      res.json(livros);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao buscar livro! Tente novamente!" })
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const livro = await livroModel.getById(Number(id));
      if (!livro) {
        return res.status(404).json({ message: "Algo deu errado! Livro não encontrado" });
      }
      res.json(livro);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao buscar livro! Tente novamente" });
    }
  }

  create = async (req, res) => {
    const { title, author, publisher, isbn, category, year, description } = req.body;
    try {
      if (!title || !author || !publisher || !isbn || !category) {
        return res.status(400).json({ message: "É preciso preencher os campos obrigatórios de título, autor, publicador, isbn e categoria!" });
      }
      const novoLivro = await livroModel.create(title, author, publisher, isbn, category, year, description);
      res.status(201).json(novoLivro);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao criar livro! Tente novamente!" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { title, author, publisher, isbn, category, year, description } = req.body;

    try {
      const livroAtualizado = await livroModel.update(Number(id), title, author, publisher, isbn, category, year, description);

      if (!livroAtualizado) {
        return res.status(404).json({ message: "Algo deu errado! Livro não encontrado!" });
      }

      res.json(livroAtualizado);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao atualizar livro! Tente novamente!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await livroModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ message: "Algo deu errado! Livro não encontrado!" });
      }

      res.status(200).send({ message: "Livro deletado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao deletar livro! Tente novamente!" });
    }
  };
}

export default new LivroController();