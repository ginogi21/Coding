const loginBtn = document.querySelector('#loginBtn');
const registerBtn = document.querySelector('#registerBtn');
const toggleBtn = document.querySelector('#btn');


loginBtn.addEventListener('click',()=>{
 document.querySelector('#register').style.left = '550px';
 document.querySelector('#login').style.left = '90px';
 toggleBtn.style.left = '0px'
})

registerBtn.addEventListener('click',()=>{
 document.querySelector('#login').style.left = '-550px';
 document.querySelector('#register').style.left = '90px';
 toggleBtn.style.left = '140px'
})