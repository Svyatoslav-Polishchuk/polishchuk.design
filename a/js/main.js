// nav and contact links hover
$(".link-nav, .link-contacts").on(
  {
    mouseenter: function() {
      $(this).addClass("is-hovered");
    },
    mouseleave: function() {
      $(this).removeClass("is-hovered");
    }
  }
);

// contact container toggle
$(".toggleContacts").click(function()
  {
    $("body").toggleClass("contacts-shown");
  }
);

// expand about section toggle
$(".toggleAbout").click(function()
  {
    $("#intro").toggleClass("expanded");
  }
);

// name pronunciation player and svg icon animation
var audioplayer = document.getElementById("name-pronunciation");

var delay = (function()
{
  var timer = 0;
  return function(callback, ms)
  {
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

const points =
{
  left:
    {
      from: '15,0 50,25 50,75 15,100',
      to: '15,10 40,10 40,90, 15,90'
    },
  right:
    {
      from: '50,25 85,50 85,50, 50,75',
      to: '60,10 85,10 85,90, 60,90'
    }
};

$("#btn-play").click(function()
  {
    if (audioplayer.paused)
    {

      $('#play-left').attr(
        {
          from: points.left.from ,
          to: points.left.to
        }
      ).get(0).beginElement();

      $('#play-right').attr(
        {
          from: points.right.from,
          to: points.right.to
        }
      ).get(0).beginElement();

      audioplayer.play();

      delay(function()
      {
        $('#play-left').attr(
          {
            from: points.left.to ,
            to: points.left.from
          }
        ).get(0).beginElement();

        $('#play-right').attr(
          {
            from: points.right.to,
            to: points.right.from
          }
        ).get(0).beginElement();
      }, 1700 );
    }

    else
    {
      audioplayer.pause();

      $('#play-left').attr(
        {
          from: points.left.to ,
          to: points.left.from
        }
      ).get(0).beginElement();

      $('#play-right').attr(
        {
          from: points.right.to,
          to: points.right.from
        }
      ).get(0).beginElement();
    }
  }
);
