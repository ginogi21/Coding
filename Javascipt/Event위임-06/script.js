const list = document.getElementById('list');
const colors = list.children;

list.addEventListener('click',clickHandler);

function clickHandler(event){
  let target = event.target;

  // a tag가 클릭됐을 때  방지
  if(target.tagName === "A"){
    target = target.parentElement;

   // ul tag가 클릭됐을 때 방지 
  } else if(target === event.currentTarget){
    return;
  }
  
  for (c of colors){
    c.classList.remove('on')
  }
  target.classList.add('on')
}