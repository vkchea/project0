let navArray = ["HOME", "GIT PROJECTS", "BLOG POSTS"];

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
        // a.setAttribute("href", + navArray[i].toLowerCase());
        a.setAttribute("href", + "/" + "HomePage.html");
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

let projectArray = {
    0: {
        name: "Flow Diagram V1",
        description: `First flow diagram that I created for this project using LucidCharts. It includes features that 
            I am currently working on, but also will be added in the future.`,
        image: "images/flow-diagram.png"
    },
    1: {
        name: "Home Page Wireframe",
        description:"",
        image: ""
    }
}
function renderProjects(){
    let projects = document.getElementById("get-projects");
    let name = document.createElement("label");
    name.innerHTML = projectArray[0].name;
    projects.appendChild(name);
    let description = document.createElement("p");
    description.innerHTML = projectArray[0].description;
    projects.appendChild(description);
    let image = document.createElement("img");
    image.setAttribute("src", projectArray[0].image);
    image.setAttribute("alt", "flow-diagram");
    image.setAttribute("id", "flow-diagram");
    projects.appendChild(image);
}
renderProjects();