$(function(){
    $('.maingnb .carsub').on('mouseenter',function(){
        $('.subgnb>li').stop().slideDown();

    })
    $('.maingnb .carsub').on('mouseleave',function(){
        $('.subgnb>li').stop().slideUp();
     
    })
    
    $('.subgnbcar>li').on('mouseenter',function(){
        $(this).children('.subcar').show();
        $(this).siblings().children('.subcar').hide();
    })
    
    
    
    $('.maingnb>li').on('mouseenter',function(){
        $(this).children('.subgnb2').stop().slideDown();
        $('.gnbbg').stop().slideDown();
    })
    $('.maingnb>li').on('mouseleave',function(){
        $(this).children('.subgnb2').stop().slideUp();
        $('.gnbbg').stop().slideUp();
    })
    
    $('.maingnb').on('mouseenter',function(){
         $('.allgnbbg').stop().slideDown();
    })
    $('.maingnb').on('mouseleave',function(){
         $('.allgnbbg').stop().slideUp();
    })
})






