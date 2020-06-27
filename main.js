//form
const btn = document.querySelector("#btn");
const Msg = document.querySelector("#msg");
//const Form = document.querySelector("myForm");
btn.addEventListener("click", function(e){
    e.preventDefault();
    if(Email.value.length === 0 || Password.value.length === 0){
        console.log("Taga hiling hiling man!");
        Msg.innerHTML = "<small class='error'>Please fill out the forms!</small>";
        setTimeout(()=>document.querySelector('.error').remove(),3000);
    }else{
        console.log("Very Good!");
        window.alert("Welcome!");
    }
});