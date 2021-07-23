(() => {
    const background = document.querySelector(".background");

    window.addEventListener("load", () => {
        background.style.setProperty(
            "--imageUrl",
            `url(${base64Data["image"]})`
        );
    });
})();
