export function builratiosvg(object) {
    
    const obj = object[0];
    const ratio = obj.auditRatio.toFixed(2);
    const failed = obj.failed.aggregate.count;
    const success = obj.sucess.aggregate.count;
    const total = failed + success;
    const successPercent = (success / total) * 100;

    const container = document.getElementById("101");

    if (!container) {
        console.log("⚠️ No container found with id='101'");
        return;
    }
    container.innerHTML = "";
    const title = document.createElement("h2");
    title.innerText = "Audit Ratio";
    title.className = "skill-row";
    container.appendChild(title);

   
    const radius = 60;
    const cir = 2 * Math.PI * radius;
    const set = cir * (1 - successPercent / 100);

    const svgWrapper = document.createElement("div");
    svgWrapper.innerHTML = `
        <svg width="200" height="200" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="successGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#4caf50;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#8bc34a;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#4caf50" flood-opacity="0.5"/>
                </filter>
            </defs>

            <!-- Red background circle -->
            <circle cx="75" cy="75" r="60" 
                stroke="rgba(239, 68, 68, 0.3)" 
                stroke-width="18" 
                fill="none"/>

            <!-- Red main circle -->
            <circle cx="75" cy="75" r="60" 
                stroke="#ef4444" 
                stroke-width="18" 
                fill="none"
                stroke-dasharray="${cir}" 
                stroke-dashoffset="0"
                transform="rotate(-90 75 75)"
                opacity="0.8"/>

            <!-- Success circle -->
            <circle class="ratio-circle-success"
                cx="75" cy="75" r="60" 
                stroke="url(#successGrad)" 
                stroke-width="18" 
                fill="none"
                stroke-dasharray="${cir}" 
                stroke-dashoffset="${set}"
                transform="rotate(-90 75 75)"
                stroke-linecap="round"
                filter="url(#shadow)"/>

            <!-- Labels inside circle -->
            <text x="75" y="70" text-anchor="middle" 
                fill="#fff" font-size="12" font-weight="500" opacity="0.7">
                Audit Ratio
            </text>
            <text x="75" y="85" text-anchor="middle" 
                fill="#8bc34a" font-size="20" font-weight="bold">
                ${ratio}
            </text>
        </svg>
    `;
    container.appendChild(svgWrapper.firstElementChild);

    // 🏷️ Add labels (Success / Failed)
    const label = document.createElement("div");
    label.className = "label-ratio";
    label.innerHTML = `
        <div>
            <div class="success-count">${success}</div>
            <div class="label-text">Success</div>
        </div>
        <div>
            <div class="failed-count">${failed}</div>
            <div class="label-text">Failed</div>
        </div>
    `;
    container.appendChild(label);

 
}
