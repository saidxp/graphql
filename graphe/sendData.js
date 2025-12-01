import { GetJwt } from "./getjwtfromdb.js";
import { BuildProfile } from "./profile.js";

export async function Sendjwt(jwtString) { 
    // << === >> !! 
    // Thats 
    try { 
        const username = localStorage.getItem("login");
        if (!username) {
            throw new Error("No username found in localStorage");
        }
        const response = await fetch('/jwt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `jwt=${encodeURIComponent(jwtString)}&username=${encodeURIComponent(username)}`
        }); 

        if (!response.ok) {
            throw new Error('Failed to send JWT to server');
        }
        console.log('JWT and username sent to server successfully'); 
        const token = await GetJwt(); 
        if (token.s) {
            console.log("Token retrieved from DB:");
            console.log(token);
            BuildProfile(token.jwt);
        }

    } catch (err) {
        console.error(err);
    }
}
