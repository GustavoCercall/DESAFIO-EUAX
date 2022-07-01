function deleteProjects(idProject) {
    const response = fetch('http://localhost:3000/projects', {
      body: JSON.stringify({
        // conversão do objeto para string.
        id: idProject,
      }),
      method: 'DELETE',
    }).then((response) => {
      console.log(response);
    });
  }
  