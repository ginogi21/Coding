const Btn = document.querySelector('.btn');
const trans = document.querySelector('[data-trans]');

Btn.addEventListener('click',transHandeler);


/* <CSS의 변수명 (--variableName)를 이용하여 setProperty기능 이용하는 방법>
setProperty('propetyname',value)의 사용법 : 
--> setProperty('propertyname(여기에 CSS변수명을 기재)',value(여기에는 적용하고 싶은 propery의 값을 기재 예를 들면, property가 backgroundColor이면, 색깔 red등))
 */

function transHandeler(){
  trans.style.setProperty('--variableName',100);
}