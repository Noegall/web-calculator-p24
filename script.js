// Noémie Galliot
// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

document.addEventListener("DOMContentLoaded", () => {
    touches=document.getElementsByClassName("calculator__keys")
    let number = touches[0].childNodes
    ecran=document.getElementsByClassName("calculator__display")
    number.forEach((e)=> e.addEventListener("click", ()=> {if (e.id=="AC") {
        ecran[0].innerHTML=0}
    else {
        ecran[0].innerHTML=ecran[0].innerHTML+e.innerHTML
    }}))
})