$(document).ready(function(){
    const getUrl = new URL(window.location.href).searchParams.get('agents') || 0, putActive = Array.from(document.querySelectorAll('.slide'));

    for(let i = 0; i < putActive.length; i++){
        if(i == getUrl){
            putActive[i].classList.add('active');
        }
    }

    $('.next').on('click', function(){
        var currImg = $('.active');
        var nextImg = currImg.next();
        var firstImg = $('.firstSlide');
        if(nextImg.length){
            currImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
        else{
            currImg.removeClass('active').css('z-index', -10);
            firstImg.addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on('click', function(){
        var currImg = $('.active');
        var prevImg = currImg.prev();
        var lastImg = $('.lastSlide');
        if(prevImg.length){
            currImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
        else{
            currImg.removeClass('active').css('z-index', -10);
            lastImg.addClass('active').css('z-index', 10);
        }
    });

    var delet = $('.yes');
    var overlay1 = $('.overlay1');
    var overlay2 = $('.overlay2');
    var overlay3 = $('.overlay3');
    var overlay4 = $('.overlay4');
    $('.card1').hover(function(){
        delet.addClass('yes').css('opacity', 0);
        delet.addClass('yes').css('transition', "0.5s");
        overlay1.addClass('overlay1').css('opacity', 1);
        // overlay1.addClass('overlay1').css('background-color', "rgba(110, 54, 128, 0.555)")
        
    }, function(){
        delet.addClass('yes').css('opacity', "100%");
        overlay1.addClass('overlay1').css('opacity', -1);
    });

    $('.card2').hover(function(){
        delet.addClass('yes').css('opacity', 0);
        delet.addClass('yes').css('transition', "0.5s");
        overlay2.addClass('overlay2').css('opacity', 1);
        
    }, function(){
        delet.addClass('yes').css('opacity', "100%");
        overlay2.addClass('overlay2').css('opacity', -1);
    });

    $('.card3').hover(function(){
        delet.addClass('yes').css('opacity', 0);
        delet.addClass('yes').css('transition', "0.5s");
        overlay3.addClass('overlay3').css('opacity', 1);
        
    }, function(){
        delet.addClass('yes').css('opacity', "100%");
        overlay3.addClass('overlay3').css('opacity', -1);
    });

    $('.card4').hover(function(){
        delet.addClass('yes').css('opacity', 0);
        delet.addClass('yes').css('transition', "0.5s");
        overlay4.addClass('overlay4').css('opacity', 1);
        
    }, function(){
        delet.addClass('yes').css('opacity', "100%");
        overlay4.addClass('overlay4').css('opacity', -1);
    });

});
