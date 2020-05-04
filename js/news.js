// 顶部导航
var windowTop=0
$(window).scroll(function(){
    let scrollS=$(this).scrollTop()
    if(scrollS>=windowTop){
        $('.header').slideUp();
        windowTop=scrollS
    }else{
        $('.header').slideDown()
        windowTop=scrollS
    }
})
// 回到顶部 对应相应的位置
$('.qywh11').click(function(){
    window.scrollTo({ 
        top: 900, 
        behavior: "smooth" 
    });
})
$('.ddsj11').click(function(){
    window.scrollTo({ 
        top: 1800, 
        behavior: "smooth" 
    });
})
$('.aaii').click(function(){
    window.scrollTo({ 
        top: 2450, 
        behavior: "smooth" 
    });
})
// 显示隐藏
$('.bblock').mouseenter(function(){
    $('.footer-bottom-top').css({
        'display':'block'
    })
})
$('.footer-bottom-top').mouseleave(function(){
    $('.footer-bottom-top').css({
        'display':'none'
    })
})

$(window).scroll(function(){
    if($(window).scrollTop()>=50){
        $(".bg-ellipse-wrapper .bg-ellipse-1 ").stop(true).animate({ top: "130px" }, "slow");
    }
})
$(window).scroll(function(){
    if($(window).scrollTop()>=250){
        $(".bg-ellipse-wrapper .bg-ellipse-2 ").stop(true).animate({ top: "630px" }, "slow");
    }
})
$(window).scroll(function(){
    if($(window).scrollTop()>=650){
        $(".bg-ellipse-wrapper .bg-ellipse-3 ").stop(true).animate({ top: "1230px" }, "slow");
    }
})
$(window).scroll(function(){
    if($(window).scrollTop()>=1250){
        $(".bg-ellipse-wrapper .bg-ellipse-4 ").stop(true).animate({ top: "1700px" }, "slow");
    }
})
$(window).scroll(function(){
    if($(window).scrollTop()>=1750){
        $(".bg-ellipse-wrapper .bg-ellipse-5 ").stop(true).animate({ top: "2400px" }, "slow");
    }
})