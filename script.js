$( document ).ready(function() {
    
    $('.extrainfo').hide()
    $('.more-info').on('click', function(event) {
        if($('.more-info').text() === "Less Info") {
            $('.more-info').text("More Info");
        } else {
            $('.more-info').text("Less Info");
        }
    $('.extrainfo').toggle()
    })


    if( $(window).width() > 768 ) {
        // Large menu
    } else {
        // Small menu
    }




});