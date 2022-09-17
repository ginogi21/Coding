// 박스만들기
let btnBox = document.querySelector('#btnBox');
let boxAdd = document.querySelector('.boxAdd');

btnBox.addEventListener('click',boxCreate);
function boxCreate(){
  let newDiv = document.createElement('div');
  boxAdd.appendChild(newDiv).classList.add('box-shadow');
}

//박스없애기
let deleteBox = document.querySelector('#deleteBox');

deleteBox.addEventListener('click',()=>{
  console.log(boxAdd.childElementCount)
  if(boxAdd.childElementCount != 0){
    boxAdd.removeChild(boxAdd.lastChild);
  } else {
    return alert('없앨 박스가 더이상 없습니다.');
  }
})


// 색상변경하기
let btnColor = document.querySelector('#btnColor');
let colorBox = document.querySelector('.colorBox');

let colors = ['#f48fb1','#90caf9','#81c784','#fff176','#ff8a65','#607d8b'];

btnColor.addEventListener('click',function(){
  let changeColor = parseInt(Math.random()*colors.length)
  colorBox.style.backgroundColor = colors[changeColor];
})