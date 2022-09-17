const bodyColor = document.body;
const chageColorBtn = document.querySelector('#btn');

chageColorBtn.addEventListener('click',()=>{
  const colorIndex1 = Math.round(Math.random()*255);
  const colorIndex2 = Math.round(Math.random()*255);
  const colorIndex3 = Math.round(Math.random()*255);
  bodyColor.style.backgroundColor = `rgb(${colorIndex1},${colorIndex2},${colorIndex3})`;
})