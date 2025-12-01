const CHECK_INTERVAL = 3000; // 30 seconds
 

onconnect = (e) => {
    const port = e.ports[0];
    console.log("JWT Check Worker connected");
    port.start();
    // I Will Not Neeed To Talk With It !! \\ 
    port.onmessage = (event) => { 
          const msg = event.data;
    if (msg.action === "stop") {
        clearInterval(interval);
        console.log("JWT Worker interval cleared");
        }
    }; 
    // That's It check check !!!  
    const interval = setInterval(() => doCheck(port), CHECK_INTERVAL);
    port.onmessageerror = () => clearInterval(interval);
};

async function doCheck(port) {
    try {
        const res = await fetch("/check-jwt", {
            method: "POST",
            credentials: "include"
        });
        port.postMessage({ valid: res.ok });
    } catch (err) {
        port.postMessage({ valid: false });
    }
}
