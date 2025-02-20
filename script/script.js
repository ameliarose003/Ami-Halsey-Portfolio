fetch("./script/projects.json").then((res) => res.json()).then((data) => {
    console.log(data);
    renderProjects(data.projects)
});

function renderProjects(projects) {
    const projectHtml = projects.map(projectTemplate).join("");
    console.log(projectHtml)
    const projectsElement = document.getElementById('projects');
    projectsElement.innerHTML = projectHtml;
}


function projectTemplate(project) {
    return `
    <div class="project-container">
        <h3>${project.title}</h3>
        <a href="${project.url}" target="_blank">
            <img src="${project.image}" alt="${project.title}">
        </a>
        <p>${project.description}</p>
    </div>
    `
}