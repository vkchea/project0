let navArray = ["Home", "Git Projects", "Blog Posts", "Log out"];

function renderNavbar(){
    
    let navbar = document.getElementById("nav-bar");
    let span = document.createElement("span");
    span.setAttribute("class", "nav-bar-h");

    let logo = document.createElement("img");
    logo.setAttribute("src", "images/logo.png");
    logo.setAttribute("alt", "logo");
    logo.setAttribute("id", "logo");
    span.appendChild(logo);
    navbar.appendChild(span);

    for(let i = 0; i < navArray.length; i++){
        let span = document.createElement("span");
        span.setAttribute("class", "nav-bar-h");
        let a = document.createElement("a");
        a.setAttribute("href", "/" + navArray[i].toLowerCase());
        span.appendChild(a);
        let p = document.createElement("p");
        a.appendChild(p);
        p.innerHTML = navArray[i];
        navbar.appendChild(span);
        if(navArray[i] === "Log out"){
            a.setAttribute("id", "logout");
        }
    }

}

renderNavbar();