// addEventListener가 많으면 속도가 느려진다..
// 그래서 버튼의 부모요소인 클래스 container에 이벤트 처리를 위임한다.

// 버튼 안에 이미지와 문자가 있을때 버튼 클릭이벤트를 하면 실행하려고 하거나
// 이미지(img tag)와 문자(p tag)가 눌렸을때도 정확하게 버튼클릭으로 인식하게 하는 방법

const container = document.querySelector('.container');

// 방법 1)
function addClick(event){
  let elem = event.target;
  while(!elem.classList.contains('menu-btn')){
    elem = elem.parentNode;

    if(elem.nodeName === 'BODY'){
      elem = null;
      return;
    }
  }
  console.log(elem.dataset.value);
}
container.addEventListener('click',addClick)


// 방법2) ==> CSS에서 이미지(img Tag)와 문자(p Tag)에 pointer-events: none; 를 추가한다
// ==> 단점, 만일 img나 p Tag 밑에 다른 자식요소를 갖고 있으면 그것도 클릭되지 않는다.

/* function addClick(event){
  let elem = event.target;
  console.log(elem);
}

container.addEventListener('click',addClick); */