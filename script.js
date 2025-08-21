document.getElementById("contactform").addEventListener("submit",function(event){
    event.preventDefault();
    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let message=document.getElementById("message").value.trim();
    let formMessage=document.getElementById("formMessage");
    let emailPattern=/^[^]+@[^]+\.[a-z]{2,3}$/;
    if(name.length<3){
        formMessage.textContent="Name must be at least 3 charachters,";
        return;

    }
    if(!email.match(emailPattern)){
        formMessage.textContent="Please enter a valid email.";
        return;
    }
    if(message.length<10){
        formMessage.textContent="Message must be at least 10 characters.";
        return;

    }
    formMessage.style.color="green";
    formMessage.textContent="Form submitted successfully!";
    

    document.getElementById("contactForm").requestFullscreen();


});
const toggleBtn=document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")){
            toggleBtn.textContent="Light Mode";

        }else{
            toggleBtn.textContent="Dark Mode";

        }
});