import { loginpage } from '../builder/login.js'
import { setListner } from '../builder/listners.js'
import { BuildProfile, showProfileContainers } from '../builder/profile.js'
import { isTokenValid } from './authentication/auth.js'

async function main() {
    if (isTokenValid()) { 
        console.log("There Is ALOT OF BOOM ")
        showProfileContainers();
        BuildProfile();
    } else {
        const el = loginpage();
        setListner(el);
    }
}
// Main !!
main();