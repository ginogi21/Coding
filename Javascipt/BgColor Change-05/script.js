const containerEl = document.querySelector('.container');
const colorChangeBtn = document.querySelector('#btn');

colorChangeBtn.addEventListener('click',()=>{
  const newDiv = document.createElement('div');
  newDiv.classList.add('box')
  containerEl.appendChild(newDiv)
  newDiv.style.backgroundColor = `#${randomColor()}`;
  newDiv.innerText = `#${randomColor()}`;

  setTimeout(()=>{
    containerEl.removeChild(newDiv)
  },3000)
})

function randomColor(){
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";

  for(let i = 0; i < colorCodeLength; i++){
    const randomNum = Math.floor(Math.random() * chars.length)
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode
}
randomColor()

function generateColors(){
  const newColorCode = randomColor();
  console.log(newColorCode)
}
generateColors()