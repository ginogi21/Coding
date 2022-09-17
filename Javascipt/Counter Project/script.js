let num = 0;

const value = document.querySelector('.value');
console.log(value.innerText)
const btns = document.querySelectorAll('.btn');

btns.forEach((btn)=>{
 btn.addEventListener('click',(e)=>{
  const styles = e.currentTarget.classList;
  if(styles.contains('btn-danger')){
   num --;
  }else if ( styles.contains('btn-success')){
   num ++;
  }else {
   num = 0;
  }
  value.innerText = num;
  if(num > 0){
   value.style.color = 'green';
  } else if(num < 0){
   value.style.color = 'red';
  }else{
   value.style.color = 'darkgray';
  }
 })
})
