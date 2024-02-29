let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



let Selections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Selections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuicon.classList.toggle('bx-x');
navbar.classList.toggle('active');


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    dealy: 200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-image,.services-content,.portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-section', { origin: 'right' });


const typed = new Typed('.multiply-text', {
    Strings: ["HTML/CSS/JS", "Frontend Developer", "& Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
//seemore button js
function seeMore() {
    var hiddenText = document.getElementById("hiddenText");
    var seeMoreBtn = document.getElementById("seeMore");

    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
        seeMoreBtn.textContent = "Show Less";
    } else {
        hiddenText.style.display = "none";
        seeMoreBtn.textContent = "Show More";
    }
}