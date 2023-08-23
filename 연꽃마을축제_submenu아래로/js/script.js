$(function() {
    $('.navi>li').mouseover(function() {
        $(this).find('.submenu').stop().slideDown(800);
    }).mouseout(function() {
        $(this).find('.submenu').stop().slideUp(800);
    });
    $('.imgslide a:gt(0)').hide();
    setInterval(function() {
        $('.imgslide a:first-child').fadeOut(1000)
                            .next().fadeIn(1000)
                            .end().appendTo('.imgslide');
    }, 3000);
    $('.notice li:first').click(function() {
        $('#modal').addClass('active');
    });
    $('.closeBtn').click(function() {
        $('#modal').removeClass("active")
    });
})