import { randomUUID } from 'node:crypto'; // Criando a classe do projeto.
export default class Project {
  constructor({ nameProject, startProject, endProject, activitiesProject }) {
    this.idProject = randomUUID();
    this.nameProject = nameProject;
    this.startProject = startProject;
    this.endProject = endProject;
    this.activitiesProject = activitiesProject;
  }
}
