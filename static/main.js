import {loginpage} from './login.js'
import {setListner} from './listners.js'
import { BuildProfile } from './profile.js'

 async function main() {
    console.log("howa")
    const auh = await fetch('/auth')
    const a =  await auh.json()
    console.log("before auth")
    console.log(a)
    console.log("after auth")
    if (a.ok) {
        BuildProfile(a.token)
    }else {
    const El = loginpage();
     setListner(El);
    }
    // Her I Will Get Data !<~>!
}

main()
// Her Is The Main ...!! 
 