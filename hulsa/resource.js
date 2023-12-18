document.addEventListener("DOMContentLoaded" , () =>{
  const resourceContanier = document.querySelector(".resources-content");
  resourceContanier.addEventListener("click",(e) =>{
    const groupHeader = e.target.closest(".resources-group-header");

    if(!groupHeader) return ;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".resource-group-body")
    const icon = group.querySelector("i")

    // Toggle icon
    icon.classList.toggle("fa-plus")
    icon.classList.toggle("fa-minus")

    // Toggle visibility of body

    groupBody.classList.toggle("open")

    // close other open body
    const otherGroups = resourceContanier.querySelectorAll(".resources-group")

    otherGroups.forEach((otherGroup) => {
      if(otherGroup != group){
        const otherGroupBody = otherGroup.querySelector(".resource-group-body")
        const otherIcon = otherGroup.querySelector(".resources-group-header i")
         
        otherGroupBody.classList.remove("open")
        otherIcon.classList.remove("fa-minus")
        otherIcon.classList.add("fa-plus")
        
      }
    });
  })
})