const addImg = document.querySelector('div');
const addBtn = document.querySelector('.btn');

addBtn.addEventListener('click',()=>{
 let imgNum = 4;
 for (let i = 0; i< imgNum; i++) {
  const newImg = document.createElement('img');
  newImg.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*1000)}`;
  addImg.appendChild(newImg);   
 }
})