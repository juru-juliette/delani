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
 $(function(){
    $("#img2").on({
     mouseenter: function(){
      $(this).attr('src','images/work4.jpg');
    },
    mouseleave: function(){
      $(this).attr('src','images/work4.jpg');
    }
    });
    
  });
});
