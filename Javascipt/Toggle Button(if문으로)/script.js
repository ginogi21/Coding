let btn = document.querySelector('input');
let txt = document.querySelector('p');

btn.addEventListener('click', pushBtn);

function pushBtn(){
  if(btn.value === '기계켜기'){
    btn.value = '기계끄기';
    txt.textContent = '기계가 켜졌습니다.';
    txt.style.color = 'red'
  } else{
    btn.value = '기계켜기';
    txt.textContent = '기계가 꺼졌습니다.'
    txt.style.color = 'black'
  }
}