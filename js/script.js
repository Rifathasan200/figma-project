

$(window).scroll(function(){
    console.log($(window).scrollTop())

    if($(window).scrollTop() > 300){
        $(".menu").addClass("scroll")
    }else{
        $(".menu").removeClass("scroll")
    }
})