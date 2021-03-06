require('./bootstrap');

require('alpinejs');


window.onload = (event) => {
    // Change language flag
    document.getElementById('english').onclick = function changeEnglish() {
        document.getElementById('flag').src="../images/english-flag.svg";
    };

    document.getElementById('russian').onclick = function changeRussian() {
        document.getElementById('flag').src="../images/russian-flag.svg";
    };

    document.getElementById('dutch').onclick = function changeDutch() {
        document.getElementById('flag').src="../images/dutch-flag.svg";
    };

    document.getElementById('german').onclick = function changeGerman() {
        document.getElementById('flag').src="../images/german-flag.svg";
    };

    document.getElementById('spanish').onclick = function changeSpain() {
        document.getElementById('flag').src="../images/spain-flag.svg";
    };

    // GSAP heart animation in the header
    var tl = new TimelineMax({repeat: -1});

    $(".heartAnimation").each(function (index, element) {
        tl.to(element, 1, {y: 70, opacity: 1})
            .to(element, 1, {y: 170, opacity: 0, ease: Power1.easeIn}, "+=0.5")
    });

    // Smooth scroll when clicking anchor link
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    // Show navbar after scrolling
    window.addEventListener('scroll', function(){
        if(window.scrollY > window.innerHeight){
            document.getElementById('navbar').classList.add("sticky");
        } else {
            document.getElementById('navbar').classList.remove("sticky");
        }
    });

};

