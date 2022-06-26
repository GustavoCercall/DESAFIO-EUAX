export default class ProjectService {
  constructor({ projectRepository }) {
    this.projectRepository = projectRepository;
  }

  getAll() {
    return this.projectRepository.getAll();
  }

  create(data) {
    return this.projectRepository.create(data);
  }
}
