/**
   * 
   * @param {Obejct} element 要获取哪个元素的属性
   * @param {String} attr  要获取元素的哪个属性
   */
function getStyle(element, attr) {
  // 判断一下浏览器是否支持window.getComputedStyle
  // if (window.getComputedStyle) {
  //   // 属性值 = window.getComputedStyle(元素div, null).属性名
  //   // 200                                            width
  //   // 300                                             left
  //   return window.getComputedStyle(element, null)[attr];
  // } else {
  //   // 元素.currentStyle.属性名
  //   return element.currentStyle[attr];
  // }

  return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}

/**
 * 
 * @param {*} element 
 * @param {*} targetObj 
 * @param {*} callback 
 */
function animate(element, targetObj, callback) {
  // 3.2.1 清除定时器
  clearInterval(element.timer);


  // 3.2.2 开启定时器
  element.timer = setInterval(function () {
    //  状态变量  看看是不是所有的属性 都达到目标位置了 假设都达到了
    var flag = true;
    for (let attr in targetObj) {
      // 属性是不是zIndex 如果是 就处理
      if (attr == 'zIndex') {
        // 如果属性名是zIndex 就直接把zIndex的值赋值给元素
        // console.log(attr + ':' + targetObj[attr]);
        element.style[attr] = targetObj[attr];
      } else if (attr == 'opacity') {
        // 获取当前值 0.85 0.25
        // 0.852 变成整数
        var current = parseInt(getStyle(element, attr) * 100)
        // 获取目标值
        var target = targetObj[attr] * 100;
        // console.log(current, target)
        // 获取步进值
        let step = (target - current) / 10;
        // 取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 累加
        current += step;
        // 赋值
        element.style[attr] = current / 100;
      } else {
        // 如果不是继续处理
        // 获取当前值 200px 400px
        var current = parseInt(getStyle(element, attr));
        // 获取目标值
        var target = targetObj[attr];
        // console.log(current, target);
        //算步进
        let step = (target - current) / 10;
        // 取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 累加
        current += step;
        // 赋值
        element.style[attr] = current + 'px';
      }

      // 停止定时器
      // console.log(current, target);
      if (current !== target) {
        flag = false;
      }
    }
    // console.log(11111111);
    // console.log(flag);
    if (flag == true) {
      // 清除定时器
      clearInterval(element.timer);
      // 往下移动就已经结束了 往右移动了
      // console.log(1111);
      callback ? callback() : null;
      // console.log(2222);
    }
  }, 20)

}

