let nav=document.querySelector("nav");

let up=document.querySelector(".up");


window.onscroll=()=>{
    if (window.scrollY<740){
        nav.style.background="rgba(141, 118, 83, 0.7)";
        up.style.display="none ";
    }
    else{
        nav.style.background="tan";
        up.style.display="flex";
    }
}

// let data=document.querySelector(".data");
// let date=new Date();

// data.innerHTML=date.getFullYear();