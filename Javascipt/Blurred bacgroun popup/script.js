const joinBtn = document.querySelector('.btn');
const closeIcon = document.querySelector('.close-icon');

joinBtn.addEventListener('click',()=>{
 document.querySelector('.container').classList.add('active');
 document.querySelector('.popup-container').classList.remove('active');
})

closeIcon.addEventListener('click',()=>{
 document.querySelector('.popup-container').classList.add('active');
 document.querySelector('.container').classList.remove('active');
})