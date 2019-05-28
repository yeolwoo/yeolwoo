$(function(){
    $('.maincarimg_text>li').on('mouseenter',function(){
        $(this).children('.maincarimg_car').show();
        $(this).siblings().children('.maincarimg_car').hide();
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