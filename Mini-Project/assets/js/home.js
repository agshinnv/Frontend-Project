

$(function(){
    $(".right-side li .content").click(function(){
        $(this).next().toggleClass("content-menu-down");
        $(this).parent().siblings().find(".content-menu").removeClass("content-menu-down");
    });

    $(".searching .selecting").click(function () {
        $(this).children().first().toggleClass("rotate");
        $(this).next().toggleClass("search-down");
        $(this).parent().siblings().find(".selecting-menu").removeClass("search-down");
    });
    
    $(".all-categories").click(function(){
        $(".categories").toggleClass("d-none")
    });


    // $(".products-icon").hover(function(e){
    //     e.preventDefault(e);
    //     $(".additional-navbar").toggleClass("d-none")
    // })


    $(".products-icon").mouseover(function(e){
        e.preventDefault(e);
        $(".additional-navbar").addClass("open");
        $(".additional-navbar").removeClass("d-none");
        $(".additional-navbar").removeClass("close");

    });

    $(".products-icon").mouseout(function(e){
        e.preventDefault(e);
        $(".additional-navbar").removeClass("open");
        $(".additional-navbar").addClass("d-none");
        $(".additional-navbar").addClass("close");
    });
    


});

