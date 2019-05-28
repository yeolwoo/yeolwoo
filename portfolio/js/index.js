$(function(){
    $('#wrapper').fullpage({
        normalScrollElements:'.modal',
        menu: '.gnb',
        anchors:["pg1","pg2","pg3","pg4"],
        sectionSelector: '.section',
		slideSelector: '.slide',
        afterLoad: function(origin, destination, direction){
            if(destination.index==1){
                $('.photoshop .bar').stop().animate({
                     width: '60%'
                }, 1000);
                $('.illust .bar').stop().animate({
                    width: '50%'
                }, 1000);
                $('.html .bar').stop().animate({
                    width: '70%'
                }, 1000);
                $('.jquery .bar').stop().animate({
                    width: '60%'
                }, 1000);
            }
        },
    })
    
    $('.hover').on('mouseenter',function(){
        $('.sub').stop().slideDown();
    })
    $('.hover').on('mouseleave',function(){
        $('.sub').stop().slideUp();
    }) 
    
    $('.click').on('click',function(){
        $('.modal h3').text('쉐보레 리뉴얼 사이트')
        $('.modal').fadeIn('fast');
		$('.m-content img').attr({
			src: 'img/main.png',
			alt: '반응형 웨딩사이트'
        })
    })
    
    $('.close .btn-close:eq(0)').click(function () {
		$('.modal').fadeOut();
		/*$('body').css('overflowY', 'hidden');*/
	})
    $('.close .btn-close:eq(1)').click(function () {
		$('.modal').animate({scrollTop:0});
        
		/*$('body').css('overflowY', 'hidden');*/
	})
    
    $('.title_name span').each(function(e){
        $(this).delay(e*250).animate({
            top:'0',
            opacity:1
        },400);
    });
    
})