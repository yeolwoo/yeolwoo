$(function(){
    /*슬라이드*/
    $('.slide').slick({
        dots:true,
        autoplay:true,
        autoplaySpeed:2000
    })
    /*열기*/
    $('.btnAllMenu a').on('click',function(){
        $('.allMenu').animate({left:0},300);
        $('.allMenuMask').css({width:'100%',height:'100%'});
    })
    /*닫기*/
    $('.allMenuClose a').on('click',function(){
        $('.allMenu').animate({left:'-100%'},300);
        $('.allMenuMask').css({width:'0',height:'0'});
    })
    /*메뉴안의 탭 구현*/
    $('.tab_allMenuTitle li').on('click',function(){
        var index=$(this).index();
        $('.tab_content').eq(index).fadeIn();
        $('.tab_content').eq(index).siblings().fadeOut();
        $(this).addClass('on')
        $(this).siblings().removeClass('on');
        
    })
    /*2탭스 구현*/
    $('.depthList>li>a').on('click',function(){
        $(this).children('span').toggleClass('open');
        var state=$(this).children('span').hasClass('open');
        if(state){
            $(this).next('ul').slideDown();
        }else{
            $(this).next('ul').slideUp();
        }
    })
})














