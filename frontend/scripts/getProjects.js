async function fetchProjects() {
  // Busca de Projetos.
  const response = await fetch('http://localhost:3000/projects');
  const projects = await response.json();
  return projects;
}

document.addEventListener('DOMContentLoaded', async () => {
  const projects = await fetchProjects();
  const projectsList = document.querySelector('#projects-list');
  projectsList.innerHTML = projects
    .map(
      (project) => `
        <li>
            <div>${project.nameProject}</div>
        </li>
    `
    )
    .join('');
});
