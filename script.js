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

  // Removed duplicate declaration of currentIndex

function slide(direction) {
  const slider = document.getElementById("projectSlider");
  const cards = slider.querySelectorAll(".project-card");
  const cardWidth = cards[0].offsetWidth + 24; // include margin/gap
  const visibleCards = Math.floor(slider.parentElement.offsetWidth / cardWidth);

  const maxIndex = cards.length - visibleCards;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

  const slider = document.getElementById("projectSlider");
  let currentIndex = 0;

  function slide(direction) {
    const cards = slider.querySelectorAll(".project-card");
    const cardWidth = cards[0].offsetWidth + 24; // 24 = gap
    const visibleCards = Math.floor(slider.parentElement.offsetWidth / cardWidth);
    const maxIndex = cards.length - visibleCards;

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = 0; // loop kembali

    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  // Auto slide
  setInterval(() => {
    slide(1);
  }, 2000); // setiap 5 detik
