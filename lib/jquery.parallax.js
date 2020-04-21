/*
Parallax Plugin V 1.0
Author: Nino Zumstein
Date  : 12.09.2016
*/
/*DO NOT USE THIS VERSION OF THE PARALLAX.JS, THIS IS FOR DEMO PURPOSE ONLY*/
(function($){$.fn.parallax=function(options){var parallax_element=this;var settings={speed:'100',ascending:true,delay:'1000'};if(options){$.extend(settings,options);}var ad="+";if(!settings['ascending']==true){var ad="-";}$(window).scroll(function(){var wScroll=$(this).scrollTop();parallax_element.css({"transform":"translate(0px, "+ad+wScroll/settings['speed']+"%)","transition-duration":settings['delay']+"ms"});});}}(jQuery));$(document).ready(function(){$(".parallax").parallax({speed:180,ascending:true,delay:800});$(".parallax-0").parallax({speed:60});$(".parallax-1").parallax({speed:200});$(".parallax-2").parallax({speed:90,ascending:true,delay:300});$(".parallax-3").parallax({speed:90,ascending:true,delay:2000});$(".parallax-4").parallax({speed:90,ascending:true,delay:1000});$(".parallax-5").parallax({speed:90,ascending:false,delay:1000});});