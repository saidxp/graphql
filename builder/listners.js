import { showProfileContainers, BuildProfile } from "./profile.js";

export async function setListner({ form, nameinput, password, errorDiv }) {
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
            const data = await response.json();
            if (!response.ok) {
                showError("invalid credentials", errorDiv)
                return;
            }
            localStorage.setItem('jwt', data);
            BuildProfile();
            showProfileContainers();
        } catch (err) {
            showError("Login failed", errorDiv)
        }
    });
}

function showError(message, errorDiv) {
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
    setTimeout(() => {
        errorDiv.style.display = "none";
    }, 10000);
}
