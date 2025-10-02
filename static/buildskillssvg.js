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
        }else {
            object[type] = amount
        }
    })
    console.log(object)
    const final = {}
    Object.entries(object).map(([Key , value]) => {
        const key = Key.split("_")[1]
        final[key] = value
    })
    console.log(final)
    // her i will build the svg of the skills
    const skillsDiv = document.getElementById("skills");
    skillsDiv.innerHTML = `
    <svg width="600" height="100" xmlns="http://www.w3.org/2000/svg" style="background:#222; border-radius:10px;">
    <!-- Label -->
    <text x="10" y="35" fill="white" font-size="16">prog</text>
    <!-- Background bar -->
    <rect x="70" y="15" width="500" height="25" fill="#333" rx="5" ry="5"></rect>
    <!-- Green filled bar -->
    <rect x="70" y="15" width="260" height="25" fill="#4caf50" rx="5" ry="5"></rect>
    <!-- Percentage -->
    <text x="480" y="35" fill="white" font-size="16">65%</text>
    </svg>
    `;

}