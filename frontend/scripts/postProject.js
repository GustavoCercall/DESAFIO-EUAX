async function postProjects(data) {
  // Conexão com o Backend.
  const response = await fetch('http://localhost:3000/projects', {
    body: JSON.stringify(data),
    method: 'POST',
  });
  const projects = await response.json();
  return projects;
}

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.querySelector('#form-projects');
  form.addEventListener(
    'submit',
    async (event) => {
      event.preventDefault();
      const data = {
        nameProject: form.projectName.value,
        startProject: form.startDate.value,
        endProject: form.endDate.value,
        activitiesProject: [
          {
            nameActivity: form.activityName.value || '',
            startActivity: form.startDateActivity.value || '',
            endActivity: form.endDateActivity.value || '',
            active: form.activeActivity.checked || false,
          },
        ],
      };
      console.log(data);
      const projects = await postProjects(data);
    },
    false
  );
});
