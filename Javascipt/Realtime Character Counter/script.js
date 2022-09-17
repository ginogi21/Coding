const textarea = document.querySelector('#textarea');
const totalCounter = document.querySelector('#total-counter');
const remainCounter = document.querySelector('#remaining-counter');

textarea.addEventListener('keyup',()=>{
 updateCounter()
})

// 방법 1)
/* function updateCounter(){
 const textLength = textarea.value.length;
 totalCounter.innerText = textLength;
 remainCounter.innerText = `${50-textLength}`;
} */


//방법 2)
function updateCounter(){
 const totalTextLength = textarea.value.length;
 const maxTextLength = textarea.getAttribute('maxlength');

 totalCounter.innerText = totalTextLength;
 remainCounter.innerText = `${maxTextLength - totalTextLength}`;
}