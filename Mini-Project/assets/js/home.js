

$(function(){
    $(".right-side li .content").click(function(){
        $(this).next().toggleClass("content-menu-down");
        $(this).parent().siblings().find(".content-menu").removeClass("content-menu-down");
    })
});

$(".searching .selecting").click(function () {
    $(this).children().first().toggleClass("rotate");
    $(this).next().toggleClass("search-down");
    $(this).parent().siblings().find(".selecting-menu").removeClass("search-down");
  });