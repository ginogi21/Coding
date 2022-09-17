const submitBtn = document.querySelector('.submit_btn');
const inputTxt = document.querySelector('#txt');
const li = document.querySelector('.container ul');

submitBtn.addEventListener('click',(e)=>{
  if(inputTxt.value !== ""){
    e.preventDefault();
    const newLi = document.createElement('li');
    const txtValue = inputTxt.value;
    li.appendChild(newLi).innerHTML = txtValue;
    const span = document.createElement('span');
    newLi.appendChild(span).innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
    setTimeout(()=>{
      inputTxt.value ="";
    },300)
  }
  const liAll = document.querySelectorAll('span');
  liAll.forEach((elem)=>{
    elem.addEventListener('click',()=>{
      elem.parentElement.style.opacity = 0;
      setTimeout(()=>{
        elem.parentElement.style.display = 'none'
        elem.parentElement.remove();
      },300)
    })
  })

})