const colorSwitch = document.querySelector('#input-color-switch');


colorSwitch.addEventListener('click',checkMode);

function checkMode(){
  console.log('ccccc');
  if(colorSwitch.checked){
    darkModeOn();
  }else{
    darkModeOff();
  }
}

function darkModeOn(){
  document.body.classList.add('dark-mode');
}

function darkModeOff(){
  document.body.classList.remove('dark-mode');
}