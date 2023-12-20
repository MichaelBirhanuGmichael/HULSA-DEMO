const boxes = document.querySelectorAll(".container");
window.addEventListener("scroll" , checkboxes);
checkboxes()
function checkboxes(){
  const triggerbottom = window.innerHeight / 5 * 4
  boxes.forEach(box=>{
    const topbox = box.getBoundingClientRect().top;
    if(topbox<triggerbottom){
      box.classList.add("show")
    }else{
      box.classList.remove("show")
    }
  })
}