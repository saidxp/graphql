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
    } catch (err) {
        console.error(err);
    }
}
