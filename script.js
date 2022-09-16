// typing effect
var typed = new Typed(".auto",{
    strings:["Web Developer","Web Designer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true

});

/* scroll */
$(".internal a").click(function(e){
    e.preventDefault();
    $(".internal a").removeClass("active");
    $(this).addClass("active");
    var href=$(this).attr("href");
    var pos=$(href).offset().top;

    $("html,body").animate({
      scrollTop:pos-0
    })

   });
 
   let vh=$(window).height();
   $(window).scroll(function(){
   var top=$(this).scrollTop();
   var left=$(this).scrollLeft();
   
   if( top>=$("#Home").offset().top-0 ){
       $(".internal a").removeClass("active");
       $("li:eq(0) a").addClass("active");
   }
   else if( top>=$("#About").offset().top-0 ){
       $(".internal a").removeClass("active");
       $("li:eq(1) a").addClass("active");
   }
   else if( top>=$("#Project").offset().top-0 ){
       $(".internal a").removeClass("active");
       $("li:eq(2) a").addClass("active");
   }
   else if( top>=$("#Contact").offset().top-0 ){
    $(".internal a").removeClass("active");
    $("li:eq(3) a").addClass("active");
}
   else{
     $(".internal a").removeClass("active");
   }

});

// About tab change

$(".tabs ul li a").click(function (e) {
  e.preventDefault();
  $(".tabs ul li a").removeClass("active");
  $(this).addClass("active");
  var index=$(this).parent().index();           // 0 - 3
  $(`.content`).fadeOut(0);
  $('.content:eq('+index+')').fadeIn();

});

// button toggle
$(document).ready(function(){
  $(".btn-show").click(function(){
    $(".wrap-3 .row:nth-last-child(2)").slideToggle(1500);
    $(".wrap-3 .row:nth-last-child(2)").css('display','flex');
    if($(this).val() == "Hide")
    $(this).val("Show More");
    else
    $(this).val("Hide");
  });
});