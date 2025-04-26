const config = {
  threshold: [0, 0.01, 0.25]
};

function handleSrcoll(elements) {
  elements.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting && entry.intersectionRatio >= 0.001) {
      console.log(entry);
      el.classList.add("opacity-100", "translate-x-0");
      el.classList.remove("opacity-0", "-translate-x-full", "translate-x-full");
      
      Array.from(nav.children).forEach(e => {
        console.log(e.getAttribute('data-nav'));
      })
      if (el.id === 'about') {
        
      } else if (el.id === 'contact') {
        
      } else {
        
      }
    } else {
      el.classList.remove("opacity-100", "translate-x-0");
      if (el.classList.contains("animated-in-left")) {
        el.classList.add("opacity-0", "-translate-x-full");
      } else {
        el.classList.add("opacity-0", "translate-x-full");
      }
    }
  });
}

const scrollObserver = new IntersectionObserver(handleSrcoll, config);
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animated");
  elements.forEach((element) => {
    scrollObserver.observe(element);
  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('message').getAttribute('data-nav')
      const nav = document.getElementById("nav");
      const parent = this.parentElement;
      Array.from(nav?.children).forEach(el => el.classList.remove("current-location"))        
      parent.classList.add("current-location");
      const targetId = this.getAttribute('href')?.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

