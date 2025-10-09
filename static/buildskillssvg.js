export function builskillssvg(skills) {
    const object = {
    }
    console.log("skills --->")
    console.log(skills?.[0].transactions)
    // Her I Will Build The Svg For Skills <!-!> !! -!>
    const skill = skills?.[0].transactions.entries()
    skill.forEach(skill => {
        console.log(skill)
        console.log(object)
        let type = skill[1].type
        let amount = skill[1].amount
        console.log("the type and amount")
        console.log(type, amount)
        if (object[type]) {
            let v = object[type]
            console.log("the v")
            console.log(v)
            if (amount > v) {
                object[type] = amount
            }
        } else {
            object[type] = amount
        }
    })
    console.log(object)
    const final = {}
    Object.entries(object).map(([Key, value]) => {
        const key = Key.split("_")[1]
        final[key] = value
    })
    console.log(final)
    // her i will build the svg of the skills
    // her i want to loop  trought them and then get exact value of each one 
    const skillsDiv = document.getElementById("skills");
    const h = document.createElement('h2');
    h.innerText = "Skills";
    h.className = "label_skills"
    document.body.appendChild(h)
    Object.entries(final).sort((a, b) => b[1] - a[1]).forEach(([name, percent]) => {
        const par = document.createElement('div');
        const width = (percent / 100) * 80;

        par.innerHTML = `
    <svg width="300" height="20" xmlns="http://www.w3.org/2000/svg"
      style="background:#222; border-radius:8px; display:block; margin:4px 0;">
      <!-- Label -->
      <text x="2" y="15" fill="white" font-size="14">${name}</text>
      <!-- Background bar -->
      <rect x="218" y="2" width="80" height="15" fill="#333" rx="4" ry="4"></rect>
      <!-- Green filled bar -->
      <rect x="218" y="2" width="${width}" height="15" fill="#4caf50" rx="4" ry="4"></rect>
      <!-- Percentage -->
      <text x="120" y="15" fill="white" font-size="14">${percent}%</text>
    </svg>
        `;
        skillsDiv.appendChild(par);
    });
    //skill.appendefore()

}