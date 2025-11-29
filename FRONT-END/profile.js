import { user } from "/query.js"
import { buildheader } from "/buildheader.js"
 
import { builskillssvg } from "/buildskillssvg.js"
import { builratiosvg } from "/buildratiosvg.js"
import { buildinformation } from "./buildinformation.js"

export async function BuildProfile(token) {
   
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
  //console.log(json.data.transaction[0].amount);
  let lev = json.data.latestLevel?.[0].amount
  let name = json.data.user_info?.[0].firstName
  let lat = json.data.user_info?.[0].lastName
  // Her I Will Call Every Function to build something in the page profile !! 
  // her i wll free all container :
  showProfileContainers();
  
  // her i will call funciton to build header !! 
  buildheader(name,lat,lev, token)
  builskillssvg(json.data.skills, json.data.totalxp)
  builratiosvg(json.data.ratio)
  buildinformation(json.data.user_info)
  //buildratiosvg()
  //let rat = parseFloat(json.data.user?.[0].auditRatio.toFixed(1))
    //parseFloat(num.toFixed(1));
 
  //console.log("-*------------>", name)
  let container = document.getElementById("formlogin")
  if (container) {
    container.remove()
  }
}

export function showProfileContainers() {
  const containers = [
      "header",
      "Info",
      "skills",
      "101",
      "project",
      "name",
      "lastname",
      "level",
      "footer"
  ];
  containers.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "";
  });
  const login = document.getElementById("Login");
  if (login) login.style.display = "none";
  // \<<<|<->|>>>/
}
