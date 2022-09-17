document.addEventListener('DOMContentLoaded',()=>{
  new TypeIt("#title", {
    speed: 50,
    startDelay: 1500,
    loop:true,
  })
    .pause(1000)
    .delete(7,{delay:1000})
    .type('Academy')
    .go();
})