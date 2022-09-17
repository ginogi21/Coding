function color(z){
  let a = getComputedStyle(z);
  let b = a.backgroundColor;
  let body = document.getElementsByTagName('body')[0];
  body.style.backgroundColor = b;
}