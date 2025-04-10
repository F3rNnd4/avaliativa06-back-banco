import prisma from "../../prisma/client.js";

class LivroModel {
  getAll = async () => {
    return await prisma.book.findMany();
  };

  getById = async (id) => {
    try {
      const livro = await prisma.book.findUnique({
        where: { id },
      });
      return livro;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  create = async (title, author, publisher, isbn, category) => {
    return await prisma.book.create({
      data: {
        title,
        author,
        publisher,
        isbn,
        category,
      },
    });
  };

  update = async (id, title, author, publisher, isbn, category) => {
    try {
      const livro = await prisma.book.update({
        where: { id },
        data: { title, 
                author, 
                publisher, 
                isbn, 
                category 
              },
      });
      return livro;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const livroDeletado = await prisma.book.delete({
        where: { id },
      });

      return livroDeletado;
    } catch (error) {
      console.log("Erro ao deletar livro", error);
      throw error;
    }
  };
}

export default new LivroModel();
