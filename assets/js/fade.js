// Fade out a title on scroll (progressive)

(function () {
  function clamp(v, min, max) {
    return Math.min(Math.max(v, min), max);
  }

  function init() {
    const title = document.getElementById("fadetitle");
    if (!title) return;

    // Adjust these values to control when the title fades
    const start = 0;    // scrollY (px) where fading starts
    const end = 260;    // scrollY (px) where title is fully transparent

    function onScroll() {
      const y = window.scrollY || window.pageYOffset || 0;
      const t = clamp((y - start) / (end - start), 0, 1);
      title.style.opacity = String(1 - t);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial opacity on load
  }

  // Ensure DOM is ready even if defer is forgotten
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();