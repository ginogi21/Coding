let toggleBtn = document.querySelector('.navbar_toggleBtn');
let menu = document.querySelector('.navbar_menu');
let icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click',()=>{
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});