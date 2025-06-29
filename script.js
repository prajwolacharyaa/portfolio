// Smooth scroll for nav links
// Smooth scrolling for nav links
document.querySelectorAll("nav .nav-icons a[href^='#']").forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 60,
        behavior: "smooth",
      });
    }
  });
});

// Animate skill bars and fade-in elements on scroll
function animateOnScroll() {
  const skillBars = document.querySelectorAll(".skill-bar");
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.width = bar.dataset.level + "%";
    }
  });

  // Fade in skill cards
  document.querySelectorAll(".skill-card").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add("visible");
    }
  });

  // Fade in certificate cards
  document.querySelectorAll(".certificate-card").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add("visible");
    }
  });

  // Fade in CV sections
  document.querySelectorAll(".CV").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add("visible");
    }
  });

  // Fade in about section
  const aboutSection = document.querySelector(".about-section");
  if (aboutSection) {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      aboutSection.classList.add("visible");
    }
  }

  // Fade in contact section
  const contactSection = document.querySelector(".contact-section");
  if (contactSection) {
    const rect = contactSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      contactSection.classList.add("visible");
    }
  }
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// Contact form confirmation toast
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

if (form && toast) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
    form.reset();
  });
}

// Dark/Light mode toggle
const themeToggle = document.getElementById("theme-toggle");

function setTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }
  localStorage.setItem("theme", theme);
}

// Load saved theme or default to dark
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

// Toggle theme on button click
if (themeToggle) {
  themeToggle.addEventListener("click", (e) => {
    e.preventDefault();
    const currentTheme = document.body.classList.contains("light-mode")
      ? "light"
      : "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });
}
