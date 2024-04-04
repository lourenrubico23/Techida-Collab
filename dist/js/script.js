/* Burger Menu */
const burgerMenu = document.querySelector(".burger__menu");
const menu = document.querySelector(".header__action");
burgerMenu.addEventListener("click", () =>{
    burgerMenu.classList.toggle("open");
    menu.classList.toggle("open");
});



/* Links / Dropdown */
const links = document.querySelectorAll(".faq__cards h5");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.querySelector("i").classList.toggle("open");
    link.nextElementSibling.classList.toggle("open");
  });
});

/* Darkmode */
const darkmode = document.querySelector("#toggle");
darkmode.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
const darkmodeM = document.querySelector("#toggledark");
darkmodeM.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("showdrpdwn");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showdrpdwn')) {
        openDropdown.classList.remove('showdrpdwn');
      }
    }
  }
}