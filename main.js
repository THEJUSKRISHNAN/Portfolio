let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}



ScrollReveal({
    distance: '50px',
    duration:2000,
    delay:200,

});

ScrollReveal().reveal('.home-content,.heading', {origin:'top'});
ScrollReveal().reveal('.home-img,.skills-container,.portfolio-box,.contact-container', {origin:'buttom' });
ScrollReveal().reveal('.about-img', {origin:'left'});
ScrollReveal().reveal('.about-content', {origin:'right'});


// typed js
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','Web Developer'],
    typeSpeed: 70,
    backSpeed:70,
    backDelay: 1000,
    loop: true,
})