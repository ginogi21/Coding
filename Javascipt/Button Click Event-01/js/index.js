const btn = document.querySelector('.btn');
const spans = document.querySelectorAll('span');

btn.addEventListener('click',function(){
 for(span of spans){
  const colorIndex1 = Math.round(Math.random()*255);
  const colorIndex2 = Math.round(Math.random()*255);
  const colorIndex3 = Math.round(Math.random()*255);
  const scaleIndex = Math.round(Math.random()*200)+"%";
  span.style.color = `rgb(${colorIndex1},${colorIndex2},${colorIndex3})`;
  span.style.transform = `scale(${scaleIndex})`;
  span.classList.add('anim');
  
  setTimeout(()=>{
   for(span of spans){
    span.classList.remove('anim')
    span.style.transform = `scale(0)`;
   }
  },500)
   }
  })