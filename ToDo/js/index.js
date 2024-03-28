let button=document.querySelector(".addBtn");
let input=document.querySelector("input");
let ul =document.querySelector("ul");

button.addEventListener("click",function(){
  
   let newLi=document.createElement("li");
   newLi.textContent=input.value;

   newLi.onclick=function(){
    taskClick(newLi);
   }

   let closeSpan=createClose();

   closeSpan.onclick=function(){
    close(closeSpan);
   }

   newLi.appendChild(closeSpan);
   ul.appendChild(newLi);
});
function createClose(){
    let element=document.createElement("span");
    element.classList.add("close");
    element.textContent='x';
    return element;
}
document.querySelectorAll(".close").forEach(e=>{
    e.addEventListener("click",function(){
        close(e);
    })
})

document.querySelectorAll("li").forEach(e=>{
    e.addEventListener("click",function(){
        taskClick(e);
    })
})

function close(e){
    e.parentElement.remove();
    
}
function taskClick(e){
    e.classList.toggle("checked");
}
