let jwtWorkerInstance = null;

/// That's It  
export function getJWTWorker() {
    console.log("Initializing JWT Worker...");
    if (!jwtWorkerInstance) {
        jwtWorkerInstance = new SharedWorker("./static/Check.js");
        jwtWorkerInstance.port.start();
        // Her I Will GET LOGIN OF THE USER !!
        jwtWorkerInstance.port.onmessage = (e) => {
            console.log("JWT Worker message:", e.data);
            if (!e.data.valid) {
                
                jwtWorkerInstance.port.postMessage({ action: "stop" }); 
                localStorage.removeItem("login");
                alert("Token expired! You will be redirected.");

                // Redirect to login or refresh page
                window.location.href = "/";
            }
        };
    } else {
        // reconnect page to existing worker
        jwtWorkerInstance.port.start();
    }
    return jwtWorkerInstance;
}
