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