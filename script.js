// =============================
// Fade-in Animation on Scroll
// =============================

const sections = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        // Optional: stop observing once visible (better performance)
        observer.unobserve(entry.target);
      }

    });
  },
  {
    threshold: 0.15
  }
);

// Observe all fade sections
sections.forEach((section) => {
  observer.observe(section);
});


// =============================
// Smooth Scroll for Navbar
// =============================

document.querySelectorAll("nav a").forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});
