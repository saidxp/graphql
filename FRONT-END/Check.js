 
// const CHECK_INTERVAL = 30000; 

// Function to check JWT validity
// function checkJWT() { 
  
//     fetch("http://localhost:8080/check-jwt", { credentials: "include" }) 
//         .then(res => {
//             if (!res.ok) {
//                 postMessage({ valid: false });
//             } else {
//                 postMessage({ valid: true });
//             }
//             console.log("JWT check completed");
//         })
//         .catch(err => {
//             console.error("JWT check failed:", err);
//             postMessage({ valid: false });
//         });
// }

// // <<<->>> 
// setInterval(checkJWT, CHECK_INTERVAL);

// // Immediately check on worker start
// checkJWT();
const ports = [];

onconnect = () => {
    const port = e.ports[0];
   ports.push(port);        
    console.log("JWT     Check Worker connected");
}