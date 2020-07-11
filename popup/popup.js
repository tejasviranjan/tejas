var parent = document.querySelector(".model-parent"),
    model = document.querySelector(".model")
    model1 = document.querySelector(".model1")
    button = document.getElementById("btn1"),
    abt_btn = document.getElementById("btn2")
    x = document.querySelector(".x");
    x1 = document.querySelector(".x1");

    section = document.querySelector("section")
    body = document.querySelector("body")

button.addEventListener("click", appearFunc)
abt_btn.addEventListener("click", abtbtnFunc)



function appearFunc(){
    //fuction for button 1
    parent.style.display = "block";
    model1.style.display = "None";
    model.style.display = "block";
    section.style.transition = "1s";
    section.style.filter = "blur(10px)"; 

}


function abtbtnFunc(){
    //function for button 2
    parent.style.display = "block";
    model.style.display = "none";
    model1.style.display = "block";
    section.style.transition = "0.5s";
    section.style.filter = "blur(10px)"; 
}


x.addEventListener("click", dissappear)
x1.addEventListener("click", dissappear)


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