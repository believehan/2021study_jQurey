$(function() {
    $('.tabmenu li a').click(function() {
        $(this).parent().addClass("notice").siblings().removeClass("notice");
        return false;
    });
    
    $('.navi>li').mouseover(function() {
        $(this).find('.submenu').stop().slideDown(800);
    }).mouseout(function() {
        $(this).find('.submenu').stop().slideUp(800);
    });

    var imgs = 2;
    var now = 0;
    $('.imgslide>a').eq(0).siblings().css({"margin-left": '-2400px'});
    setInterval(function() {
        now = now == imgs? 0 : now += 1;
        $('.imgslide>a').eq(now-1).css({"margin-left": '-2400px'});
        $('.imgslide>a').eq(now).css({"margin-left": '0px'},3000);
    }, 5000)
});