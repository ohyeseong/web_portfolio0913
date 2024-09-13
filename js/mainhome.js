$(function(){
    // $("body").delay(500).fadeIn()

    $(".logo a").click(function(){
        setTimeout(function(){
            location.href = "full.html"
        }, 500)
    })

    $(".img_slide").slick({
        autoplay: true,
        fade: true,
        arrows: false,
        dots: false,
    })
})// 제이커리끝

$(window).scroll(function(){
    
})