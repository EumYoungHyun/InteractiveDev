(() => {
  const path = document.querySelector("#path");
  const floatingText = document.querySelector("#floating-text");
  const pathWidth = path.getBBox();

  console.log(pathWidth);
  window.addEventListener("scroll", () => {
    floatingText.setAttribute(
      "x",
      (pathWidth.width * 1.1 - 100) * (pageYOffset / window.innerHeight - 0.6)
    );
  });
})();
