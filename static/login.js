export function loginpage() {
    // Her I Will Create it 
    // container for styling login 

    // 
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/css/login.css";
    document.head.appendChild(link); 

    const container = document.getElementById('login')
 
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
    submit.textContent = "login"
    // Her i will  add children to ther father !!
    form.append(userLabel, nameinput, document.createElement("br"))
    form.append(PasswordLabel, Password, document.createElement("br"))
    form.appendChild(submit)
    // Undefined ??!
    //Console.log(i)  
    container.appendChild(form)
   
    // Her Is The Style Div
    //container.append(divMain)
    return { form, nameinput, password };
}