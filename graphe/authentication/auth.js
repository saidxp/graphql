export function isTokenValid() {
    const raw = localStorage.getItem("jwt");
    if (!raw) return false;
    const parts = raw.split('.');
    if (parts.length !== 3) return false; 
    try {
        const payload = JSON.parse(atob(parts[1]));
        if (!payload.exp) return false;
        const now = Math.floor(Date.now() / 1000);
        return now < payload.exp; 
    } catch {
        return false;
    }
}
