const myForm = document.querySelector('#my_form');
const inputName = document.querySelector('#name');
const inputTown = document.querySelector('#town');
const inputBtn = document.querySelector('#btn');
const div  = document.querySelector('.contain');

inputBtn.addEventListener('click',addText);

function addText(){
  const newP = document.createElement('p');
  div.appendChild(newP);
  newP.classList.add('context');
  newP.textContent = inputName.value + " " + inputTown.value;
  

  inputName.value = "";
  inputTown.value = "";

  return false;
}
