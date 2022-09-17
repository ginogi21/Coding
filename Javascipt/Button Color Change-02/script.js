const container = document.querySelector('.container');
const h1s = document.querySelectorAll('h1');


container.addEventListener('click',function(e){
 const index = e.target.getAttribute('data-index');
 if(index){
  h1s.forEach((h1)=>{
   h1.classList.remove('live')
  })
  e.target.classList.add('live')
 }
})