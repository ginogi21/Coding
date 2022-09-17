let target = document.querySelector('#dynamic');

function randomString(){
  let stringArr = ['Learn to HTML','Learn to CSS','Learn to Python','Learn to Java',
  'Learn to Javascript','Learn to Python','Learn to Ruby','Learn to Python','Learn to C++'];
  let selectString = stringArr[Math.floor(Math.random()*stringArr.length)]
  let selectStringArr = selectString.split("")
  return selectStringArr;
}

function resetTyping(){
  target.textContent = "";
  dynamic(randomString());
}

//한글자씩 텍스트 출력함수
function dynamic(randomArr){
  if(randomArr.length > 0){
    target.textContent += randomArr.shift();
    setTimeout(function(){
      dynamic(randomArr);
    },80);
  }else{
    setTimeout(resetTyping, 3000)
  }
}
dynamic(randomString());

// 커서 깜박임 코드
function blink(){
  target.classList.toggle('active');
}
setInterval(blink,500)

