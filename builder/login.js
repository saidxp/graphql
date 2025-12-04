export function loginpage() {
    // Her I Will Create it 
    // container for styling login <!-!>
    console.log("im at login page !")
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./css/login.css";
    document.head.appendChild(link); 

    const container = document.getElementById('login') 
    const errorDiv = document.createElement('div');
    errorDiv.id = "login-error";
    errorDiv.style.color = "red";
    errorDiv.style.display = "none";  
    errorDiv.textContent = "Invalid credentials!";
    container.appendChild(errorDiv);

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
    container.appendChild(form)
    return { form, nameinput, password,  errorDiv};
}