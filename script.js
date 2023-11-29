let slidebtnleft = document.getElementById("slide-btn-left");
let slidebtnright = document.getElementById("slide-btn-right");
let imgiteam = document.querySelectorAll(".img-iteam");

console.log(imgiteam.length - 1)

let startslider = 0
let endslider = (imgiteam.length - 1) * 100

slidebtnleft.addEventListener("click", () => {
    if (startslider < 0) {
        startslider = startslider + 100;
    }

    imgiteam.forEach(element => {
        element.style.transform = `translateX(${startslider}%)`;
    })
})

slidebtnright.addEventListener("click", () => {
    if (startslider >= -endslider+100) {
        startslider = startslider - 100;
    }

    imgiteam.forEach(element => {
        element.style.transform = `translateX(${startslider}%)`;
    })
}) 


// for sidebar navigation 

const sidebaropennavigatione1 = document.getElementById("panel-icon");
const sidebarnavigatione1 = document.getElementById("sidebar-container-navigation-id")
const sideclose = document.getElementById("close-id");

sidebaropennavigatione1.addEventListener("click",()=>{
    sidebarnavigatione1.classList.toggle("sidebar-show")
})


sideclose.addEventListener("click",()=>{
    sidebarnavigatione1.classList.toggle("sidebar-show")
})



function hideme(){
    let hide = document.getElementById("hide");
    if(hide.style.display == "none"){
        hide.style.display = "block";
    }else{
        hide.style.display = "none";
    }

}

function hideme2(){
    let hide = document.getElementById("hide-2");
    if(hide.style.display == "none"){
        hide.style.display = "block";
    }else{
        hide.style.display = "none";
    }

}