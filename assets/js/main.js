/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu= document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>
    {
        navMenu.classList.add('show-menu')    
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.classList;

    // Toggle the clicked skill content
    if (itemClass.contains('skills__open')) {
        itemClass.remove('skills__open');
        itemClass.add('skills__close');
    } else {
        itemClass.remove('skills__close');
        itemClass.add('skills__open');
    }
}

skillsHeader.forEach((element) => {
    element.addEventListener('click', toggleSkills);
});

        
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        // Remove active class from all tab contents
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });

        // Add active class to the clicked tab's target content
        target.classList.add('qualification__active');

        // Remove active class from all tabs
        tabs.forEach(t => {
            t.classList.remove('qualification__active');
        });

        // Add active class to the clicked tab
        tab.classList.add('qualification__active');
    });
});


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.projects__container', {
    cssMode: true,
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    } 
  window.addEventListener('scroll', scrollUp)
  

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconThemeMoon = 'uil-moon'
const iconThemeBrightness = 'uil-brightness'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme and icon that the interface has
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconThemeMoon) ? iconThemeMoon : iconThemeBrightness

// We validate if the user previously chose a theme
if (selectedTheme) {
  // If the validation is fulfilled, we apply the saved theme and icon
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === iconThemeMoon ? 'add' : 'remove'](iconThemeMoon)
  themeButton.classList[selectedIcon === iconThemeBrightness ? 'add' : 'remove'](iconThemeBrightness)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Toggle the dark theme and the icon class
    document.body.classList.toggle(darkTheme)
    if (themeButton.classList.contains(iconThemeMoon)) {
        themeButton.classList.replace(iconThemeMoon, iconThemeBrightness)
    } else {
        themeButton.classList.replace(iconThemeBrightness, iconThemeMoon)
    }
    
    // Save the current theme and icon to local storage
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
