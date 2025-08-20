document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      document.querySelectorAll(".nav-link-custom").forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    }
  });
});


window.addEventListener("scroll", function () {
  const sections = ["home", "about", "skills", "projects", "contact"];
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop;
      const height = element.offsetHeight;

      if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
        document.querySelectorAll(".nav-link-custom").forEach((link) => {
          link.classList.remove("active");
        });
        const activeLink = document.querySelector(
          `.nav-link-custom[href="#${section}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".skill-card, .project-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all 0.6s ease";
  observer.observe(card);
});
