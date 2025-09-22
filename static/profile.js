import { user } from "/query.js"

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
  console.log(json.data.user?.[0]);
  let name = json.data.user?.[0].firstName
  let lat = json.data.user?.[0].lastName
  let lev = parseFloat(json.data.user?.[0].auditRatio.toFixed(1))
    //parseFloat(num.toFixed(1));
  console.log("-*------------>", name)
  let container = document.getElementById("formlogin")
  if (container) {
    container.remove()
  }
  // <<======>>
  let userName = document.getElementById('name')
  userName.innerHTML = ""
  let lastName = document.getElementById('lastname')
  lastName.innerHTML = ""
  let level = document.getElementById('level')
  level.innerHTML = ""
  // <<=====>>
  console.log(userName)
  console.log(lastName)
  console.log(level)
  userName.innerText = `${name}`
  lastName.innerText = `${lat}`
  level.innerHTML = `${lev}`
  let last = document.getElementById('lastname')
  
}