let i = 0;

$(function () {
    popup();
    menu_tab();
    let interval_id = setInterval(carousel, 3000);
    nav();
})

function nav() {
    $(".gnb > li").mouseenter(function(){
        $(".lnb").stop().slideDown();
    })
    $(".gnb > li").mouseleave(function(){
        $(".lnb").stop().slideUp();
    })
}

function popup() {
    $(".notice li:first").click(function () {
        $("#popup").show();
    })
    $("#popup button").click(function () {
        $("#popup").hide();
    })
}

function menu_tab() {
    $(".board_title li:first").click(function () {
        $(this).addClass("on");
        $(this).next().removeClass("on");
        $(".gallery").hide();
        $(".notice").show();
    })
    $(".board_title li:last").click(function () {
        $(this).addClass("on");
        $(this).prev().removeClass("on");
        $(".gallery").show();
        $(".notice").hide();
    });
}

function carousel() {
    if (i>=3) i = 0;
    let y_pos = -300 * i;
    $(".slide").css({
        marginTop: y_pos
    });
    i++;
}