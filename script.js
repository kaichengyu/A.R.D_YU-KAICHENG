document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("header a[data-target]");
  const sections = document.querySelectorAll(".content-section");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-target");

      
      sections.forEach(section => {
        section.classList.remove("active");
      });

      
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });
});
window.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;
  if (hash) {
    const targetSection = document.querySelector(hash);
    if (targetSection) {
      document.querySelectorAll(".content-section").forEach(section => {
        section.classList.remove("active");
      });
      targetSection.classList.add("active");
    }
  }
});
