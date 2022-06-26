import ProjectRepository from '../repositories/projectRepository.js'; // Conexão com nosso banco de dados
import ProjectService from '../services/projectService.js';

const generateInstance = ({ filePath }) => {
  const projectRepository = new ProjectRepository({
    file: filePath,
  });
  const projectService = new ProjectService({
    projectRepository,
  });

  return projectService;
};

export { generateInstance };
