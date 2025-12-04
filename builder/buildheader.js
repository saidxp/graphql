import { reset } from "../graphe/helpers/reset.js";
export function buildheader(name, lat, lev) {
    // Css Handling ... !!  
    const lin = document.querySelector('link[href="/css/login.css"]');
    if (lin) lin.remove();

    //  <<======>>
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./css/style.css";
    document.head.appendChild(link);

    // Create Logout Button ... !
    let out = document.createElement("button");
    out.id = "logout";
    out.className = "out";
    out.innerText = "Logout";
    let header = document.getElementById("header");
    header.appendChild(out); // << === >> !! 
    // Set User Info ... !!! 
    document.getElementById('name').innerText = name;
    document.getElementById('lastname').innerText = lat;
    document.getElementById('level').innerText = `Current Level: ${lev}`;
    // Logout Event Listener ... !!
    out.addEventListener("click", async () => { 
        try {
            // -------------------------------
            reset()
        } catch (err) {
            console.error("Logout failed:", err);
        }
    });
}

// <<=====>>> 
export function resetMainContainers() {
    const link = document.querySelector(`link[href="/css/style.css"]`);
    if (link) link.remove();
    const containers = [
        "header",
        "Info",       
        "skills",      
        "101",        
        "project",      
        "name",        
        "lastname",  
        "level", 
        "footer"       
    ];
    // <<====>> 
    containers.forEach(id => {
        const el = document.getElementById(id);
        if (id === "skills") {
            el.innerHTML = ""   
        }
        if (el) {    
            el.style.display = "none";
        }
    });
    document.getElementById("logout").remove()
}

  