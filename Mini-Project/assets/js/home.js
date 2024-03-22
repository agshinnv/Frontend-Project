

$(function(){
    $(".right-side li .content").click(function(){
        $(this).next().toggleClass("content-menu-down");
        $(this).parent().siblings().find(".content-menu").removeClass("content-menu-down");
    })
})