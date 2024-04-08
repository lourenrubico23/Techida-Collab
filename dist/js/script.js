//sticky
const header = document.querySelector(".header");
window.console.log(scrollY);
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("hgrey");
  } else {
    header.classList.remove("hgrey");
  }
});

// Portfolio 
const portfolioNavs = document.querySelectorAll(".portfolio__navs button");
const portfolioFilter = document.querySelectorAll(".portfolio__images .portfolio__images__card");

const portfolioFilterImage = e =>{
  document.querySelector(".active").classList.remove("active");

  e.target.classList.add("active");
  console.log(e.target);

  portfolioFilter.forEach(card => 
    {
      card.classList.add("hide");

      if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all")
      {
        card.classList.remove("hide");
      }
    });
}

portfolioNavs.forEach(button => button.addEventListener("click", portfolioFilterImage));

//Scroll on Top
let calcScrollValue = () => 
{
  let scrollProgress = document.getElementById("progressTop");
  let progressValue = document.getElementById("progressTop-value");

  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - 
  document.documentElement.clientHeight;

  let scrollValue = Math.round((pos * 100) / calcHeight);

  if(pos > 100)
  {
    scrollProgress.style.opacity = "100";
  }
  else
  {
    scrollProgress.style.opacity = "0";
  }
  

  scrollProgress.addEventListener("click", () => 
{
  document.documentElement.scrollTop = 0;
}); 

scrollProgress.style.background = `conic-gradient(#1ea84f ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


// change on click
function functionToggle(x) {
  x.classList.toggle("fa-sun");
  x.classList.toggle("fa-moon");
}


/* Burger Menu */
const burgerMenu = document.querySelector(".burger__menu");
const menu = document.querySelector(".header__action");
burgerMenu.addEventListener("click", () =>{
    burgerMenu.classList.toggle("open");
    menu.classList.toggle("open");
});

/* Links / Dropdown - header */
const headerlinks = document.querySelectorAll(".pages__drpdwn a");
headerlinks.forEach((headerlink) => {
  headerlink.addEventListener("click", () => {
    headerlink.querySelector("i").classList.toggle("open");
    headerlink.nextElementSibling.classList.toggle("open");
  });
});

/* Links / Dropdown - faq */
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

pJSDom[0].pJS.particles.color.value = '#818589';
pJSDom[0].pJS.particles.line_linked.color = '#818589';
pJSDom[0].pJS.fn.particlesRefresh();



});
const darkmodeM = document.querySelector("#toggledark");
darkmodeM.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  pJSDom[0].pJS.particles.color.value = '#818589';
  pJSDom[0].pJS.particles.line_linked.color = '#818589';
  pJSDom[0].pJS.fn.particlesRefresh();
});


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