// alert("welcome to Genesis resturant")
const form = document.getElementById("form").value


form.addEventListener("submit", prevent=>{
    prevent.preventDefault();
    validateInputs()
});



// function validateInputs() {
//     const username = document.forms["form"]["username"].value;
//     const password = document.forms["form"]["password"].value;

//     valid1 = "onome";
//     valid2= "onomebalikis@12345"

//     if (username.trim() ===valid1 && password.trim()===valid2) {
//          window.location.href="./genesis.html"
//          }
//          else{
//             alert("invalid username and password")
//          }
// }

function validateInputs(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById("message")
    let message;

    valid1 = "honourable555";
    valid2= "onomebalikis@12345"
    
    if (username.trim() === valid1 && password.trim() === valid2){
        document.getElementById('success').innerHTML = 'sucessful login';
        // redirect code in page
        window.location.href = 'gen.html'
        return false;
    }
    else if (username.trim() ==="") {
          message = "username and password cannot be blank" 
          errorMessage.textContent =message
        }
    else if (username !==valid1) {
        message ="Invalid username"
        errorMessage.textContent =message
    }
    
   else if (password.trim() ==="") {
        message = "password cannot be blank"
        errorMessage.textContent=message
    }
    else if (password.trim() !==valid2) {
        message = "please check the password"
        errorMessage.style.color="rgba(235, 8, 8, 0.908) "
        errorMessage.textContent=message
    }
    else{
        message="Successfully Login"
        errorMessage.style.color="rgba(0, 128, 0, 0.818)"
        errorMessage.textContent= message
        window.location.href= "gen.html";
        
    }
}

// function validate() {
//     valid1 = "onome";
//     valid2= "onomebalikis@12345"
//     const username = document.getElementById("username").value
   
//     const password = document.getElementById("password").value
//     const errorMessage = document.getElementById("message")
//     const success_Message = document.getElementById("success")
//      valid1 = "onome";
//      valid2= "onomebalikis@12345"
//     if (username.trim() ==="") {
//       errorMessage.textContent = "username and password cannot be blank" 
//     }
//     else if (username !==valid1) {
//         message ="Invalide username"
//         errorMessage.textContent =message
//     }
    
//    else if (password.trim() ==="") {
//         message = "password cannot be blank"
//         errorMessage.textContent=message
//     }
//     else if (password.trim() !==valid2) {
//         message = "please check the password"
//         errorMessage.style.color="rgba(235, 8, 8, 0.908) "
//         errorMessage.textContent=message
//     }
//     else{
//         message="Successfully Login"
//         errorMessage.style.color="rgba(0, 128, 0, 0.818)"
//         errorMessage.textContent= message
//         window.location.href= "genesis.html";
//     }

// }


