window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrolled = window.scrollY > 0;

    if (scrolled) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// window.onscroll = function() {
//   var navbar = document.getElementById("navbar");
//   var frontImage = document.getElementById("front-image");
  
//   if (window.scrollY >= frontImage.offsetTop) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// };