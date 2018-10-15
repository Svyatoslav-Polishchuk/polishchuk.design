$(".link-nav").on({
  mouseenter: function () {
    $(this).addClass("this-hovered");
    $(".link-nav").addClass
  },
  mouseleave: function () {
    $(this).removeClass("this-hovered");
  }
});

$(".link-contacts").on({
  mouseenter: function () {
    $(this).addClass("this-hovered");
    $(".link-contacts").addClass
  },
  mouseleave: function () {
    $(this).removeClass("this-hovered");
  }
});

$("#getConacts").click(function() {
  $(".header").toggleClass("contacts-shown");
  $(".shading-container").toggleClass("shown");
})
