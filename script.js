const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

function menuAnimation() {
    var menu = document.querySelector(".hamburger-menu");
    var full = document.querySelector(".full-scr");
    var logo = document.querySelector("nav img");

    var flag = 0;
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0;
            logo.style.opacity = 0;
            flag = 1;
        } else {
            full.style.top = "-100%";
            logo.style.opacity = 1;
            flag = 0;
        }
    });
}

function projectAnimation() {
    var container = document.querySelector(".elem-container");
    var fixed = document.querySelector(".fixed-image");

    container.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    });

    container.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    });

    var elems = document.querySelectorAll(".elem");

    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url("${image}")`;
        });
    });
}

function swiperAnimation() {
    var x = window.matchMedia("(max-width: 600px)")
    if (x.matches){
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
        });
    } else{
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            spaceBetween: 30,
        });
    }
}
function loaderAnimation() {
    var loader = document.querySelector(".loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4000)
}

menuAnimation()
projectAnimation()
swiperAnimation()
loaderAnimation()
