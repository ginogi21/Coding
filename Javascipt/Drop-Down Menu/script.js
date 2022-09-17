const h1 = document.querySelector('h1');
const dropdown = document.querySelector('.dropdown');
const toggleBtn = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const options = document.querySelectorAll('.dropdown-option');
const nextBtn = document.querySelector('.next-button');


toggleBtn.addEventListener('click',()=>{
  menu.classList.toggle('show');
})

toggleBtn.addEventListener('blur',()=>{
  menu.classList.remove('show');
})

options.forEach((item)=>{
  item.addEventListener('click',(e)=>{
    let value = e.target.textContent.trim();
    toggleBtn.innerHTML = value;
    toggleBtn.classList.add('selected');
    nextBtn.removeAttribute('disabled');
  })
})

h1.onclick = function(){
  toggleBtn.innerHTML = "";
}