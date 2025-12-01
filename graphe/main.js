import {loginpage} from './login.js'
import {setListner} from './listners.js'
import { BuildProfile } from './profile.js'
import { showProfileContainers } from './profile.js'


async function main() {
    console.log("Hello Bro !! ")
    // <<==>> !-! <<==>> \\ 
    if (isTokenValid()) {
        // User is authenticated 
        console.log("User is authenticated");
        showProfileContainers();
        BuildProfile(); 
    } else {
        // User is not authenticated
        console.log("User is not authenticated, showing login page");
         const el = loginpage();
        setListner(el);
    }
    console.log("After auth check"); // <<===>> \\ {0}...}
}

// start<=>main
main();

function isTokenValid() {  
    const raw = localStorage.getItem("jwt");
    if (!raw) return false;
    const parts = raw.split('.');
    if (parts.length !== 3) return false; 
    console.log("IM At Check Validation Of Time From Local-Storage")
    console.log(parts)
    try {
        const payload = JSON.parse(atob(parts[1]));
        console.log("Im At Part of payload :") 
        console.log(payload) 
        console.log("<<====>>")
        if (!payload.exp) return false;
        const now = Math.floor(Date.now() / 1000);
        return now < payload.exp;
    } catch {
        return false;
    }
}
