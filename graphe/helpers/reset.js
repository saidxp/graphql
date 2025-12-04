import { loginpage } from "../../builder/login.js";
import { setListner } from "../../builder/listners.js";

 export async function reset() {
            localStorage.removeItem("jwt");
            resetMainContainers()
            const El = loginpage();
            setListner(El); 
            const loginCSS = document.querySelector('link[href="./css/style.css"]');
            if (loginCSS) loginCSS.remove(); 
}

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
    containers.forEach(id => {
        const el = document.getElementById(id);
        if (id === "skills") {
            el.innerHTML = ""   
        }
        if (el) {    
            el.style.display = "none";
        }
    });
    document.getElementById("logout")?.remove()
}
