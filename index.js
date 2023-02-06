const crousel=document.querySelector(".crousel");
 const iconLeft=document.querySelector(".arrow-left")
 const iconRight=document.querySelector(".arrow-right")
 const arrows=document.querySelector(".arrows")
let isDragstrat=false,prevePageX,prevScrollLeft;

const dragStart=(e)=>{
    isDragstrat=true;
prevePageX=e.pageX;
prevScrollLeft=crousel.scrollLeft;
}
const dragging=(e)=>{
    if(!isDragstrat)return;
    e.preventDefault();
    positionDiff=e.pageX-prevePageX;
    crousel.scrollLeft=prevScrollLeft-positionDiff;
}
const dragStop=(e)=>{
    isDragstrat=false;
}

crousel.addEventListener("mousemove",dragging);
crousel.addEventListener("mousedown",dragStart);
crousel.addEventListener("mouseup",dragStop);

iconLeft.addEventListener("click",(e)=>{
    
})