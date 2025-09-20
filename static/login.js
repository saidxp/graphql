export function loginpage() {
    // Her I Will Create it 
    // container for styling loig
    const stylediv = document.createElement('div')
    stylediv.style.display = "flex"
    stylediv.style.justifyContent = "center"    
    stylediv.style.alignItems = "center"        
    stylediv.style.height = "100vh"
    //stylediv.style.position = "center"
    const divMain = document.getElementById('main-container')
    divMain.innerHTML = ""
    // ther form !!
    //const logForm = document.createElement('div')
    const form = document.createElement('form')
    form.id = "formlogin"
    // The Input UserName !
    const userLabel = document.createElement('label')
    userLabel.htmlFor = "username"
    userLabel.textContent = "Username: "
    const nameinput = document.createElement('input')
    nameinput.id = "username"
    nameinput.name = "username"
    nameinput.placeholder = "username"
    nameinput.required = true
    // The Input Password!
    const PasswordLabel = document.createElement('label')
    PasswordLabel.htmlFor = "password"
    PasswordLabel.textContent = "password: "
    const Password = document.createElement('input')
    Password.id = "password"
    Password.name = "password"
    Password.type = "password"
    Password.placeholder = "password"
    Password.required = true
    // Her i will add the submit buthon
    const submit = document.createElement('button')
    submit.type = "submit"
    submit.style.padding = "10px"
    submit.style.margin = "20px"
    submit.style.marginLeft = "130px"
    submit.style.backgroundColor = "yellow"
    submit.textContent = "login"
    // Her i will  add children to ther father !!
    form.append(userLabel, nameinput, document.createElement("br"))
    form.append(PasswordLabel, Password, document.createElement("br"))
    form.appendChild(submit)
    // Undefined ??!
    //Console.log(i)  
    divMain.appendChild(form)
    stylediv.append(divMain)
    document.body.append(stylediv)
    return { form, nameinput, password };
}