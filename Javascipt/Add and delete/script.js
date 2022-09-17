const div = document.querySelector('.contain');
const addBtn = document.querySelector('#addbtn');
const deleteBtn = document.querySelector('#deletebtn');

console.log(addBtn)

addBtn.addEventListener('click',addBox);

function addBox(){
  const newDiv = document.createElement('div');
  console.log(newDiv)
  div.appendChild(newDiv).classList.add('show');  
}

/* const shows = document.querySelectorAll('.show'); */

deleteBtn.addEventListener('click',()=>{
  div.removeChild(div.lastChild);
});


