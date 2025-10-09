export function buildheader(name, lat, lev) {
    const lin = document.querySelector('link[href="/css/login.css"]');

    if (lin) {
        lin.remove();
    }
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = "/css/style.css";
    document.head.appendChild(link);

    let out = document.createElement("button")
    out.id = "logout"
    out.className = "out"
    out.innerText = "logout"
    let header = document.getElementById("header")
    header.appendChild(out)
    let userName = document.getElementById('name')
    userName.innerHTML = ""
    let lastName = document.getElementById('lastname')
    lastName.innerHTML = ""
    let level = document.getElementById('level')
    level.innerHTML = ""
    userName.innerText = `${name}`
    lastName.innerText = `${lat}`
    level.innerText = `Current Level : ${lev}`
}