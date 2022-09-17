const yearInx = new Date().getFullYear();
const monthInx = new Date().getMonth();

const months =['January','February','March','April','May','June','July','August',
'September','October','November','December'];

document.querySelector('h1').innerText = `${months[monthInx]}`;
document.querySelector('p').innerText = new Date().toDateString();

setInterval(()=>{
 const timeInx = new Date().toLocaleTimeString();
 document.querySelector('.now').innerText = timeInx;
},1000)


const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;

const daysEl = document.querySelector('.days') 
let days = "";

for(let i = firstDay; i > 0; i--){
 days += `<div class=""empty"></div>`
}

for(let i = 1; i <= lastDay; i++){
 if(i === new Date().getDate()){
  days += `<div class="today">${i}</div>`
 }else{
  days += `<div>${i}</div>`
 }
}

daysEl.innerHTML = days;