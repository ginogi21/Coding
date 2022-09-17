const menuLinks = document.querySelectorAll('.menu-link');
let currentMenu;

menuLinks.forEach((elem)=>{
  elem.addEventListener('click',menuHandler);
})

function menuHandler(e){
  if(currentMenu){
    inactivate(currentMenu);
  }
  activate(e.target);
} 


function activate(elem){
  elem.classList.add('active')
  currentMenu = elem;
}

function inactivate(elem){
  elem.classList.remove('active');
}

