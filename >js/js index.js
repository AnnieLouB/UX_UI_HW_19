console.log("Your index.js file is loaded correctly!");


$(".nav-item").on("click",function() {
    $(this).addClass("active")
    $(this).parent().siblings().find(".nav-item").removeClass("active")
})


