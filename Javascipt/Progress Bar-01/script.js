const button = document.querySelector('.button'),
      progressBar = document.querySelector('.progress-bar'),
      percentNum = document.querySelector('.num');

let percent = 0;
let percentInterval = null;

button.addEventListener('click',()=>{
 
 percentInterval = setInterval(()=>{
  percent++
  percentNum.innerText = percent;
 },60)

 progressBar.classList.add('active');
 
 setTimeout(()=>{
  progressBar.classList.remove('active');
  button.querySelector('i').classList.replace("fa-download","fa-check")
  button.querySelector('span').innerText = "Completed";
  clearInterval(percentInterval);
  percent = 0;  
 },6000)

})