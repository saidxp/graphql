export function builskillssvg(skills) {
    const object = {
    }
    console.log("skills --->")
    console.log(skills?.[0].transactions)
    // Her I Will Build The Svg For Skills <!-!>
    
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

    // (<============>)
}   