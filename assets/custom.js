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


/*work ex cal*/

const calWorkEx = () => {
    totalWorkEx = Math.floor(new Date().getTime() - new Date('2018-06-01').getTime());
    const day = 1000 * 60 * 60 * 24;
    var years = totalWorkEx / (day * 365);
    years = Math.round((years + Number.EPSILON) * 100) / 100
    document.getElementById('workex').innerText = `${years} years`;
}
calWorkEx();