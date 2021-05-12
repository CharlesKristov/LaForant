$(document).ready(function(){
    $('.next').on('click', function(){
        var currImg = $('.active');
        var nextImg = currImg.next();

        if(nextImg.length){
            currImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on('click', function(){
        var currImg = $('.active');
        var prevImg = currImg.prev();

        if(prevImg.length){
            currImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });
});