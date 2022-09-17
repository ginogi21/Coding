const arr = document.querySelectorAll('li');
const ul = document.querySelector('ul');

function addlist(){
  arr.forEach((elem) =>
  elem.classList.remove('active'));
  this.classList.add('active');
}

arr.forEach(e =>
  e.addEventListener('click',addlist));