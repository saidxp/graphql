export function builskillssvg(skills, totalxp) {

    const object = {}
    const skill = skills?.[0].transactions.entries()

    skill.forEach(skill => {

        let type = skill[1].type
        let amount = skill[1].amount

        if (object[type]) {
            let v = object[type]
            if (amount > v) {
                object[type] = amount
            }
        } else {
            object[type] = amount
        }
    })
    
    const final = {}
    Object.entries(object).map(([Key, value]) => {
        const key = Key.split("_")[1]
        final[key] = value
    })

    const skillsDiv = document.getElementById("skills");
    const h = document.createElement('h2');
    h.innerText = "Skills";
    h.className = "skill-row";

    skillsDiv.appendChild(h);

    Object.entries(final)
        .sort((a, b) => b[1] - a[1])
        .forEach(([name, percent]) => {
            const par = document.createElement('div');
            par.style.width = '100%';

            const maxWidth = 65;
            const rawWidth = (percent / 100) * maxWidth;
            const visibleWidth = Math.max(rawWidth, 1.5);

            const bothRounded = visibleWidth > 8;

            par.innerHTML = `
                <svg viewBox="0 0 100 8" width="100%" height="50" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <linearGradient id="grad-${name}" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:#4caf50;stop-opacity:1" />
                            <stop offset="100%" style="stop-color:#8bc34a;stop-opacity:1" />
                        </linearGradient>

                        <clipPath id="clip-${name}">
                            <rect x="30" y="1.5" width="${bothRounded ? visibleWidth : maxWidth}" height="5" 
                                rx="2.5" ry="2.5" />
                        </clipPath>
                    </defs>
                    <!-- Label -->
                    <text x="1" y="5.5" fill="#fff" font-size="2.5" font-weight="600">
                        ${name.toUpperCase()}
                    </text>
                    <!-- Background -->
                    <rect x="30" y="1.5" width="${maxWidth}" height="5" 
                        fill="rgba(51, 51, 51, 0.5)" 
                        stroke="rgba(76, 175, 80, 0.3)"
                        stroke-width="0.2"
                        rx="2.5" ry="2.5"/>

                    <!-- Progress bar -->
                    <rect 
                        class="skill-bar" 
                        x="30" y="1.5" 
                        width="${visibleWidth}" height="5" 
                        fill="url(#grad-${name})"
                        rx="${bothRounded ? 2.5 : 2.5}" 
                        ry="${bothRounded ? 2.5 : 2.5}"
                        clip-path="url(#clip-${name})"
                    />

                    <!-- Percent -->
                    <text x="22" y="5.5" fill="#8bc34a" font-size="2.2" font-weight="bold">
                        ${percent}%
                    </text>
                </svg>
                `;
            skillsDiv.appendChild(par);
        });
}