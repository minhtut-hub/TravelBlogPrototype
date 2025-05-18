const toggle = document.querySelector('#toggle')
const headerMenu = document.querySelector('.header-menu')

toggle.addEventListener('click', function() {
    headerMenu.classList.toggle('active')
})

const homeSwiper = new Swiper('.home-swiper', {
    navigator: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true,
    autoplay: {
        delapy: 5000,
    },
    effect: 'fade',
    fadeEffect: {
        crossfade: true,
    }
});

const featureSwiper = new Swiper('.featured-swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop:true,
    breakpoints: {
        480: {
            slidesPerView:1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView:2,
            spaceBetween: 30,
        },
        990: {
            slidesPerView:3,
            spaceBetween: 35,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

const navLinks = document.querySelectorAll(".sidebar-menu li");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let activeLink = entry.target.id;
            navLinks.forEach((navLink => navLink.classList.remove("active")));
            // console.log(document.querySelector(`nav a[href="#${activeLink}"]`))
            document.querySelector(`nav a[href="#${activeLink}"]`).parentElement.classList.add("active");
        }
    });
},
{ threshold:0.2}
);

const sections = document.querySelectorAll("section");
sections.forEach(section => observer.observe(section));