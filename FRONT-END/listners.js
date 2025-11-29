import { Sendjwt } from "./sendData.js";
import { showProfileContainers } from "./profile.js";

export async function setListner({ form, nameinput, password }) {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = nameinput.value;
        const pwd = password.value;
        console.log("the user name:", username);
        console.log("the password:", pwd);

        try {
            const response = await fetch('https://learn.zone01oujda.ma/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa(username + ':' + pwd),
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json(); //
            console.log("Server response:", data);

            if (!response.ok) {
                throw new Error(data.message || 'Invalid credentials');
            }
            Sendjwt(data);  
            showProfileContainers(); // <<//>> !!

        } catch (err) {
            console.error(err);
            alert('Login failed: ' + err.message);
        }
    });
}
