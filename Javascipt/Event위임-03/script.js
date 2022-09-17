const input = document.querySelector('input');
let selected;

document.addEventListener('click',(event)=>{
  let target = event.target;
  if(target.tagName != 'INPUT') return;
  highlight(target);
});

function highlight(input){
  if(selected){
    selected.classList.remove('highlight');
  }

  selected = input;
  selected.classList.add('highlight');
}