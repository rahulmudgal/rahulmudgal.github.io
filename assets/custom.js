$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 0, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('serviceWorker.js')
            .then(registration => {
                registration.addEventListener('updatefound', () =>
                    console.log('A new service worker is available')
                )
                console.log('Registration successful')
            })
            .catch(err => console.log('Registration unsuccessful ', err))
    });
}

/* Counter Code */
$('span.counter').each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 3000,
        easing: 'swing',
        step: function () {
            $this.text(Math.ceil(this.Counter));
        }
    });
});