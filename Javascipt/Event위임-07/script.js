let div = document.querySelector('.constain');
let ul = document.querySelector('.list');
let colors = ul.children;

ul.addEventListener('click',colorChage);

function colorChage(e){
  let target = e.target;
  if(target.tagName ==="A"){   // 만일 이벤트 target이 "a" tag를 클릭하면,
    target = target.parentElement; // 이벤트 target의 부모 엘리먼트로 하고
  }else if(target === e.currentTarget) { //만일 이벤트 target이 "ul" tag를 클릭하면,
    return; //그냥 return해줘라...
  }
  for(c of colors){
    c.classList.remove('bg-color')
  }  
  target.classList.add('bg-color')
}

