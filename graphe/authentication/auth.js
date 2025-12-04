export function isTokenValid() { 

    const raw = localStorage.getItem("jwt"); 

    if (!raw) return false; 

    const parts = raw.split('.'); 

    console.log("The parts >>", parts) 
    console.log("<<===>>") 

    if (parts.length !== 3) return false; 

    try {
        const payload = JSON.parse(atob(parts[1]));
        
        console.log("The payload ...", payload); 

        if (!payload.exp) return false;
        const now = Math.floor(Date.now() / 1000);
        return now < payload.exp; 
    } catch {
        return false;
    }
}
