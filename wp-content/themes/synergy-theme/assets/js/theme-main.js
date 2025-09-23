

(function ($) {
  "use strict";

 gsapController();
  // wow js

  function wowController() {
    if ($(".wow").length > 0) {
      new WOW().init();
    }
  }



  /* ------------- Gsap registration Js -------------*/
  gsap.registerPlugin(ScrollTrigger
    
  );
  gsap.config({
    nullTargetWarn: false,
  });

  function gsapController() {
    let mediaMatch = gsap.matchMedia();

    // h9 service sticky
    function initStickyAndProgress() {
      if ($(".tj-sticky-panel-2").length > 0) {
        let tl = gsap.timeline();
        let panels = document.querySelectorAll(".tj-sticky-panel-2");
        panels.forEach((panel, i) => {
          tl.to(panel, {
            scrollTrigger: {
              trigger: panel,
              pin: panel,
              scrub: 1,
              start: "top top",
              end: "bottom+=120 bottom",
              endTrigger: ".tj-sticky-panel-container-2",
              pinSpacing: false,
              markers: false,
            },
          });
        });
      }

      // Scroll Progress animation
      if ($(".tj-progress-item").length > 0) {
        const tjProgressWrapper = document.querySelector(".tj-progress-wrapper");

        if (tjProgressWrapper?.children?.length) {
          let panels = gsap.utils.toArray(".tj-progress-item");
          let totalPanels = panels.length;
          let scrollProgressItems = gsap.utils.toArray(".tj-scroll-progress-item");

          gsap.to(panels, {
            ease: "none",
            scrollTrigger: {
              trigger: tjProgressWrapper,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
              pin: false,
              onUpdate: (self) => {
                let progress = self.progress;
                let activeIndex = Math.round(progress * (totalPanels - 1));

                panels.forEach((panel, index) => {
                  panel.classList.toggle("active", index === activeIndex);
                });
                scrollProgressItems.forEach((item, index) => {
                  item.classList.toggle("active", index === activeIndex);
                });
              },
            },
          });
        }
      }
    }
    initStickyAndProgress();

    // h10 process sticky
    function initStickyPanel3Animation() {
      const container = document.querySelector(".tj-sticky-panel-3-container");
      const panels = document.querySelectorAll(".tj-sticky-panel-3");
      if (!container || panels.length === 0) return;
      mediaMatch.add("(min-width: 1025px)", () => {
        const startOffset = parseInt(getComputedStyle(container).paddingTop) || 0;
        const lastIdx = panels.length - 1;
        const lastPanel = panels[lastIdx];
        const paddingBottom = parseInt(getComputedStyle(container).paddingBottom) || 0;
        panels.forEach((panel, i) => {
          gsap.to(panel, {
            scrollTrigger: {
              trigger: panel,
              start: `top-=${startOffset} top`,
              endTrigger: container,
              end: () => `bottom top+=${lastPanel.offsetHeight + startOffset + paddingBottom}`,
              pin: true,
              pinSpacing: false,
              scrub: true,
              markers: false,
              invalidateOnRefresh: true,
            },
            ease: "circ",
            opacity: i === 0 || i === lastIdx ? 1 : 0.1,
          });
        });
      });
    }
    initStickyPanel3Animation();
  }
})(jQuery);
