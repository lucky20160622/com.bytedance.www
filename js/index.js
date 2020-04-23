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
// 轮播图
window.onload = function(){
    
    var lb_box = this.document.getElementsByClassName("lb_imgleft")[0];
 
    //初始化默认宽度
    var lb_boxwidth = this.document.body.clientWidth;
 
    var lb_imglist = this.document.getElementsByClassName("lb_li").length;
 
    var lbtn = this.document.getElementsByClassName("lb_btnl")[0];
 
    var rbtn = this.document.getElementsByClassName("lb_btnr")[0];
 
    var lb_pointlist = this.document.getElementsByClassName("lb_olli");
 
    var num = 0;
    var newwidth = 0;
    //监听屏幕宽度响应轮播图宽度li大小缩放产生的偏移量
    window.onresize = function(){
        var leftsize =  document.body.clientWidth;     
        if(leftsize!=lb_boxwidth && num >0){
            lb_box.style.transition ="none";
            lb_box.style.left = -leftsize +"px";
        }
    }
    //点击事件
    rbtn.onclick = function(){
        num ++;
        //获取自适应屏幕改变后宽度
        newwidth = document.body.clientWidth;
        if(num>lb_imglist-1){
            num = 2;
        }
        left(newwidth);
        //到最后一张的时候，快速切换到第一张，需要加延时等到倒数第二张切换到最后
        //一张的动作结束才执行，否则立即执行会有左滑效果，延时时间等于动画时间    
        if(num == lb_imglist-1){
            setTimeout(function del(){
                //清除切换样式，无感知最后一张到第一张
                lb_box.style.transition ="none";
                lb_box.style.left = -newwidth +"px";
                },300);
        }
    }
 
    lbtn.onclick = function(){
        num--;
        newwidth = document.body.clientWidth;;
        if(num<0){
            num = lb_imglist-1;
        }
        left(newwidth);  
        if(num == 1){
            setTimeout(function del(){
                lb_box.style.transition ="none";
                lb_box.style.left = -newwidth*(lb_imglist-1) +"px";
                num = lb_imglist-1;
                },300);
        }
    }
 
    //下标被点击：获取点击位置，切换到点击页面
    for(var i=0;i<lb_pointlist.length;i++){
        //设定下标索引
        lb_pointlist[i].setAttribute("p_index",i);
        lb_pointlist[i].onclick =function(){
            num = this.getAttribute("p_index");
            newwidth = document.body.clientWidth;;
            left(newwidth);
        }
    }
 
    //自动轮播，模拟点击
    var timer = setInterval(function(){
        rbtn.onclick();
    }, 5000);
    //鼠标移入暂停，移入鼠标清除自动定时器
    var lb_box_f = document.getElementsByClassName("lb_box")[0];
    lb_box_f.onmouseenter = function(){
        clearInterval(timer);
    }
    //移除鼠标继续定时器
    lb_box_f.onmouseleave = function(){
        timer = setInterval(function(){
            rbtn.onclick();
        }, 5000);
    }
 
    function left(newwidth){
        lb_box.style.transition ="left 0.5s linear";
        //如果屏幕宽度改变，偏移量按照改变后的宽度设定
        if(0<newwidth && newwidth!=lb_boxwidth){
            lb_box.style.left = -newwidth*num +"px"; 
        }
        else
        {
            lb_box.style.left = -lb_boxwidth*num +"px";
        }
        
        //小圆点
        for(var i=0;i<lb_pointlist.length;i++){
            lb_pointlist[i].style.backgroundColor = "transparent";
            if(num<4){
                lb_pointlist[num].style.backgroundColor = "snow";
            }
            else{
 
                lb_pointlist[num-4].style.backgroundColor = "snow";
            }
        }
    }
}
// 企业文化轮播图
let qywhbox = document.querySelector('.qywh-box')
let prev = document.querySelector('.prev');
let next = document.querySelector('.next1');
let sliderWidth = qywhbox.offsetWidth;// 获取窗口的宽度
let num = 0;// 声明计算器
let circle = 0;
let flag = true;
let ul = document.querySelector('ul');
let ol = document.querySelector('ol');
let fisrtLi = document.querySelector('ul li:first-child');
// console.log(fisrtLi);
ul.appendChild(fisrtLi.cloneNode(true))
ul.style.width = ul.children.length * sliderWidth + 'px';
next.addEventListener('click', function () {
    // 判断动画状态是否是true
    if (flag) {
        flag = false;
        // 3.判断图片是否走到了最后一个 num
        // 3.1 如果是 num 的值和图片的个数一样 那么就让num为0
        // console.log(num, ul.children.length - 1)
        // 索引是不是最后一个
        if (num == ul.children.length - 1) {
            // 那么就让num为0
            ul.style.left = 0;
            num = 0;
        }
        // 4.让num++
        num++;
        // 5.让ul移动
        animate(ul, {
            left: -num * sliderWidth
        }, function () {
            flag = true;
        })
    }
})
prev.addEventListener('click', function () {
    if (flag) {
        flag = false;
        // 3.2.判断一下 num是不是0
        if (num == 0) {
            // 3.3.如果是0, 让num为ul数组的最大索引
            num = ul.children.length - 1;
            // 3.4.同时让ul的left变成 - num * 窗口宽度
            ul.style.left = -num * sliderWidth + 'px';
        }
        // 3.5.让num递减
        num--;
        // 3.6.移动ul
        animate(ul, {
            left: -num * sliderWidth
        }, function () {
            flag = true;
        })
    }
})
// 大事记
$('.hx a ').click(function(){
    let index=$(this).index()
   
    $('.ul1').animate({
        'left':-index*640
    })
})
$('.hx a img').click(function(){
    let index=$(this).index()
    $(this).classList.add('.hx1 img').siblings('.hx img')
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