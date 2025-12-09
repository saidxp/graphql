import { loginpage } from '../builder/login.js'
import { setListner } from '../builder/listners.js'
import { BuildProfile, showProfileContainers } from '../builder/profile.js'
import { isTokenValid } from './authentication/auth.js'

async function main() {
    if (isTokenValid()) { 
        showProfileContainers();
        BuildProfile();
    } else {
        const el = loginpage();
        setListner(el);
    }
}
main();