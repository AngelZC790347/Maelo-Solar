const config = {};

function handleSrcoll(elements) {
  elements.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting) {
      console.log(entry);
      el.classList.add("opacity-100", "translate-x-0");
      el.classList.remove("opacity-0", "-translate-x-full", "translate-x-full");
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
});
