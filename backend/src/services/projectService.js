export default class ProjectService {
  constructor({ projectRepository }) {
    this.projectRepository = projectRepository;
  }

  getAll() {
    console.log('service');
    return this.projectRepository.getAll();
  }

  create(data) {
    return this.projectRepository.create(data);
  }
}
