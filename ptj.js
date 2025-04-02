const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*======================= ACCORD SKILLS ======================*/

const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*============== Qualification Skills ===============*/

/*const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})      
*/

/*======================= Services Modal ===================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*======================= Portfolio Swiper ===================*/
var swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL up ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// Create animated stars
function createStars() {
  const starsContainer = document.createElement('div');
  starsContainer.className = 'stars';
  document.body.appendChild(starsContainer);

  const numberOfStars = 200;
  
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    // Random size
    const size = Math.random() * 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Random animation duration
    star.style.setProperty('--duration', `${2 + Math.random() * 3}s`);
    
    starsContainer.appendChild(star);
  }
}

// Create falling stars
function createFallingStars() {
  const fallingStarsContainer = document.createElement('div');
  fallingStarsContainer.className = 'falling-stars';
  document.body.appendChild(fallingStarsContainer);

  const numberOfFallingStars = 5;
  
  for (let i = 0; i < numberOfFallingStars; i++) {
    const star = document.createElement('div');
    star.className = 'falling-star';
    
    // Random starting position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${-10 + Math.random() * 10}%`;
    
    // Random size
    const size = Math.random() * 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Random animation duration
    star.style.setProperty('--duration', `${3 + Math.random() * 2}s`);
    star.style.setProperty('--delay', `${Math.random() * 5}s`);
    
    fallingStarsContainer.appendChild(star);
  }
}

// Create animated cursor
function createCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', function() {
  // Create stars
  createStars();
  
  // Create falling stars
  createFallingStars();
  
  // Create custom cursor
  createCursor();
  
  // Start typing animation
  typeWriter();
});

// Update the name with infinite typing animation
function typeWriter() {
  const nameElement = document.querySelector('.home__title');
  if (nameElement) {
    const text = "Hi, I'm Arunabha Banerjee";
    let i = 0;
    let isDeleting = false;
    
    function typeWriter() {
      const currentText = nameElement.textContent;
      
      if (isDeleting) {
        nameElement.textContent = text.substring(0, currentText.length - 1);
        if (currentText.length === 0) {
          isDeleting = false;
          i = 0;
        }
      } else {
        nameElement.textContent = text.substring(0, currentText.length + 1);
        if (currentText.length === text.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000); // Wait for 2 seconds before deleting
        }
      }
      
      const speed = isDeleting ? 50 : 100; // Faster when deleting
      setTimeout(typeWriter, speed);
    }
    
    typeWriter();
  }
}
