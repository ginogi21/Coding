const demo = document.getElementById('demo');
const inputText = document.getElementById('fruit');
const myBtn = document.getElementById('btn');

myBtn.addEventListener('click',myFunc)

// <배열에 특정값이 포함되어 있는지 여부>

// 방법1) some()함수 이용
function myFunc(){
  let fruits = ['apple', 'lemon', 'cherry', 'mango','apple'];
  if(fruits.some(x=> x === inputText.value)){
    demo.innerHTML = inputText.value;
    demo.style.color = 'black'
    
  } else{
    demo.innerHTML = "목록에 있는 과일만 선택하세요!";
    demo.style.color = 'red'
  }
  inputText.value = "";
}

// 방법2) find()함수 이용
/* function myFunc(){
  let fruits = ['apple', 'lemon', 'cherry', 'mango','apple'];
  if(fruits.find(i => i === inputText.value)){
    demo.innerHTML = inputText.value;
    demo.style.color = 'black'
    
  } else{
    demo.innerHTML = "목록에 있는 과일만 선택하세요!";
    demo.style.color = 'red'
  }
  inputText.value = "";
} */

// 방법3) includes()함수 이용
/* function myFunc(){
  let fruits = ['apple', 'lemon', 'cherry', 'mango','apple'];
  if(fruits.includes(inputText.value)){
    demo.innerHTML = inputText.value;
    demo.style.color = 'black'

  } else{
    demo.innerHTML = "목록에 있는 과일만 선택하세요!";
    demo.style.color = 'red'
  }
  inputText.value = "";
}
 */
