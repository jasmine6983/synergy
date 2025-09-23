$(document).ready(function () {
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0
        );
    }

    function triggerOdometer(element) {
        const $element = $(element);
        if (!$element.hasClass('odometer-triggered')) {
            const countNumber = $element.attr('data-count');
            setTimeout(() => {
                $element.html(countNumber);
            }, 500);
            $element.addClass('odometer-triggered');
        }
    }

    function handleOdometer() {
        $('.odometer').each(function () {
            if (isInViewport(this)) {
                triggerOdometer(this);
            }
        });
    }

    // Run on load + scroll
    handleOdometer();
    $(window).on('scroll', handleOdometer);

    // GSAP animation
    gsap.from(".exp-box", { y: -300, duration: 1, ease: "power2.inOut" });
     gsap.from(".cli-box", { y: 300, duration: 1, ease: "power2.inOut" });
   

 gsap.from("#hero-title", {
    y: -100,          // start 100px above
    opacity: 0,       // fade in too
    duration: 1.5,    // seconds
    ease: "power3.out"
  });
  gsap.from("#hand-img", {
    y: -150,        // start above (-150px)
    opacity: 0,     // fade in
    duration: 1.5,  // time in seconds
    ease: "power3.out"
  });
  gsap.from(".action-wrap", { y: 100,  opacity: 0,  duration: 1, ease: "power2.inOut" });
const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.navbar-toggler');
const closeBtn = document.querySelector('.sidebar-close');
const overlay = document.querySelector('.sidebar-overlay');

function openSidebar() {
    sidebar.classList.add('show');
    overlay.classList.add('show');
}

function closeSidebar() {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
}

toggle.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);


});