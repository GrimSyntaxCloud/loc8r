(() => {
  const button = document.querySelector(".motion-toggle");
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  let paused = media.matches;
  const update = () => {
    document.documentElement.classList.toggle("motion-paused", paused);
    button?.setAttribute("aria-pressed", String(paused));
    if (button) button.textContent = paused ? "Motion paused" : "Pause motion";
  };
  button?.addEventListener("click", () => {
    paused = !paused;
    update();
  });
  media.addEventListener("change", (event) => {
    paused = event.matches;
    update();
  });
  document
    .querySelector(".sample-form")
    ?.addEventListener("submit", (event) => event.preventDefault());
  update();
})();
