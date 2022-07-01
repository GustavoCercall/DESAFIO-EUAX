import {
  // Estrutura de Projeto, criando a conexão entre o package entities e o package routes.
  readFile,
  writeFile,
} from 'node:fs/promises';

export default class ProjectRepository {
  constructor({ file }) {
    this.file = file;
  }

  async #currentFileContent() {
    return JSON.parse(await readFile(this.file));
  }

  getAll() {
    return this.#currentFileContent();
  }

  async create(data) {
    const currentFile = await this.#currentFileContent();
    currentFile.push(data);

    await writeFile(this.file, JSON.stringify(currentFile));

    return data.id;
  }

  async delete(id) {
    const currentFile = await this.#currentFileContent();
    const newFile = currentFile.filter((item) => item.idProject !== id); // removendo o projeto da lista.
    await writeFile(this.file, JSON.stringify(newFile)); // removendo o projeto do arquivo.
    return id;
  }
}
