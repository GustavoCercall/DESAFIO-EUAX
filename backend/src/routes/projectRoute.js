import { once } from 'node:events'; // criando as rotas de acesso do projeto.
import Project from '../entities/project.js';
import { DEFAULT_HEADER } from '../util/util.js';

const routes = ({ projectService }) => ({
  '/projects:get': async (request, response) => {
    console.log('route');
    const projects = await projectService.getAll();
    response.writeHead(200, DEFAULT_HEADER);
    response.write(JSON.stringify(projects));
    return response.end();
  },
});

export { routes };
