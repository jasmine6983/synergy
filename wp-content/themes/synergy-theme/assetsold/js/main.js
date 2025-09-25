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
gsap.from(".about-us .bg-label , .about-us-op ,our-services .bg-label", {
  y: -100, 
  duration: 1,
  opacity : 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".about-us",   // watch this element
    start: "top 80%",       // when top of .bg-label hits 80% of viewport
    toggleActions: "play none none none", // play once, don’t reverse
          // ensures animation runs only once
  }
});

gsap.from(".about-us h1 ,.about-us p ", {
  y: 100, 
  duration: 1,
  opacity : 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".about-us",   // watch this element
    start: "top 80%",       // when top of .bg-label hits 80% of viewport
    toggleActions: "play none none none", // play once, don’t reverse
          // ensures animation runs only once
  }
});


gsap.from(".our-services h1  ", {
  y: 100, 
  duration: 1,
  opacity : 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".our-services",   // watch this element
    start: "top 80%",       // when top of .bg-label hits 80% of viewport
    toggleActions: "play none none none", // play once, don’t reverse
          // ensures animation runs only once
  }
});
gsap.from("our-services .bg-label", {
  y: -100, 
  duration: 1,
  opacity : 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".our-services",   // watch this element
    start: "top 80%",       // when top of .bg-label hits 80% of viewport
    toggleActions: "play none none none", // play once, don’t reverse
          // ensures animation runs only once
  }
});

gsap.from(".Services-box", {
  scrollTrigger: {
    trigger: ".our-services",   // watch this element
    start: "top 20%",           // when top of .our-services hits top of viewport
    toggleActions: "play none none none" // play once
  },
  opacity: 0,
  y: 50,                  // slide up from 50px below
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.2            // delay between each box
});

   gsap.from(".about-us-right-box", {
    scrollTrigger: {
      trigger: ".about-us-right-box",
      start: "top 80%",          // when the top of box hits 80% of viewport
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: 100,                      // start 100px to the right
    duration: 1,
    ease: "power3.out"
  });

  // Optional: animate the inner notes separately with stagger
  gsap.from(".aboutus-pop-note", {
    scrollTrigger: {
      trigger: ".about-us-right-box",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    x: 50,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2
  });

    // Slide up the form-wrap when .contect-form enters viewport
  gsap.from(".form-wrap", {
    scrollTrigger: {
      trigger: ".contect-form",  // section to watch
      start: "top 50%",           // trigger when top of section hits 80% of viewport
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,                         // start 50px below
    duration: 1,
    ease: "power3.out",
    stagger: 0.2                   // optional if multiple child elements animate
  });

  // Optional: animate individual form fields sequentially
  gsap.from(".form-wrap .form-group, .form-wrap button", {
    scrollTrigger: {
      trigger: ".contect-form",
      start: "top 50%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15
  });
 
});


  window.addEventListener('load', () => {
      setTimeout(() => {
          const loader = document.querySelector('.loader');
          if(loader){
              loader.classList.add('hide'); // fade out
              // Optional: remove from DOM after fade
              setTimeout(() => loader.style.display = 'none', 500);
          }
      }, 5000); // 5 seconds
  });