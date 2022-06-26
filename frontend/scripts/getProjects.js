async function fetchProjects() {
  // Busca de Projetos.
  const response = await fetch('http://localhost:3000/projects');
  const projects = await response.json();
  return projects;
}

const renderActivity = (activity) => `
  <details>
    <summary><h3>${activity.nameActivity}</h3></summary>
    <div class="content-details">
      <table class="projectTable">
        <thead>
          <tr>
            <th>Data Inicio</th>
            <th>Data Fim</th>
            <th>Ativa</th>
            <th>Atrasada</th>
          </tr>
        </thead>
        <tbody class="dataTable">
          <tr>
            <td>${new Date(activity.startActivity).toLocaleDateString()}</td>
            <td>${new Date(activity.endActivity).toLocaleDateString()}</td>
            <td>${activity.active ? 'Sim' : 'Não'}</td>
            <td>${
              activity.active && new Date(activity.endActivity) < new Date()
                ? 'Sim'
                : 'Não'
            }</td>
          </tr>
        </tbody>
      </table>
    </div>
  </details>
`;

const renderProject = (project) => `
  <li>
    <details>
      <summary><h3>${project.nameProject}</h3></summary>
      <div class="content-details">
        <table class="projectTable">
          <thead>
            <tr>
              <th>ID Projeto</th>
              <th>Data Inicio</th>
              <th>Data Fim</th>
            </tr>
          </thead>
          <tbody class="dataTable">
            <tr>
              <td>${project.idProject}</td>
              <td>${new Date(project.startProject).toLocaleDateString()}</td>
              <td>${new Date(project.endProject).toLocaleDateString()}</td>
            </tr>
          </tbody>
        </table>
        ${project.activitiesProject.map(renderActivity).join('')}
      </div>
    </details>
  </li>
`;

document.addEventListener('DOMContentLoaded', async () => {
  const projects = await fetchProjects();
  const projectsList = document.querySelector('#projects-list');
  projectsList.innerHTML = projects.map(renderProject).join('');
});
