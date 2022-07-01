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
      let nrActivity = activity.childNodes.length;
      const activitiesProject = [];
      for (let i = 0; i < nrActivity; i++) {
        const activity = {};
        activity.nameActivity = document.querySelector(`#activityName${i}`).value
        activity.startActivity = document.querySelector(`#startDateActivity${i}`).value ;
        activity.endActivity = document.querySelector(`#endDateActivity${i}`).value ;
        activity.activeActivity = document.querySelector(`#activeActivity${i}`).value | false;
        activitiesProject.push(activity);
      }
      const data = {
        nameProject: form.projectName.value,
        startProject: form.startDate.value,
        endProject: form.endDate.value,
        activitiesProject: activitiesProject
      };
      console.log(data);
      const projects = await postProjects(data);
    },
    false
  );
});
