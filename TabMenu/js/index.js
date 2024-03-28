

document.querySelectorAll(".menu li").forEach(e=>{
    e.addEventListener("click",function(){
        document.querySelector(".menu li.active").classList.remove("active");
        e.classList.add("active");
    })
})
document.querySelectorAll(".menu li").forEach(e=>{
    e.addEventListener("click",function(){
        let tSelector=e.getAttribute("data-id");
        let tab=document.querySelector(tSelector);
        e.style.backgroundColor=tab.getAttribute("data-bgColor");
        document.querySelector(".tab.active").classList.remove("active");
        tab.classList.add("active");
    })
})