console.log("Your index.js file is loaded correctly!");


$(".nav-item").on("click",function() {
    $(this).addClass("active")
    $(this).parent().siblings().find(".nav-item").removeClass("active")
})



// $('.navigation').on("hover", function(nav-item){
  
//     if ($(this).hasClass("tab1")){
//       $(".tab1").addClass("active");
//       $(".tab2").removeClass("active");
//       $("#tabContent1").css("display", "block");
//       $("#tabContent2").css("display", "none");
//     }
//     else if ($(this).hasClass("tab2")){
//       $(".tab2").addClass("active");
//       $(".tab1").removeClass("active");
//       $("#tabContent2").css("display", "block");
//       $("#tabContent1").css("display", "none");
//     }
//   });


//   var indicator = document.querySelector('.nav-indicator');
//   var items = document.querySelectorAll('.nav-item');
  
//   function handleIndicator(el) {
//     items.forEach(function (item) {
//       item.classList.remove('is-active');
//       item.removeAttribute('style');
//     });
//     indicator.style.width = "".concat(el.offsetWidth, "px");
//     indicator.style.left = "".concat(el.offsetLeft, "px");
//     indicator.style.backgroundColor = el.getAttribute('active-color');
//     el.classList.add('is-active');
//     el.style.color = el.getAttribute('active-color');
//   }
  
//   items.forEach(function (item, index) {
//     item.addEventListener('click', function (e) {
//       handleIndicator(e.target);
//     });
//     item.classList.contains('is-active') && handleIndicator(item);
//   });