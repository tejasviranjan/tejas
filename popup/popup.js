var parent = document.querySelector(".model-parent"),
    button = document.getElementById("btn1"),
    x = document.querySelector(".x");
    section = document.querySelector("section")
    body = document.querySelector("body")

button.addEventListener("click", appearFunc)

function appearFunc(){
    parent.style.display = "block";
    
    section.style.transition = "0.5s";
    section.style.filter = "blur(10px)"; 

}

x.addEventListener("click", dissappear)

function dissappear(){
    parent.style.display = "none";
    section.style.transition = "0.5s";
    section.style.filter = "blur(0px)";
    
    
}

parent.addEventListener("click", dissappearParent)

function dissappearParent(e){
    if (e.target.className=="model-parent"){
        parent.style.display = "none";
        section.style.transition = "0.5s";
        section.style.filter = "blur(0px)";
    }

}