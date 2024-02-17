let ybtn = document.querySelector(".yes");
let nbtn = document.querySelector(".not");

nbtn.addEventListener("mouseenter",(e)=>{
    let placex = Math.floor(Math.random()*500)+"px";
    let placey = Math.floor(Math.random()*900)+"px";
    nbtn.style.top = placex;
    nbtn.style.left = placey;
})