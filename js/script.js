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
 //two
$(".two").hide();
$("#col2").animate({opacity:1});
$("#img3").hover(function(){
   $(this).stop().animate({opacity:.4},200);
   $(".two").fadeIn();
},
function(){
   $(this).stop().animate({opacity:1},500);
   $(".two").fadeOut();
});
//third image
$(".three").hide();
$("#col3").animate({opacity:1});
$("#img4").hover(function(){
   $(this).stop().animate({opacity:.4},200);
   $(".three").fadeIn();
},
function(){
   $(this).stop().animate({opacity:1},500);
   $(".three").fadeOut();
});
//fouth image
$(".four").hide();
$("#col4").animate({opacity:1});
$("#img5").hover(function(){
   $(this).stop().animate({opacity:.4},200);
   $(".four").fadeIn();
},
function(){
   $(this).stop().animate({opacity:1},500);
   $(".four").fadeOut();
});
//fifth image
$(".five").hide();
$("#col5").animate({opacity:1});
$("#img6").hover(function(){
   $(this).stop().animate({opacity:.4},200);
   $(".five").fadeIn();
},
function(){
   $(this).stop().animate({opacity:1},500);
   $(".five").fadeOut();
});
//sixth image
$(".six").hide();
$("#col6").animate({opacity:1});
$("#img7").hover(function(){
   $(this).stop().animate({opacity:.4},200);
   $(".six").fadeIn();
},
function(){
   $(this).stop().animate({opacity:1},500);
   $(".six").fadeOut();
});
//seventh image
$(".seven").hide();
$("#col7").animate({opacity:1});
$("#img8").hover(function(){
   $(this).stop().animate({opacity:.4},200);
   $(".seven").fadeIn();
},
function(){
   $(this).stop().animate({opacity:1},500);
   $(".seven").fadeOut();
});
//eight image
$(".eight").hide();
$("#col8").animate({opacity:1});
$("#img9").hover(function(){
   $(this).stop().animate({opacity:.4},200);
   $(".eight").fadeIn();
},
function(){
   $(this).stop().animate({opacity:1},500);
   $(".eight").fadeOut();
});
$(".button").click(function(){
   var name=$("#name").val()
   alert (name +"Thank you for reaching out to us");
});

 });

 