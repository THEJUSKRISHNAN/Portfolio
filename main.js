let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}



ScrollReveal({
    distance: '50px',
    duration:2000,
    delay:300,

});

ScrollReveal().reveal('.home-content,.heading,.about-content', {origin:'top'});
ScrollReveal().reveal('.skills-container,.portfolio-box,.contact-container', {origin:'bottom' });
ScrollReveal().reveal('.about-img,.home-img', {origin:'left'});

// typed js
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','Web Developer'],
    typeSpeed: 70,
    backSpeed:70,
    backDelay: 1000,
    loop: true,
})