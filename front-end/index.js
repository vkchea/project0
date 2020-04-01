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
        a.setAttribute("href", "/" + "HomePage.html");
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