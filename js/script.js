/* ========== SWIPER INITIALIZATION START ========== */
document.addEventListener("DOMContentLoaded", () => {
  // Declare Swiper variable before using it
  const Swiper = window.Swiper

  const servicesSwiper = new Swiper(".services-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
  })

  const testimonialsSwiper = new Swiper(".testimonials-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".testimonials-nav .swiper-button-next",
      prevEl: ".testimonials-nav .swiper-button-prev",
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
  })
  /* ========== SWIPER INITIALIZATION END ========== */

  /* ========== SMOOTH SCROLLING START ========== */
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
  /* ========== SMOOTH SCROLLING END ========== */

  /* ========== NAVBAR SCROLL EFFECT START ========== */
  // Add scroll effect to navbar
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".nav-container")
    if (navbar) {
      if (window.scrollY > 100) {
        navbar.style.background = "rgba(255, 255, 255, 0.98)"
      } else {
        navbar.style.background = "rgba(255, 255, 255, 0.95)"
      }
    }
  })
  /* ========== NAVBAR SCROLL EFFECT END ========== */

  /* ========== HAMBURGER MENU TOGGLE START ========== */
  // Hamburger menu toggle with backdrop
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")
  const navBackdrop = document.getElementById("nav-backdrop")

  if (hamburger && navMenu && navBackdrop) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
      navBackdrop.classList.toggle("active")
    })

    // Close menu when clicking on nav links
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
        navBackdrop.classList.remove("active")
      })
    })

    navBackdrop.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
      navBackdrop.classList.remove("active")
    })

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
        navBackdrop.classList.remove("active")
      }
    })
  }
  /* ========== HAMBURGER MENU TOGGLE END ========== */

  /* ========== FOOTER TOGGLE FUNCTIONALITY START ========== */
  const footerToggles = document.querySelectorAll(".footer-toggle")

  footerToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const targetId = toggle.getAttribute("data-target")
      const targetMenu = document.getElementById(targetId)

      if (targetMenu) {
        // Toggle active class on button
        toggle.classList.toggle("active")

        // Toggle active class on menu
        targetMenu.classList.toggle("active")

        // Update toggle icon
        const toggleIcon = toggle.querySelector(".toggle-icon")
        if (toggleIcon) {
          if (toggle.classList.contains("active")) {
            toggleIcon.textContent = "−"
          } else {
            toggleIcon.textContent = "+"
          }
        }
      }
    })
  })
  /* ========== FOOTER TOGGLE FUNCTIONALITY END ========== */

  /* ========== SWIPER NAVIGATION STYLES START ========== */
  const swiperNav = document.querySelector(".swiper-nav")
  const swiperButtons = document.querySelectorAll(".swiper-button-prev, .swiper-button-next")

  if (swiperNav && swiperButtons) {
    swiperNav.style.display = "flex"
    swiperNav.style.justifyContent = "center"
    swiperNav.style.gap = "20px"
    swiperNav.style.marginTop = "40px"

    swiperButtons.forEach((button) => {
      button.style.width = "50px"
      button.style.height = "50px"
      button.style.border = "2px solid #719327"
      button.style.borderRadius = "50%"
      button.style.background = "#ffffff"
      button.style.cursor = "pointer"
      button.style.display = "flex"
      button.style.alignItems = "center"
      button.style.justifyContent = "center"
      button.style.transition = "all 0.3s ease"
      button.style.position = "relative"
      button.style.margin = "0"
    })

    document.querySelectorAll(".swiper-button-prev").forEach((button) => {
      button.addEventListener("mouseover", () => {
        button.style.background = "#719327"
      })
      button.addEventListener("mouseout", () => {
        button.style.background = "#ffffff"
      })
    })

    document.querySelectorAll(".swiper-button-next").forEach((button) => {
      button.addEventListener("mouseover", () => {
        button.style.background = "#719327"
      })
      button.addEventListener("mouseout", () => {
        button.style.background = "#ffffff"
      })
    })

    document.querySelectorAll(".swiper-button-prev::after").forEach((pseudo) => {
      pseudo.style.fontSize = "18px"
      pseudo.style.fontWeight = "bold"
      pseudo.style.color = "#719327"
    })

    document.querySelectorAll(".swiper-button-next::after").forEach((pseudo) => {
      pseudo.style.fontSize = "18px"
      pseudo.style.fontWeight = "bold"
      pseudo.style.color = "#719327"
    })

    document.querySelectorAll(".swiper-button-prev").forEach((button) => {
      button.addEventListener("mouseover", () => {
        button.style.color = "#ffffff"
      })
      button.addEventListener("mouseout", () => {
        button.style.color = "#719327"
      })
    })

    document.querySelectorAll(".swiper-button-next").forEach((button) => {
      button.addEventListener("mouseover", () => {
        button.style.color = "#ffffff"
      })
      button.addEventListener("mouseout", () => {
        button.style.color = "#719327"
      })
    })
  }
  /* ========== SWIPER NAVIGATION STYLES END ========== */
})
