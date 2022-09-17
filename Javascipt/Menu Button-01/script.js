// 방법1
/* let currentMenu ; // 현재 활성화된 메뉴를 담을 변수
let menuLinks = document.querySelectorAll('.menu-link');

function clickMenuHandler(){
  if(currentMenu){
    currentMenu.classList.remove('menu-active');
  }
  this.classList.add('menu-active');
  currentMenu = this;
}

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', clickMenuHandler);
}
 */

//방법2(이벤트 위임하는 방법--> 방법1의 하단 for문을 상위 부모에 이벤트 위임)
// current target과 target의 차이를 알아야 함
/* let currentMenu;
let menu = document.querySelector('.menu');

function clickHandler(e){
  if(currentMenu){
    currentMenu.classList.remove('menu-active');
  }
  e.target.classList.add('menu-active');
  currentMenu = e.target;
}

menu.addEventListener('click', clickHandler); */
// 방법2가 더 효율적임


// 방법2를 기능별로 쪼개는 게 좋음
let currentMenu;
let menu = document.querySelector('.menu');

function activate(elem) {
  elem.classList.add('menu-active');
  currentMenu = elem;
}

function inactivate(elem) {
  elem.classList.remove('menu-active');
}

function clickHandler(e){
  if(currentMenu){
    inactivate(currentMenu);
  }
  activate(e.target);
}

menu.addEventListener('click', clickHandler);