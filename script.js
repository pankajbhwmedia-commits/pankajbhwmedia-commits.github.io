window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    let position = card.getBoundingClientRect().top;
    let screen = window.innerHeight / 1.3;
    if (position < screen) {
      card.style.transform = "scale(1)";
      card.style.opacity = "1";
    }
  });
});
