/*------------- Render Navbar ---------------*/

let navArray = ["HOME", "GIT PROJECTS", "BLOG POSTS", "GAMES"];

function renderNavbar(){
    
    let navbar = document.getElementById("nav-bar");
    
    let logo = document.createElement("img");
    logo.setAttribute("src", "images/logo.png");
    logo.setAttribute("alt", "logo");
    logo.setAttribute("id", "logo")
    navbar.appendChild(logo);

    let ul = document.createElement("ul");
    ul.setAttribute("class", "nav-bar-main");
    for(let i = 0; i < navArray.length; i++){
        let a = document.createElement("a");
        let getFirstWord = '';
        if(navArray[i].substr(0, navArray[i].indexOf(' ')) == ''){
          getFirstWord = navArray[i]
        } else{
          getFirstWord = navArray[i].substr(0, navArray[i].indexOf(' '));
        }
        console.log(getFirstWord);
        a.setAttribute("href", "/" + getFirstWord.toLowerCase() + ".html");
        a.innerHTML = navArray[i];
        ul.appendChild(a);
    }
    navbar.appendChild(ul);

    let logout = document.createElement("a");
    logout.setAttribute("href", "/" + "logout");
    logout.setAttribute("class", "logout");
    logout.innerHTML = "LOG OUT";
    navbar.appendChild(logout);
}

renderNavbar();

// function renderLabel(){
//             <span class="label-icon">
//                 <i class="material-icons">person</i>
//             </span>
//             <span class="label-icon">
//                 <label>About Me </label>
//             </span>
//             <div class="horizontal-line"></div>

//     let spanIcon = document.createElement("span");
//     spanIcon.setAttribute("label-icon");
//     let i = document.createElement("i");
//     i.setAttribute("class", "material-icons");
//     i.innerHTML = iconArray[i];
//     spanIcon.appendChild(i);
//     let spanLabel = document.createElement("span");
//     spanLabel.setAttribute("label-icon");
//     let label = document.createElement("label");
//     label.innerHTML = 
// }

/*------------- Render Projects ---------------*/

let projectArray = {
    0: {
        name: "Flow Diagram V1",
        description: `First flow diagram that I created for this project using LucidCharts. It includes features that 
            I am currently working on, but also will be added in the future.`,
        image: "images/flow-diagram.png"
    },
    1: {
        name: "Home Page Wireframe",
        description:"Home page wireframe created by LucidCharts.",
        image: "images/homepage.png"
    }
}
function renderProjects(){
    let projects = document.getElementById("get-projects");
    for(let i = 0; i < Object.keys(projectArray).length; i++){
        let div = document.createElement("div");
        div.setAttribute("class", "project-content");
        let name = document.createElement("label");
        name.innerHTML = projectArray[i].name;
        name.setAttribute("class", "project-label");
        projects.appendChild(name);
        let description = document.createElement("p");
        description.innerHTML = projectArray[i].description;
        description.setAttribute("class", "project-description");
        div.appendChild(description);
        let image = document.createElement("img");
        image.setAttribute("src", projectArray[i].image);
        image.setAttribute("alt", projectArray[i].name);
        image.setAttribute("class", "project-image");
        div.appendChild(image);
        let hr = document.createElement("hr");
        hr.setAttribute("class", "project-divider");
        div.appendChild(hr);
        projects.appendChild(div);
    }
}
renderProjects();

/*-------------Add Project Modal ---------------*/

let modal = document.getElementById("myModal");
let addProjbtn = document.getElementById("add-project-btn");
let addProjClose = document.getElementById("add-project-close");
addProjbtn.onclick = function() {
  modal.style.display = "block";
}
addProjClose.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
