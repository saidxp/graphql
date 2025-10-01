import { user } from "/query.js"
import { buildheader } from "/buildheader.js"
 
import { builskillssvg } from "/buildskillssvg.js"

export async function BuildProfile(token) {

    console.log(user)
    console.log(token)
    // her i will build the home !!
    const res = await fetch('https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,  
        },    
        body: JSON.stringify({query: user}) 
    })

  const json = await res.json();
  console.log("----------->")
  console.log(json)
  
  //console.log(json.data.transaction[0].amount);
  let lev = json.data.latestLevel?.[0].amount
  let name = json.data.user_info?.[0].firstName
  let lat = json.data.user_info?.[0].lastName
  console.log(lev)
  // Her I Will Call Every Function to build something in the page profile !! 
  
  // her i will call funciton to build header !! 
  buildheader(name,lat,lev)
  builskillssvg(json.data.skills)
  //let rat = parseFloat(json.data.user?.[0].auditRatio.toFixed(1))
    //parseFloat(num.toFixed(1));
  //console.log("-*------------>", name)
  let container = document.getElementById("formlogin")
  if (container) {
    container.remove()
  }
}