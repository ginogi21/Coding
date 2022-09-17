const monthEl= document.querySelector('#month');
const weekdayEl= document.querySelector('#weekday');
const dayEl= document.querySelector('#day');
const yearEl= document.querySelector('#year');

const date = new Date();

monthEl.innerText = date.toLocaleString("en",{month:"long"});
weekdayEl.innerText = date.toLocaleString("en",{weekday:"long"});
dayEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear()