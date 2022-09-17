let body = document.querySelector('body');
let colors = document.querySelectorAll('.color');
let boxColor = document.querySelector('.box');


colors.forEach((elem)=>{
  elem.addEventListener('click',(e)=>{
    // element의 CSS style속성을 가져오는 메소드;getComputedStyle(element)
    let getElement = getComputedStyle(e.target);
    console.log(getElement) // console.log를 확인해보면 e.target의 element style 모두를 가져옴

    // backgroundColor속성을 가져옴
    let bgClr = getElement.backgroundColor; // 가져온 e.target의 element style중에 backgroundColor속성을 가져옴
    
    // color속성을 가져옴
    let txtClr = getElement.color;// 가져온 e.target의 element style중에 color속성을 가져옴

    // CSS style 속성을 가져와서 다른 element의 style속성(backgroundColor)에 적용;
    body.style.backgroundColor = bgClr;
    boxColor.style.backgroundColor = txtClr;
  })
})