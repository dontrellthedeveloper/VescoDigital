/* ==============================================
|   |   |   |    Services
=============================================== */
$(function () {

    // animate on scroll
    new WOW().init();
});


/* ==============================================
|   |   |   |    Work
=============================================== */
$(function () {

   $("#work").magnificPopup({
       delegate: 'a',
       type: 'image',
       gallery: {
           enabled: true
       }

   });
});

/* ==============================================
|   |   |   |    Team
=============================================== */

$(function () {

   $(".team-members").owlCarousel({
       items: 3,
       autoplay: true,
       smartSpeed: 700,
       loop: true,
       autoplayHoverPause: true

   });
});