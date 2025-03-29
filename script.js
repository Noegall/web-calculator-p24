// Noémie Galliot
// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============


function calcul(a,b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (operation=="add"){ return a+b;}
    else if (operation=="subtract"){ return a-b;}
    else if (operation=="multiply"){ return a*b;}
    else if (operation=="divide"){ if (b==0){return "error";} 
        else {return a/b;}}
}


document.addEventListener("DOMContentLoaded", () => {
    touches=document.getElementsByClassName("calculator__keys")
    let number = touches[0].childNodes
    let constante = 0
    let operation = null
    ecran=document.getElementsByClassName("calculator__display")
    number.forEach((e)=> e.addEventListener("click", ()=> {if (e.id=="AC") {
        ecran[0].innerHTML=0;
        constante=0
        operation=null}
    else if (e.classList.contains("key--operator")){
        if (operation==null){constante=ecran[0].innerHTML;
            operation = e.dataset.action
        }
        else {constante=calcul(constante,ecran[0].innerHTML,operation);
            operation=e.dataset.action
        };
        ecran[0].innerHTML=null;}
    else if (e.classList.contains("key--equal")){constante=calcul(constante,ecran[0].innerHTML,operation);
        ecran[0].innerHTML=constante;
        operation=null
    }
    else { if (ecran[0].innerHTML=="0") {
        if (e.id=="point") {ecran[0].innerHTML=ecran[0].innerHTML+e.innerHTML}
        else {ecran[0].innerHTML=e.innerHTML}
    }
        else {ecran[0].innerHTML=ecran[0].innerHTML+e.innerHTML}
    }}))
})