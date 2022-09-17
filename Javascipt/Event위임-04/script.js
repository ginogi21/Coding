const container = document.querySelector('#container');

container.addEventListener('click',(event)=>{
  console.log(event.target)
  if(event.target.className != 'remove-button') return;

  let pane = event.target.closest('.pane');
  /* 기준 Element 에서부터 closest() 메소드를 통해 자신부터 부모 요소 단위로 출발하여 각 요소가 지정한 선택자에 만족할 때까지 탐색한다(문서 루트까지 이동). 이 중 가장 가깝게 조건에 만족한 부모 요소가 반환되며, 조건에 만족한 요소가 없으면 null 값을 반환한다. */
    pane.remove();
})