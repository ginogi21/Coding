/* document.open();
let i = 0;
while(i < 10){
  document.write("<p>Javascript를 열심히 배우자!"+i+"</p>");
  i = i + 1;
}
document.close(); */
// 위와 아래가 같은 결과를 나타냄...for문이 훨씬 간편하고 직관적임.

document.open();
for(let i = 0; i < 5; i++){
  for(let j =0; j < 5; j++){
    document.write("<p>Javascript를 열심히 배우자! "+i+j+" </p>"); // html에 내용추가
  }
}
document.close();
