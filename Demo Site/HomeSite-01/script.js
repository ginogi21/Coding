const navBtn = document.querySelector('.nav-user-icon.online');

navBtn.addEventListener('click',()=>{
 settingsMenuToggle()
})

let settingsMenu = document.querySelector('.settings-menu');

function settingsMenuToggle(){
 settingsMenu.classList.toggle('settings-menu-height')
}

const darkBtn = document.querySelector('#dark-btn');

darkBtn.addEventListener('click',()=>{
 darkBtn.classList.toggle('dark-btn-on');
 document.body.classList.toggle('dark-theme');

 if(localStorage.getItem('theme') == 'light'){
  localStorage.setItem('theme','dark');
 }
 else{
  localStorage.setItem('theme','light');
 }
})

if(localStorage.getItem('theme') == 'light'){
 darkBtn.classList.remove('dark-btn-on');
 document.body.classList.remove('dark-theme')
}
else if(localStorage.getItem('theme') == 'dark'){
 darkBtn.classList.add('dark-btn-on');
 document.body.classList.add('dark-theme')
}
else{
 localStorage.setItem('theme','light');
}

localStorage.setItem('theme','dark');
localStorage.getItem('theme');
