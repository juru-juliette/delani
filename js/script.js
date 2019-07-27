$(document).ready(function(){
    $("img#icon1").click(function(){
        $("#P1").toggle();
 });
 $("img#icon2").click(function(){
    $("#P2").toggle();
 });

 $("img#icon3").click(function(){
    $("#P3").toggle();
 });
 $(".one").hide();
 $("#col1").animate({opacity:1});
 $("#img2").hover(function(){
    $(this).stop().animate({opacity:.4},200);
    $(".one").fadeIn();
 },
 function(){
    $(this).stop().animate({opacity:1},500);
    $(".one").fadeOut();
 });
 });
 