// 顶部导航

$(function(){  
    var winHeight = $(document).scrollTop();
    $(window).scroll(function() {
    var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
    if (scrollY > 1){ //如果滚动距离大于1px则隐藏，
    $('.header').addClass('hiddened');
    // 否则删除隐藏类
}else {
    $('.header').removeClass('hiddened');
}  
if (scrollY > winHeight){ //如果没滚动到顶部，删除显示类，否则添加显示类
    $('.header').removeClass('showed');
} 
else {
    $('.header').addClass('showed');
}        
});
});