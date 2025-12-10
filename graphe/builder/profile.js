import { user } from "../builder/query.js"
import { buildheader } from "../builder/buildheader.js"
import { builskillssvg } from "../builder/buildskillssvg.js"
import { builratiosvg } from "../builder/buildratiosvg.js"
import { buildinformation } from "../builder/buildinformation.js"
import {getJWT} from "../helpers/auth.js"
import { reset } from "../helpers/reset.js"

export async function BuildProfile() {
  const token = getJWT()
  const res = await fetch('https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,  
        },    
        body: JSON.stringify({query: user}) 
  })
  const json = await res.json(); 
  if (json.errors) {  
    reset()
    return 
  } 
  let lev = json.data.latestLevel?.[0].amount
  let name = json.data.user_info?.[0].firstName
  let lat = json.data.user_info?.[0].lastName
  showProfileContainers();
  buildheader(name,lat,lev)
  builskillssvg(json.data.skills, json.data.totalxp)
  builratiosvg(json.data.ratio)
  buildinformation(json.data.user_info)
  let container = document.getElementById("formlogin")
  if (container) {
    container.remove()
  } 
}

export function showProfileContainers() {
  // Omg It's Alot Of Thing !!
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
  const loginCSS = document.querySelector('link[href="./css/login.css"]');
if (loginCSS) loginCSS.remove();
  
}
