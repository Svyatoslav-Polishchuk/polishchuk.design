$(".link-nav").on(
  {
    mouseenter: function () {
      $(this).addClass("is-hovered");
      $(".link-nav").addClass
    },
    mouseleave: function () {
      $(this).removeClass("is-hovered");
    }
  }
);

$(".link-contacts").on(
  {
    mouseenter: function () {
      $(this).addClass("is-hovered");
      $(".link-contacts").addClass
    },
    mouseleave: function () {
      $(this).removeClass("is-hovered");
    }
  }
);

function toggleContacts()
{
  $(".header").toggleClass("contacts-shown");
  $(".shading-container").toggleClass("shown");
}
