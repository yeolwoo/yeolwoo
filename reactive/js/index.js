$(function(){
    /*gnb메뉴*/
    $('.maingnbbt>li').on('mouseenter',function(){
        $(this).children('.subgnb').stop().slideDown();
    })
    $('.maingnbbt>li').on('mouseleave',function(){
        $(this).children('.subgnb').stop().slideUp();
    })
    /*상단 이벤트베너*/
    $('.close').on('click',function(){
        $(this).toggleClass('on');
        var state=$(this).hasClass('on');
        if(state){
            $(this).children('a').text('open');
            $('.headerbannerimg').hide()
        }else{
            $(this).children('a').text('close')
            $('.headerbannerimg').show()
        }
    })
    $('.mdlist li').on('click',function(){
        var index=$(this).index();
        $('.listmenu').eq(index).fadeIn();
        $('.listmenu').eq(index).siblings('.listmenu').fadeOut();
        return false
        
    })
    
    /*768 메뉴버튼*/
    $('.submeun_header>a').on('click',function(){
        $('.submeun').slideUp();
        $('.submeun_bg').css({width:'0',height:'0'});
    })
    $('.meunbar').on('click',function(){
        $('.submeun').slideDown();
        $('.submeun_bg').css({width:'100%',height:'100%'});
    })
    /*768gnb메뉴*/
    $('.allmeun_sub>li').on('click',function(){
        $(this).children('.meunsub_gnb').slideToggle();
        $(this).siblings().children('.meunsub_gnb').slideUp();
    })
    
    if($.cookie('mypopup')=='notice'){
        $('#popup').hide();
    }
    
    $('#pop_chk').on('click',function(){
        $.cookie('mypopup','notice',{expires:1,path:'/'})
    })
    
    $('.closebtn').on('click',function(){
        $('#popup').fadeOut();
    })
    
})
















