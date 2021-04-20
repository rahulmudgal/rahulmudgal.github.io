$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 0, function () {
                window.location.hash = hash;
            });
        }
    });
});

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


/*work ex cal*/

var calWorkEx = () => {
    var startDay = new Date('2018-06-20').getTime();
    var currDay = new Date().getTime();
    totalWorkEx = Math.floor(currDay - startDay);
    var day = 1000 * 60 * 60 * 24;

    var years = Math.floor(totalWorkEx / (day * 365));
    var months = Math.floor((totalWorkEx % (day * 365)) / (day * 31));
    var days = Math.floor((totalWorkEx % day * 31) / day);

    workexString = `${years} ${years > 1 ? 'years' : 'year'} ${months} ${months > 1 ? 'months' : 'month'}`;
    document.getElementById('workex').innerText = workexString;
}
calWorkEx();