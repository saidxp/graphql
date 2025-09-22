import { GetJwt } from "./getjwtfromdb.js";
import { BuildProfile } from "./profile.js";
 
export async function Sendjwt(jwtString) {
    try {
        const response = await fetch('/jwt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `jwt=${encodeURIComponent(jwtString)}` // Send It As form data
        });
        if (!response.ok) {
            throw new Error('Failed to send JWT to server');
        }
        console.log('JWT sent to server successfully');
            const token = await GetJwt()
            if (token.s) {
            console.log("Ana F TOKENT FROM DB-SERVER !!")
            console.log(token)
            BuildProfile(token.jwt)
            }
            // Her I Will Set Them In The Local Storage Later For Navigation
            // CALL HOME BUILDER PROFILE
    } catch (err) {
        console.error(err);
    }
}
