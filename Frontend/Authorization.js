//Signin Handling

let loginSubmit = async (event) => {
    event.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    try {

        const response = await fetch(`http://localhost:8000/api/auth/login?email=${email}&password=${password}`)
        if (response.status == 200) {
            alert("Login Successfull")
            window.location.href = "MainScreen.html"
        }
        else {
            alert("Invalid Password")
        }
    } catch (error) {
        alert(error)
    }
}

//Signup Handling

let signupSubmit = async (event)=>{

    event.preventDefault();
    const userData = {}

    const userName = document.getElementById("userName").value
    const email = document.getElementById("email").value
    const mobileNumber = document.getElementById("mobileNumber").value
    const password = document.getElementById("password").value
    const confirmPassword = document.getElementById("confirmPassword").value 

    userData.userName = userName
    userData.email = email
    userData.mobileNumber = mobileNumber
    userData.password = password
 
    if(password != confirmPassword){
        alert("Password and Confirm password Doesn't match")
        return;
    }

    try{
    const response = await fetch('http://localhost:8000/api/auth/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    if(response.status == 200 || response.status == 201){
    alert("Registration Successfull")
    window.location.href = "Login.html"
    }
    else{
        alert("Mail Id or Mobile number already exists")
    }
}
    catch(error){
        alert(error)
    }
}
    
