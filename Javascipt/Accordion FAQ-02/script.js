const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');
const body = document.querySelector('.accordion-item-body')

accordionItemHeaders.forEach((accordionItemHeader)=>{
  accordionItemHeader.addEventListener('click',(event)=>{
    accordionItemHeader.classList.toggle('active');
    const accordionItemBody = accordionItemHeader.nextElementSibling;/* <== 이부분을 생각해야 함 */
   // const accordionItemBody = event.target.nextElementSibling;/* <== event.target을 이용해도 됨 */
    if(accordionItemHeader.classList.contains('active')){
      accordionItemBody.style.maxHeight = '1000px';
      }else{
      accordionItemBody.style.maxHeight = 0;
    }
  })
})
