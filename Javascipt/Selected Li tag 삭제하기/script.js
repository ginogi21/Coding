let items = document.querySelectorAll('#list li');
let inputText = document.getElementById('txt');
let delBtn = document.querySelector('#btn');
let list = document.querySelector('#list');

let tab = [], liIndex;

//변수 tab에 li tag 할당하기
for( let i = 0; i < items.length; i++){
  tab.push(items[i].innerHTML)
}

// li 태그 선택하기
for( i of items){
  i.addEventListener('click',function(e){

    this.classList.add('color') // 선택된 태그의 글자색 변경

    liIndex = tab.indexOf(this.innerHTML);
    //console.log(this.innerHTML + " INDEX = " + liIndex)
  });

}

//선택된li delet버튼으로 삭제하기
delBtn.addEventListener('click',function(){
  if(liIndex != null){
    items[liIndex].parentNode.removeChild(items[liIndex])
  }else{
    alert('먼저 아래 Language중 하나를 선택하세요!');
    return;
  } 
})
