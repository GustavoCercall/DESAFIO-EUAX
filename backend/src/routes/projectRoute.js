import { once } from 'node:events'; // criando as rotas de acesso do projeto.
import Project from '../entities/project.js';
import { DEFAULT_HEADER } from '../util/util.js';

const routes = ({ projectService }) => ({
  '/projects:get': async (request, response) => {
    const projects = await projectService.getAll();
    response.writeHead(200, DEFAULT_HEADER);
    response.write(JSON.stringify(projects));
    return response.end();
  },
  '/projects:post': async (request, response) => {
    const data = await once(request, 'data'); // Salvando um post.
    const item = JSON.parse(data);
    const project = new Project(item);

    const id = await projectService.create(project);

    response.writeHead(201, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        id,
        success: 'Projeto criado com sucesso!!',
      })
    );

    return response.end();
  },
});

export { routes };
