const accordion = document.getElementsByClassName('content-container');

for( e of accordion){
  e.addEventListener('click',function(){
    this.classList.toggle('active')
  })
}