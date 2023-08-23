$(function() {
    // navi의 submenu 각각 내려오게
    $('.navi>li').mouseover(function() {
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    // 이미지 슬라이드
    var imgs = 2;
    var now = 0;
    $('.imgslide>a').eq(0).siblings().animate({"width": '-1200px'});
    setInterval(function() {
        now = now == imgs? 0 : now += 1;
        $('.imgslide>a').eq(now-1).animate({"width": '-1200px'});
        $('.imgslide>a').eq(now).animate({"width": '1200px'},500);
    }, 3000)

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