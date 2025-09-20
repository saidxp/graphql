import {Sendjwt} from "./sendData.js"

export async function setListner({ form, nameinput, password }) {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = nameinput.value;
        const pwd = password.value;
        try {
            const response = await fetch('https://learn.zone01oujda.ma/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa(username + ':' + pwd),
                    'Content-Type': 'application/json'
                }
            });
            // Her Is The Invalid Credintiale !!
            // <===============||==============>
            if (!response.ok) {
                throw new Error('Invalid credentials');
            }
            const data = await response.json();
            //const jwt = data.token; !!
            console.log("=== Her Is The Data")
            console.log(data);
            console.log("her is the data")
            // <==!==> Her I Will Call Function Who Will <==!==> \\ 
            Sendjwt(data)
            alert('Login successful!');
        } catch (err) {
            console.error(err);
            alert('Login failed: ' + err.message);
        }
    });
}
