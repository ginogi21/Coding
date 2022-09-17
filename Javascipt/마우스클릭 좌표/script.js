const div = document.getElementById('my_div');
const clearbtn = document.getElementById('clearbtn');
const result = document.getElementById('result');

div.addEventListener('click', (e) => {
  result.innerHTML = `<div>screen X, Y : (${e.screenX}, ${e.screenY})</div>`;
  result.innerHTML += `<div>client X, Y : (${e.clientX}, ${e.clientY})</div>`;
  result.innerHTML += `<div>page X, Y : (${e.pageX}, ${e.pageY})</div>`;
  result.innerHTML += `<div>offset X, Y : (${e.offsetX}, ${e.offsetY})</div>`;
});

clearbtn.addEventListener('click', (e) => {
  result.innerHTML= '';
});