let btt = document.querySelector('#back-to-top'),
    docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;

    // docHeight = docElem.scrollHeight;
    // docHeight = docElem.offsetHeight;
    docHeight = Math.max(docElem.scrollHeight,docElem.offsetHeight);
    // scrollPos = docElem.scrollTop;

    if(docHeight != 'undefined'){
      offset = docHeight / 4.5;
    }

    window.addEventListener('scroll',function(){
      scrollPos = docElem.scrollTop;
      btt.className = (scrollPos > offset) ? 'visible':'';
      // 아래 if문의 위와 같이 축소
      // if(scrollPos > offset){
      //   btt.className = 'visible'
      // }
      // else{
      //   btt.className = '';
      // }
    });

    btt.addEventListener('click',function(e){
      e.preventDefault();//본연의 기능을 막는다.
      scrollToTop();
    });

    function scrollToTop(){
      let scrollInterval = setInterval(function(){
        if(scrollPos != 0){
          window.scrollBy(0,-30);
        }else{
          clearInterval(scrollInterval)
        }
      },15);
    }