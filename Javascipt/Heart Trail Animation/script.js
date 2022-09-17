const bodyEl = document.querySelector('body');
const icons = document.querySelector('i .fa-solid');

bodyEl.addEventListener('mousemove',(e)=>{
 
 // Span tag만들고 그안에 Heart넣기
 const newSpan = document.createElement('span');
 newSpan.innerHTML = `<i class="fa-solid fa-heart"></i>`;
 bodyEl.appendChild(newSpan);
 
 // X,Y좌표 잡기
 const xPos = e.offsetX;
 const yPos = e.offsetY;
 newSpan.style.left = `${xPos}px`;
 newSpan.style.top = `${yPos}px`;
 
 // Heart색 random하게 변경하기
  const colorIndex1 = Math.round(Math.random()*255);
  const colorIndex2 = Math.round(Math.random()*255);
  const colorIndex3 = Math.round(Math.random()*255);
  const colorIndex = `rgb(${colorIndex1},${colorIndex2},${colorIndex3})`;
  newSpan.style.color = `${colorIndex}`;
  
  // Heart크기 random하게 변경하기
  const heartSize = Math.random()*100;
  newSpan.style.width = `${heartSize}px`;
  newSpan.style.height = `${heartSize}px`;
  newSpan.style.fontSize = `${heartSize}px`;

  // 2초후 Heart사라지게 하기
 setTimeout(()=>{
 newSpan.remove()
 }, 2000)

})