import {loginpage} from './login.js'
import {setListner} from './listners.js'

function main() {
    const El = loginpage();
    setListner(El);
}

main()