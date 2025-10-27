import {loginpage} from './login.js'
import {setListner} from './listners.js'
import { BuildProfile } from './profile.js'
import { showProfileContainers } from './profile.js'

 async function main() {
    console.log("howa")
    const auh = await fetch('/auth')
    const a =  await auh.json()
    console.log("before auth")
    console.log(a)
    console.log("after auth")
    if (a.ok) {
    showProfileContainers();
    BuildProfile(a.token)
    }else {
    const El = loginpage();
     setListner(El);
    }
    // Her I Will Get Data !<~>!
}
// the main of the main !!
main()
// Her Is The Main ...!! 
 