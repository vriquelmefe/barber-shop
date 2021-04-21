$(function() {
    $("a").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var idTittle = this.hash;

            $("html, body").animate({
                scrollTop: $(idTittle).offset().top
            }, 800, function() {
                window.location.hash = idTittle;
            });
        }

    });

});