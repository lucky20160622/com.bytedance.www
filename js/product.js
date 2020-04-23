// 顶部导航
// var windowTop=0
// $(window).scroll(function(){
//     let scrollS=$(this).scrollTop()
//     if(scrollS>=windowTop){
//         $('.header').slideUp();
//         windowTop=scrollS
//     }else{
//         $('.header').slideDown()
//         windowTop=scrollS
//     }
// })
// 点击滚动
$('.iitem ').click(function(){
    let index=$(this).index()
    console.log(index);
    $('.main1').animate({
        'top':-index*840
    })
    $('.cbl img').css({
        'box-shadow':' 0 0.09rem 0.18rem 0 rgba(0,0,0,0.5)'
    })
})
$('.cbl img').click(function(){
    $(this).addClass('active').parent().parent().siblings().children().children().removeClass('active')
})

