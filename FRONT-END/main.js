import {loginpage} from './login.js'
import {setListner} from './listners.js'
import { BuildProfile } from './profile.js'
import { showProfileContainers } from './profile.js'


async function main() {
    console.log("Starting main");
    const authRes = await fetch('/auth');
    const authData = await authRes.json();

    console.log("Before auth check:", authData); 

    if (authData.ok) {
        // User is authenticated 
        console.log("User is authenticated");
        showProfileContainers();
        BuildProfile(authData.token); 
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
