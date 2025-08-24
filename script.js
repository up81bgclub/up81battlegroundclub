const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

// Mobile menu toggle
burger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Scroll reveal function
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal, section");
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
// Call once so elements already visible appear instantly
revealOnScroll();

    // Countdown Timer
    const countDownDate = new Date("Sep 12, 2025 18:00:00").getTime();

    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Tournament Started!";
        document.querySelector(".upcoming").classList.remove("upcoming");
        document.querySelector(".soon").classList.remove("soon");
        document.querySelector(".tournament-section").innerHTML += '<div class="tag live">LIVE</div>';
      }
    }, 1000);
