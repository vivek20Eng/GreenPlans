// GSAP ScrollTrigger Registration
gsap.registerPlugin(ScrollTrigger);

// Initialize GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
  // Function to initialize GSAP animations with proper ScrollTrigger
  const initGSAPAnimations = () => {
    // Fade up animations
    gsap.utils.toArray(".gsap-fade-up").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none", // Changed to play only once per scroll
            once: false, // Allow replay on scroll back
            markers: false, // Set to true for debugging
          },
        },
      );
    });

    // Fade left animations
    gsap.utils.toArray(".gsap-fade-left").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once: false,
            markers: false,
          },
        },
      );
    });

    // Fade right animations
    gsap.utils.toArray(".gsap-fade-right").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once: false,
            markers: false,
          },
        },
      );
    });

    // Scale animations
    gsap.utils.toArray(".gsap-scale").forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once: false,
            markers: false,
          },
        },
      );
    });
  };

  // Initialize Swiper sliders
  const initSwipers = () => {
    // Services Swiper
    try {
      const servicesSwiper = new Swiper(".services-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".services-swiper .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".services-swiper .swiper-button-next",
          prevEl: ".services-swiper .swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
        on: {
          init: function () {
            console.log("Services Swiper initialized");
          },
          slideChange: function () {
            console.log("Services Swiper slide changed");
          },
        },
      });
    } catch (error) {
      console.error("Error initializing Services Swiper:", error);
    }

    // Testimonials Swiper
    try {
      const testimonialsSwiper = new Swiper(".testimonials-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".testimonials-swiper .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".testimonials-swiper .swiper-button-next",
          prevEl: ".testimonials-swiper .swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
        on: {
          init: function () {
            console.log("Testimonials Swiper initialized");
          },
          slideChange: function () {
            console.log("Testimonials Swiper slide changed");
          },
        },
      });
    } catch (error) {
      console.error("Error initializing Testimonials Swiper:", error);
    }

    // Refresh ScrollTrigger after Swiper initialization
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  // Smooth scrolling for navigation links
  const initSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  };

  // Navbar scroll effect
  const initNavbarScroll = () => {
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".nav-container");
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.style.background = "rgba(255, 255, 255, 0.98)";
        } else {
          navbar.style.background = "rgba(255, 255, 255, 0.95)";
        }
      }
    });
  };

  // Hamburger menu toggle
  const initHamburgerMenu = () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const navBackdrop = document.getElementById("nav-backdrop");

    if (hamburger && navMenu && navBackdrop) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        navBackdrop.classList.toggle("active");
      });

      // Close menu when clicking on nav links
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
          navBackdrop.classList.remove("active");
        });
      });

      // Close menu when clicking on backdrop
      navBackdrop.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        navBackdrop.classList.remove("active");
      });

      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
          navBackdrop.classList.remove("active");
        }
      });
    }
  };

  // Footer toggle functionality
  const initFooterToggles = () => {
    const footerToggles = document.querySelectorAll(".footer-toggle");
    footerToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const targetId = toggle.getAttribute("data-target");
        const targetMenu = document.getElementById(targetId);

        if (targetMenu) {
          toggle.classList.toggle("active");
          targetMenu.classList.toggle("active");
          const toggleIcon = toggle.querySelector(".toggle-icon");
          if (toggleIcon) {
            toggleIcon.textContent = toggle.classList.contains("active")
              ? "−"
              : "+";
          }
        }
      });
    });
  };

  // Initialize all functionalities
  initGSAPAnimations();
  initSwipers();
  initSmoothScrolling();
  initNavbarScroll();
  initHamburgerMenu();
  initFooterToggles();
});


// gasp draw animation start
 gsap.registerPlugin(ScrollTrigger);

        document.addEventListener("DOMContentLoaded", () => {
const svgPath = document.querySelector(".absolute-pattern svg path");            const pathLength = svgPath.getTotalLength();

            // Set initial stroke dash array and offset
            svgPath.style.strokeDasharray = pathLength;
            svgPath.style.strokeDashoffset = pathLength;

            // GSAP animation timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".svg-container",
                    start: "top 80%", // Animation starts when 80% of the container is in view
                    toggleActions: "play none none reverse",
                    markers: false // Set to true for debugging
                },
                onComplete: () => {
                    // Infinite loop with delay after completion
                    gsap.fromTo(svgPath, 
                        { strokeDashoffset: 0 },
                        {
                            strokeDashoffset: pathLength,
                            duration: 4,
                            ease: "power1.inOut",
                            repeat: -1, // Infinite repeat
                            yoyo: true, // Reverse back
                            repeatDelay: 1 // Delay of 1 second between repeats
                        }
                    );
                }
            });

            // Animate the drawing effect
            tl.to(svgPath, {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power1.out"
            });

            // Refresh ScrollTrigger to ensure proper calculation
            ScrollTrigger.refresh();
        });
        // gasp draw animation end