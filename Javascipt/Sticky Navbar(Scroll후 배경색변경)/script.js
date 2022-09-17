const navbarEl = document.querySelector('.navbar');

const bottomContainerEl = document.querySelector('.bottom-container')
window.addEventListener('scroll',()=>{
  const scrollPos = window.scrollY;

  // 화면의 크기에 따라 navbar배경색이 바뀌려면 아래와 같이 보정해주어야 함
  const btmPos = bottomContainerEl.offsetTop;
  
  // CSS에서 text의 마진만큼 보정
  const navPos = navbarEl.offsetHeight + 50;


  if(scrollPos > (btmPos - navPos)){
    navbarEl.classList.add('active')
  }else{
    navbarEl.classList.remove('active')
  }
})