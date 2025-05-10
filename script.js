document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });
  
    document.querySelectorAll("section").forEach(section => {
      section.classList.add("hidden");
      observer.observe(section);
    });
  });