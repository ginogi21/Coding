const mode = document.querySelector('.mode');
const body = document.body;

mode.addEventListener('click',()=>{
  body.classList.toggle("dark");  
})