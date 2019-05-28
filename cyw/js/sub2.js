$(function(){
    $('.maincarimg_text>li').on('mouseenter',function(){
        $(this).children('.maincarimg_car').show();
        $(this).siblings().children('.maincarimg_car').hide();
    })
    
    
    $('.maincarimg_car>ul>li').on('click',function(){
        $('.estimate_box').show()
    })
    $('.colos').on('click',function(){
        $('.estimate_box').hide();
    })
 
})