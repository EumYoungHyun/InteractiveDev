(() => {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  tl.to(".text", { y: "0%", duration: 2, stagger: 1 });
  tl.to(".slider", { y: "-100%", duration: 1.7 });
})();
