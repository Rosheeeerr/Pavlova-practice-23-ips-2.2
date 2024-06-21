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

let offset=0;
const sliderLine=document.querySelector('.items_slider');

document.querySelector('.slider-next').addEventListener('click',function(){
   offset=offset+60;
   if(offset>120){
       offset=0;
   }
   sliderLine.style.left=-offset+'vw';
})
document.querySelector('.slider-prev').addEventListener('click',function(){
   offset=offset-60;
   if(offset<0){
       offset=0;
   }
   sliderLine.style.left=-offset+'vw';
})
