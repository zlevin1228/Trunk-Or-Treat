


$( document ).ready(function() {
    $('.header').hide()
    $('.header').slideDown(2500)
    $('main').hide()
    $('main').fadeIn(5000)
    $('.extrainfo').hide()
    $('.galleryimage').hide()
    $('.galleryimage2').hide()
    $('.galleryimage3').hide()
    $('.galleryimage4').hide()
    $('.galleryimage5').hide()
    $('.galleryimage6').hide()
    $('.checkimg').hide()
    $('.more-info').on('click', function(event) {
        if($('.more-info').text() === "Less Info") {
            $('.more-info').text("More Info");
        } else {
            $('.more-info').text("Less Info");
        }
    $('.extrainfo').toggle()
    })


    if( $(window).width() > 768 ) {
        $('.hoverdiv').on('mouseenter', function() {
            $('.gallerytext').hide()
            $('.galleryimage').fadeIn(2000)
        })
        $('.hoverdiv').on('mouseleave', function() {
            $('.galleryimage').hide()
            $('.gallerytext').fadeIn(2000)
        })
    } else {
        $('.hoverdiv').on('click', function() {
            $('.galleryimage').hide()
            $('.gallerytext').fadeIn(2000)
        })
    }

    if( $(window).width() > 768 ) {
        $('.hoverdiv2').on('mouseenter', function() {
            $('.gallerytext2').hide()
            $('.galleryimage2').fadeIn(2000)
        })
        $('.hoverdiv2').on('mouseleave', function() {
            $('.galleryimage2').hide()
            $('.gallerytext2').fadeIn(2000)
        })
    } else {
        $('.hoverdiv2').on('click', function() {
            $('.galleryimage').hide()
            $('.gallerytext').fadeIn(2000)
        })
    }

    if( $(window).width() > 768 ) {
        $('.hoverdiv3').on('mouseenter', function() {
            $('.gallerytext3').hide()
            $('.galleryimage3').fadeIn(2000)
        })
        $('.hoverdiv3').on('mouseleave', function() {
            $('.galleryimage3').hide()
            $('.gallerytext3').fadeIn(2000)
        })
    } else {
        $('.hoverdiv3').on('click', function() {
            $('.galleryimage3').hide()
            $('.gallerytext3').fadeIn(2000)
        })
    }

    if( $(window).width() > 768 ) {
        $('.hoverdiv4').on('mouseenter', function() {
            $('.gallerytext4').hide()
            $('.galleryimage4').fadeIn(2000)
        })
        $('.hoverdiv4').on('mouseleave', function() {
            $('.galleryimage4').hide()
            $('.gallerytext4').fadeIn(2000)
        })
    } else {
        $('.hoverdiv4').on('click', function() {
            $('.galleryimage4').hide()
            $('.gallerytext4').fadeIn(2000)
        })
    }

    if( $(window).width() > 768 ) {
        $('.hoverdiv5').on('mouseenter', function() {
            $('.gallerytext5').hide()
            $('.galleryimage5').fadeIn(2000)
        })
        $('.hoverdiv5').on('mouseleave', function() {
            $('.galleryimage5').hide()
            $('.gallerytext5').fadeIn(2000)
        })
    } else {
        $('.hoverdiv5').on('click', function() {
            $('.galleryimage5').hide()
            $('.gallerytext5').fadeIn(2000)
        })
    }

    if( $(window).width() > 768 ) {
        $('.hoverdiv6').on('mouseenter', function() {
            $('.gallerytext6').hide()
            $('.galleryimage6').fadeIn(2000)
        })
        $('.hoverdiv6').on('mouseleave', function() {
            $('.galleryimage6').hide()
            $('.gallerytext6').fadeIn(2000)
        })
    } else {
        $('.hoverdiv6').on('click', function() {
            $('.galleryimage6').hide()
            $('.gallerytext6').fadeIn(2000)
        })
    }

    $('.event-header').on('click', function() {
        $(this).next('.event-details').slideToggle();  
    });

    $('.check').on('click', function() {
        $('.checkimg').fadeToggle(2500)
    })
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  $('.header').hide()
    $('.header').slideDown(2500)
    $('main').hide()
    $('main').fadeIn(5000)
    $('.extrainfo').hide()
    $('.galleryimage').hide()
    $('.galleryimage2').hide()
    $('.galleryimage3').hide()
    $('.galleryimage4').hide()
    $('.galleryimage5').hide()
    $('.galleryimage6').hide()
    $('.checkimg').hide()
    $('.more-info').on('click', function(event) {
        if($('.more-info').text() === "Less Info") {
            $('.more-info').text("More Info");
        } else {
            $('.more-info').text("Less Info");
        }
    $('.extrainfo').toggle()
    })


    if( $(window).width() > 768 ) {
        $('.hoverdiv').on('mouseenter', function() {
            $('.gallerytext').hide()
            $('.galleryimage').fadeIn(2000)
        })
        $('.hoverdiv').on('mouseleave', function() {
            $('.galleryimage').hide()
            $('.gallerytext').fadeIn(2000)
        })
    } else {
        $('.hoverdiv').on('click', function() {
            $('.galleryimage').hide()
            $('.gallerytext').fadeIn(2000)
        })
    }

    if( $(window).width() > 768 ) {
        $('.hoverdiv2').on('mouseenter', function() {
            $('.gallerytext2').hide()
            $('.galleryimage2').fadeIn(2000)
        })
        $('.hoverdiv2').on('mouseleave', function() {
            $('.galleryimage2').hide()
            $('.gallerytext2').fadeIn(2000)
        })
    } else {
        $('.hoverdiv2').on('click', function() {
            $('.galleryimage').hide()
            $('.gallerytext').fadeIn(2000)
        })
    }

    if( $(window).width() > 768 ) {
        $('.hoverdiv3').on('mouseenter', function() {
            $('.gallerytext3').hide()
            $('.galleryimage3').fadeIn(2000)
        })
        $('.hoverdiv3').on('mouseleave', function() {
            $('.galleryimage3').hide()
            $('.gallerytext3').fadeIn(2000)
        })
    } else {
        $('.hoverdiv3').on('click', function() {
            $('.galleryimage3').hide()
            $('.gallerytext3').fadeIn(2000)
        })
    }

    if( $(window).width() > 768 ) {
        $('.hoverdiv4').on('mouseenter', function() {
            $('.gallerytext4').hide()
            $('.galleryimage4').fadeIn(2000)
        })
        $('.hoverdiv4').on('mouseleave', function() {
            $('.galleryimage4').hide()
            $('.gallerytext4').fadeIn(2000)
        })
    } else {
        $('.hoverdiv4').on('click', function() {
            $('.galleryimage4').hide()
            $('.gallerytext4').fadeIn(2000)
        })
    }

    if( $(window).width() > 768 ) {
        $('.hoverdiv5').on('mouseenter', function() {
            $('.gallerytext5').hide()
            $('.galleryimage5').fadeIn(2000)
        })
        $('.hoverdiv5').on('mouseleave', function() {
            $('.galleryimage5').hide()
            $('.gallerytext5').fadeIn(2000)
        })
    } else {
        $('.hoverdiv5').on('click', function() {
            $('.galleryimage5').hide()
            $('.gallerytext5').fadeIn(2000)
        })
    }

    if( $(window).width() > 768 ) {
        $('.hoverdiv6').on('mouseenter', function() {
            $('.gallerytext6').hide()
            $('.galleryimage6').fadeIn(2000)
        })
        $('.hoverdiv6').on('mouseleave', function() {
            $('.galleryimage6').hide()
            $('.gallerytext6').fadeIn(2000)
        })
    } else {
        $('.hoverdiv6').on('click', function() {
            $('.galleryimage6').hide()
            $('.gallerytext6').fadeIn(2000)
        })
    }

    $('.event-header').on('click', function() {
        $(this).next('.event-details').slideToggle();  
    });

    $('.check').on('click', function() {
        $('.checkimg').fadeToggle(2500)
    })
}