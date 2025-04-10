import prisma from '../../prisma/client.js';

class LivroModel {
  getAll = async () => {
    return await prisma.task.findMany();
  };

  getById = async (id) => {
    try {
      const livro = await prisma.book.findUnique({
        where: { id },
      });
      return livro;
    } catch (error) {
      console.log("Error", error)
      throw error;
    }
  }

  create = async (title, author, publisher, isbn, category) => {
    return await prisma.book.create({
      data: {
        title,
        author,
        publisher,
        isbn,
        category
      }
    })
  };

  update = async (id, concluida, descricao) => {
    try {
      const tarefa = await prisma.task.update({
        where: { id },
        data: { concluida: concluida !== undefined ? concluida : true, descricao },
      })
      return tarefa;
    } catch (error) {
      console.log("Error", error)
      throw error;
    }
  };

  delete = async (id) => {    
    try {
      const tarefaDeletada = await prisma.task.delete({
        where: { id },
      });

      return tarefaDeletada;

    } catch (error) {
      console.log("Erro ao deletar tarefa", error);
      throw error;
    }
  };
}

export default new LivroModel();