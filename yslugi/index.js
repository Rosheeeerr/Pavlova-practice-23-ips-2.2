burgerOpen.addEventListener("click", () => {
    burgerMenu.style.right = "0%"
    burgerMenu.style.opacity ="1"
    burgerMenu.style.visibility ="visible"
})

burgerClose.addEventListener("click", () => {
    burgerMenu.style.right = "-11%"
    burgerMenu.style.opacity ="0"
    burgerMenu.style.visibility ="hidden"
})

let a=document.getElementById("bg");
let b=document.getElementById("pop_up");
let pop_up=document.getElementById("button-pop");
let close=document.getElementById("close");
pop_up.addEventListener('click',(e)=>{
    a.style.visibility = "visible"
     b.style.visibility = "visible"
})
close.addEventListener('click',(e)=>{
     a.style.visibility = "hidden"
     b.style.visibility = "hidden"
})

let c=document.getElementById("bg");
let d=document.getElementById("pop_up");
let pop_2=document.getElementById("button-pop-2");
let close_2=document.getElementById("close");
pop_2.addEventListener('click',(e)=>{
    c.style.visibility = "visible"
     d.style.visibility = "visible"
})
close_2.addEventListener('click',(e)=>{
     c.style.visibility = "hidden"
     d.style.visibility = "hidden"
})
