import {loginpage} from './login.js'
import {setListner} from './listners.js'

async function main() {
    const El = loginpage();
    setListner(El);
    // Her I Will Get Data !<~>!
}

// Her Is The Main ...!! 
main()