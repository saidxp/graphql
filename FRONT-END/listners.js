import {Sendjwt} from "./sendData.js"
import { showProfileContainers } from "./profile.js";

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

            const text = await response.text();
            if (!response.ok) {
                throw new Error('Invalid credentials');
            }
            const token = response.headers.get('Authorization');
            if (!token) {
                throw new Error('No JWT received');
            }

            // Store token in DB or use it in next step
            Sendjwt(token);
            showProfileContainers();

        } catch (err) {
            console.error(err);
            alert('Login failed: ' + err.message);
        }
    });
}

