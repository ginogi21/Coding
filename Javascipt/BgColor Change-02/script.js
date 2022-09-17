let changeBtn = document.querySelector('.btn');
let colorBox = document.querySelector('.box');

let colors = ['#00a8ff','#9c88ff','#fbc531','#4cd137','#e84118','#273c75'];

changeBtn.addEventListener('click',()=>{
  let changeColor = parseInt(Math.random()*colors.length);
  colorBox.style.backgroundColor = colors[changeColor];
  colorBox.style.borderRadius = "15px"
  changeBtn.style.color = colors[changeColor];
  console.log(changeColor);
});

let now = new Date();
colorBox.innerText = (`현재시각은 ${now.toLocaleString()}`);
