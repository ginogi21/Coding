const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const images = document.querySelectorAll('.img-container img');
const imageContainer = document.querySelector('.img-container');


let imageIndex = 1;

nextBtn.addEventListener('click',()=>{
 imageIndex ++;
 updateImg()
})

prevBtn.addEventListener('click',()=>{
 imageIndex --;
 updateImg()
})


function updateImg(){
 if(imageIndex > images.length){
  imageIndex = 1;
 }else if(imageIndex < 1){
  imageIndex = images.length;
 }
 imageContainer.style.transform = `translateX(-${(imageIndex-1)*1000}px)`;
}
