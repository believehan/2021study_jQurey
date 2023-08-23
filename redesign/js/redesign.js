$(function() {
    setInterval(function(){ $('.imgslide>ul').delay(2500); 
    $('.imgslide>ul').animate({marginLeft: "-1333px"}) 
    $('.imgslide>ul').delay(2500); 
    $('.imgslide>ul').animate({marginLeft: "-2666px"}) 
    $('.imgslide>ul').delay(2500); 
    $('.imgslide>ul').animate({marginLeft: "-3999px"}) 
    $('.imgslide>ul').delay(2500); 
    $('.imgslide>ul').animate({marginLeft: "-5332px"}) 
    $('.imgslide>ul').delay(2500); 
    $('.imgslide>ul').animate({marginLeft: "0px"}) });

    // navi의 submenu 각각 내려오게
    $('.navi>li').mouseover(function() {
        $(this).find('.submenu').stop().slideDown(100);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(100);
    });
});