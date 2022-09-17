const box = document.querySelector('.box');
const bgContainer = document.querySelector('.bg-container');


box.addEventListener('click',(e)=>{
 let target = e.target;
 if(target.classList.contains('box')){
  return target = null;
 }
  const targetImg = e.target.getAttribute('src');
  const targetTxt = e.target.getAttribute('alt');
  bgContainer.innerHTML = `<img src = "${targetImg}"><span>${targetTxt}</span>`;
  bgContainer.classList.add('active')
})