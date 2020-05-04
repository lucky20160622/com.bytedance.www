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
$('.wh').click(function(){
    window.scrollTo({ 
        top: 30, 
        behavior: "smooth" 
    });
    console.log(1);
})
$('.yz').click(function(){
    window.scrollTo({ 
        top: 700, 
        behavior: "smooth" 
    });
})
$('.xx').click(function(){
    window.scrollTo({ 
        top: 2700, 
        behavior: "smooth" 
    });
})
$('.kcx').click(function(){
    window.scrollTo({ 
        top: 4000, 
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
// 背景滚动
$(window).scroll(function(){
    if($(window).scrollTop()>=50){
        $(".bg-ellipse-wrapper .bg-ellipse-1 ").stop(true).animate({ top: "120px" }, "slow");
    }
})

$(window).scroll(function(){
    if($(window).scrollTop()>=300){
        $(".bg-ellipse-wrapper .bg-ellipse-2 ").stop(true).animate({ top: "500px" }, "slow");
    }
})

$(window).scroll(function(){
    if($(window).scrollTop()>=800){
        $(".bg-ellipse-wrapper .bg-ellipse-3 ").stop(true).animate({ top: "1200px" }, "slow");
    }
})
$(window).scroll(function(){
    if($(window).scrollTop()>=1300){
        $(".bg-ellipse-wrapper .bg-ellipse-4 ").stop(true).animate({ top: "1650px" }, "slow");
    }
})
// $(window).scroll(function(){
//     if($(window).scrollTop()>=2400){
//         $(".bg-ellipse-wrapper .bg-ellipse-5 ").stop(true).animate({ top: "2600px" }, "slow");
//     }
// })
$(window).scroll(function(){
    if($(window).scrollTop()>=2900){
        $(".bg-ellipse-wrapper .bg-ellipse-6 ").stop(true).animate({ top: "3300px" }, "slow");
    }
})
$(window).scroll(function(){
    if($(window).scrollTop()>=3800){
        $(".bg-ellipse-wrapper .bg-ellipse-7 ").stop(true).animate({ top: "4200px" }, "slow");
    }
})