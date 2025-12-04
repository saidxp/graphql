// Get Jwt From Localstorage Where 
export function getJWT() {
    const raw = localStorage.getItem("jwt");
    if (!raw) return null;
    return raw; 
}