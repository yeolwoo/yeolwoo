$(function(){
    $('.mainbanner_slider ul').slick({
        dots:true,
        autoplay:true,
        autoplaySpeed:2000
    })
    
    $('.bxslider').bxSlider({
        controls:false,
        auto:true,
        pause:2000,
        autoHover:true,
        minSlides:2,
        maxSlides:20,
        moveSlides:1,
        slideWidth:148,
        slideMargin:30,
        pager:false
        
        
       
    })
})