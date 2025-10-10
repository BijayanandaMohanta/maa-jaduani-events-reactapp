$('.home-page-slider').owlCarousel({
    stagePadding: 150,
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        600:{
            items:1,
            stagePadding: 30
        },
        1000:{
            items:1,
            stagePadding: 150
        }
    }
})
$('.service-image-slider').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        }
    }
})
$('.testimonials').owlCarousel({
    margin:20,
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        600:{
            items:3,
            stagePadding: 10
        },
        1000:{
            items:4,
            stagePadding: 50
        }
    }
})

$('.about-slider').owlCarousel({
    stagePadding: 20,
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:2,
            stagePadding: 0
        },
        600:{
            items:3,
            stagePadding: 10
        },
        1000:{
            items:4,
            stagePadding: 20
        }
    }
})
$('.about-slider-rev').owlCarousel({
    stagePadding: 20,
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    rtl:true,
    responsive:{
        0:{
            items:2,
            stagePadding: 0
        },
        600:{
            items:3,
            stagePadding: 10
        },
        1000:{
            items:4,
            stagePadding: 20
        }
    }
})