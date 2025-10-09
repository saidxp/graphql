
export function builratiosvg(object) {
    // (==> The object <==)
    console.log("=====> THE SVG OF RATIO")
    console.log(object)
    console.log(object)
    const obj = object[0];
    console.log(obj.failed.aggregate.count); //
    console.log(obj.failed.aggregate.count); // 
    console.log("<============>")
    // ============================ >>
    let ratio = obj.auditRatio.toFixed(2)
   
    console.log("the ratio") 
    console.log(ratio)
    console.log("howa ola machy hwa ====")
    let failed = obj.failed.aggregate.count
    let success = obj.sucess.aggregate.count
    const total = failed + success;
    // =================>
    const successPercent = (success / total) * 100;
    const container = document.getElementById("101");
    if (!container) {
        console.log("the problem is there is nooooo cintainer")
    }
    const radius = 60;
    const cir = 2 * Math.PI * radius; // ~376.99
    const set = cir * (1 - successPercent / 100);
    console.log(set)
    container.innerHTML = `
        <svg width="200" height="200" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
          <circle 
            cx="75" cy="75" r="60" 
            stroke="red" 
            stroke-width="20" 
            fill="none"/>
           <circle 
            cx="75" cy="75" r="60" 
            stroke="green" 
            stroke-width="20" 
            fill="none"
            stroke-dasharray="${cir}" 
            stroke-dashoffset="${set}"
            transform="rotate(-90 75 75)" />
              <!-- Text inside circle -->
        <text x="75" y="75" text-anchor="middle" dominant-baseline="middle" 
            fill="white" font-size="10" font-family="Arial">
        Audit ratio
            </text>
        </svg>
    `;
    // Let's Build This Label For Exemple !
    // Labels Below The Donus ...!

      const label = document.createElement('div')
      const auditratio = document.createElement('div')
      auditratio.innerText = `Ratio : ${ratio}`
            auditratio.className = "auditratio"
      label.className = "label-ratio"
      const H1 = document.createElement('h');
      const H2 = document.createElement('h');
      H1.innerText = `success: ${success}`;
      H2.innerText = `failed: ${failed}`;
      H1.style.color = "green";
      H2.style.color = "red";
      H1.style.fontSize = "14px";
      H2.style.fontSize = "14px";
      label.appendChild(H1)
      label.appendChild(H2)
      container.appendChild(auditratio)
      container.appendChild(label);
}
