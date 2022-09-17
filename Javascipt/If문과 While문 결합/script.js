const btn = document.querySelector('.btn');
const inputTxt = document.querySelector('.inputTxt');

btn.addEventListener('click',()=>{
 let userName = prompt('이름을 입력하세요!');
  if( userName === "ginogi"){
   alert(`환영합니다. ${userName}님`)
   inputTxt.innerHTML = `${userName}님이 입장하셨습니다.`;
  }else{
   while(userName !== "ginogi"){
    alert(`죄송합니다. ${userName}님을 찾을 수 없습니다. 이름을 다시 입력해주세요..`);
    userName = prompt('이름을 입력하세요!');
   }
   inputTxt.innerHTML = `${userName}님이 입장하셨습니다.`;
   }
})
