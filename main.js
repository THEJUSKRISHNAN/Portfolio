let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}
{/* <i class="fa-solid "></i> */}