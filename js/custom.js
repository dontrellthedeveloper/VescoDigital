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

/* ==============================================
|   |   |   |    Team
=============================================== */

$(function () {

    $(".customer-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true

    });
});


/* ==============================================
|   |   |   |    Stats
=============================================== */

$(function () {

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});


/* ==============================================
|   |   |   |    Clients
=============================================== */
$(function () {

    $(".clients-list").owlCarousel({
       items: 6,
       autoplay: true,
       smartSpeed: 700,
       loop: true,
       autoplayHoverPause: true
    });

});

/* ================================
|   |   |   Google Map
================================ */
$(window).on('load', function () {

    // Map Variables
    var addressString = '7900 Santa Monica Blvd, CA, West Hollywood, 90046, USA';
    var myLatlng = {lat: 34.090540, lng: -118.361750};

    //1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });


});