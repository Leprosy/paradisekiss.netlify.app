document.addEventListener("DOMContentLoaded", () => {
  let noListener = false;

  // event handlers
  document.addEventListener("scroll", (ev) => {
    const scr = window.scrollY;
    const isOaw = document.querySelector(".start").classList.contains("oaw");
    console.log("scroll", scr);

    if (noListener) return;

    if (scr > 290 && !isOaw) {
      noListener = true;
      document.querySelector(".start").classList.add("oaw");

      setTimeout(() => {
        if (window.scrollY < 10) {
          window.scroll(0, 10);
        }

        noListener = false;
      }, 500);
    }

    if (scr == 0 && isOaw) {
      document.querySelector(".start").classList.remove("oaw");
    }
  });
});
