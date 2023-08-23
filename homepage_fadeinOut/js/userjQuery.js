$(function() {
    // navi의 submenu 각각 내려오게
    $('.navi>li').mouseover(function() {
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    // 이미지 슬라이드
    $('.imgslide a:gt(0)').hide();
    setInterval(function() {
        $('.imgslide a:first-child').fadeOut(1000)
                                    .next().fadeIn(1000)
                                    .end().appendTo('.imgslide');
    }, 3000);

    // 공지사항과 갤러리 탭
    $('.tabmenu>li>a').click(function() {
        $(this).parent().addClass("active").siblings().removeClass("active");
        return false;
    });

    //공지사항의 팝업창
    $('.notice li:first').click(function() {
        $('#modal').addClass('active');
    });
    $('.closeBtn').click(function() {
        $('#modal').removeClass("active")
    });
});