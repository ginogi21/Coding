const myProgress = document.querySelector('.myProgress');
const myBar = document.querySelector('.myBar');


let barIndex = 0;
myProgress.addEventListener('click',(e)=>{
 const target = getComputedStyle(e.target);
 if( barIndex === 0){
  barIndex = 0;
  let width = 1;
  setInterval(()=>{
   if( width >=100){
    clearInterval();
    barIndex = 0;    
   }else{
    width ++;
    myBar.style.width = width + "%";
    document.querySelector('span').innerText = width + "%";
   }
  },10)
 }
})
