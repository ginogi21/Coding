const btns = document.querySelectorAll('.btn');


btns.forEach((btn)=>{
  btn.addEventListener('mousemove',(e)=>{
    const position = btn.getBoundingClientRect();/* <== getBoundingClientRect() 구문을 처음봄*/
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;

    btn.children[0].style.transform = `translate(${x*0.3}px, ${y*0.5}px)`;
  })
})

btns.forEach((btn)=>{
  btn.addEventListener('mouseout',(e)=>{
    btn.children[0].style.transform = `translate(0px, 0px)`;
  })
})