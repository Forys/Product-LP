jQuery(document).on("scroll", function() {
  var ctaVisible = $("#cta-section").visible();
  var appSectionVisible = $("#list1").visible();
  if (ctaVisible) {
    $(".phone-img").addClass("phone-slide-in");
  }

  if (appSectionVisible) {
    $("#list1 li").each(function(i) {
      $(this).addClass("li-show");
    });
    setTimeout(function() {
      $("#list2 li").each(function(i) {
        $(this).addClass("li-show");
      });
    }, 1000);
  }
});
