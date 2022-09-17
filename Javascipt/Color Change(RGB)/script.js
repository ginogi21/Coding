const box = document.querySelector('.box');
const btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{
  const randomNum1 = Math.round(Math.random()*255);
  const randomNum2 = Math.round(Math.random()*255);
  const randomNum3 = Math.round(Math.random()*255);
  box.innerHTML = `${randomNum1}, ${randomNum2}, ${randomNum3}`;
  const bgColor = `rgb(${randomNum1}, ${randomNum2},${randomNum3})`;
  box.style.backgroundColor = bgColor;
})
