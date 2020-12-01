const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navLink.forEach( n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

document.getElementById('date--year').innerText = (new Date()).getFullYear();

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
    mobile: true
})

// Animate Contact Button
// $(window).bind('scroll', function() {
//     if($('.button')[0].getBoundingClientRect().top >= 64){
//         $('button').addClass('button-reveal');
//         $('.button')[0].classList.remove('button-animate');

//         console.log('Yes');
//     } else if ($('.button')[0].getBoundingClientRect().top <= 64){
//         $('.button').addClass('button-animate');
//         $('.button')[0].classList.remove('button-reveal');
//         console.log('No');
//     }
// })

// Typed JS
$(function(){
	$(".header-text-skills").typed({
		strings: ['Front End', 'Back End', "Some DevOps"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 1000,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {
            $('.header-need').innerText = 'Alright'
        },
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});


// Home
sr.reveal('.home__title', {})
sr.reveal('.button-reveal', {delay: 200})
sr.reveal('.home__img', {delay: 400})
sr.reveal('.home__social-icon', {interval: 200})

// About
sr.reveal('.about__subtitle', {})
sr.reveal('.about__text', {delay: 400})
sr.reveal('.about__text1', {delay: 300})
sr.reveal('.about__text2', {delay: 200})
sr.reveal('.about__text3', {delay: 100})
sr.reveal('.about__img', {delay: 400})

// Skills
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {delay: 200})
sr.reveal('.skills__data', {interval: 400})
sr.reveal('.skills__img', {delay: 400})

// Work
sr.reveal('.work__img', {interval: 200})

// Contact
sr.reveal('.contact__input', {interval: 200})
