
let usernameInput = document.getElementById("usernameInput");
let usernameCheck=true;

function checkUsername(){

    usernameInput.parentElement.querySelectorAll("span").forEach(elem=>{
        elem.remove();
    })
    
    let check = true;
    if(usernameInput.value.length<3){
        let span = SpanError("Username 3 den boyuk olmalidir")
        usernameInput.parentElement.appendChild(span);
        check=false;
    }
    if(usernameInput.value.length>20){
        let span = SpanError("Username 20 den kicik olmalidir")
        usernameInput.parentElement.appendChild(span);
        check=false;
    }
    return check;
}
document.getElementById("registerForm").addEventListener("submit",function(e){
    e.preventDefault();
    usernameCheck = checkUsername();   
})

usernameInput.addEventListener("input",function(){
    if(!usernameCheck){
        checkUsername();
    }
})

function SpanError(message){
    let span = document.createElement("span");
    span.textContent = message;
    span.style.color="red";
    return span;
}