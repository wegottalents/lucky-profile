(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

["video_01", "video_02", "video_03", "video_04", "swim_freestyle", "swim_breaststroke", "LEGO_EV3_controlled_clock"]
.forEach(function (id) {
  $("#" + id).bind("play", function () {
    console.log("begin playing " + id);
    var cid = "#" + id + "_caption";
    $(cid).fadeOut('slow', null, function () {
      $(cid).removeClass("d-block");
      $(cid).addClass("d-none");
    });
  });
  $("#" + id).bind("ended", function () {
    console.log("end playing " + id);
    var cid = "#" + id + "_caption";
    $(cid).fadeIn('fast', null, function () {
      $(cid).removeClass("d-none");
      $(cid).addClass("d-block");
    });
  });
});