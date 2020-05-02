$('.gz-item img').mouseenter(function(){
    $(this).addClass('imgab').siblings().removeClass('imgab')
    $(this).addClass('op').siblings().removeClass('op')
})
$('.gz-item img').mouseleave(function(){
  $(this).removeClass('imgab')
  $(this).removeClass('op')
})

// 点击左侧导航添加类名
$('.tabs-list h5').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active')
   let index=$(this).index()
   console.log($('.tabs-rightab').eq(index));
   $('.tabs-rightab>div').eq(index).show().siblings().hide()
})
