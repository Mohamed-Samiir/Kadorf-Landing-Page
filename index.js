$(document).ready(function () {
    $(".successStoris .owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        nav: true,
        mergeFit: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                center: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 2,
                nav: true,
                loop: false
            }
        }
    })

    $(".featuredMembers .owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        nav: true,
        mergeFit: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 7,
                nav: true,
                loop: true,
            }
        }
    })

    $(".salesCycle .owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        nav: true,
        mergeFit: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    })
});