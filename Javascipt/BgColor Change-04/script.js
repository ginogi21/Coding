const body = document.querySelector('body');
const bgColor = document.querySelector('#bgColor');

bgColor.addEventListener('change',()=>{
  let colorIndex = bgColor.value;
  body.style.backgroundColor = colorIndex;
});
