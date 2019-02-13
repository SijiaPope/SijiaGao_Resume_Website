// let selectedProject = document.getElementById("selection");
// let result = selectedProject.options[selectedProject.selectedIndex].value;
// let displayContainer = document.getElementById('projectDisplay');
// let projectName = document.getElementById('projectTitle');
// let projectImage = document.createElement('img');
// let projectLink = document.createElement("a");
let selectedProject = document.getElementById("selection");
let result = selectedProject.options[selectedProject.selectedIndex].value;
let displayContainer = document.getElementById('projectDisplay');
let projectName = document.getElementById('projectTitle');
let projectImage = document.createElement('img');
let projectLink = document.createElement("a");

projectLink.appendChild(projectName);
displayContainer.append(projectImage);
displayContainer.appendChild(projectLink);

const selection = () => {
    let result = selectedProject.options[selectedProject.selectedIndex].value;
    projectImage.setAttribute('width', '300px');
    switch(result) {
        case 'just-light' :
            projectImage.setAttribute('src', 'img/portfolio/01-thumbnail.jpg');
            projectLink.setAttribute('href', 'justlight.html');
            projectName.innerHTML = "Just Light";
            break;
        case 'fitness-app' :
            projectImage.setAttribute('src', 'img/portfolio/02-thumbnail.jpg');
            projectLink.setAttribute('href', 'fitnessapp.html');
            projectName.innerHTML = "Fitness App";
            break;
        case 'dinner-app' :
            projectImage.setAttribute('src', 'img/portfolio/03-thumbnail.jpg');
            projectLink.setAttribute('href', 'https://google.com');
            projectName.innerHTML = "Dinner App";
            break;
        case 'calendar' :
            projectImage.setAttribute('src', 'img/portfolio/04-thumbnail.jpg');
            projectLink.setAttribute('href', 'https://google.com');
            projectName.innerHTML = "Calendar App";
            break;
        case 'twitter-bot' :
            projectImage.setAttribute('src', 'img/portfolio/05-thumbnail.jpg');
            projectLink.setAttribute('href', 'https://google.com');
            projectName.innerHTML = "Twitter Bot";
            break;
        case 'network' :
            projectImage.setAttribute('src', 'img/portfolio/06-thumbnail.jpg');
            projectLink.setAttribute('href', 'https://google.com');
            projectName.innerHTML = "Network";
            break;
        default:
            break;
    }

};