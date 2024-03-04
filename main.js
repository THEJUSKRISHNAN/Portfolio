let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

// // scrolll selecton active link
// let selectons = document.querySelectorAll('section');
// let navLink = document.querySelectorAll('header nav a');
// window.onscroll=()=>{
//     selectons.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >-offset && top < offset+height)
//         {
//             navLink.forEach.apply(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' +id + ']').classList.add('active');

//             });
//         };
//     })

    // sticky nav bar

//     let header=document.querySelector('header');
//     header.classList.toggle('sticky',window.scrollY>100);

//     // remove togle icon and navbar
//     menuIcon.classList.remove('fa-x');
//     navbar.classList.remove('active');
//  }

//  scrol reveal

ScrollReveal({
    distance: '80px',
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