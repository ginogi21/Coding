window.addEventListener('scroll', function (e) {

    const target = document.querySelectorAll('.scroll');

    for (index = 0; index < target.length; index++) {
        var pos = window.pageYOffset * target[index].dataset.rate;
        if (target[index].dataset.direction === 'vertical') {
            target[index].style.transform = `translate3d(0px,${pos}px, 0px)`;
        } else {
            var posX = window.pageYOffset * target[index].dataset.rateX;
            console.log(posX);
            var posY = window.pageYOffset * target[index].dataset.rateY;
            console.log(posY);

            target[index].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
        }
    }
});