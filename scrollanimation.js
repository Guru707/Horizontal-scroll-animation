gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
console.log(window);
/* Main navigation */
//let panelsSection = document.querySelector("#panels"),
  panelsContainer = document.querySelector("#panels-container");

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
    snap: {
      snapTo: 1 / (panels.length - 1),
      inertia: false,
      duration: { min: 0.1, max: 0.1 },
    },
    end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
    onUpdate: (self) => {
      let activeIndex = Math.floor(self.progress * panels.length);
      document.querySelectorAll(".develop-method").forEach((anchor, index) => {
        if (index == activeIndex) {
          anchor.classList.add("active");
        } else {
          if (activeIndex >= panels.length) {
            document
              .querySelectorAll(".develop-method")
              [panels.length].classList.add("active");
          } else {
            anchor.classList.remove("active");
          }
        }
      });
    },
  },
});
document.querySelectorAll(".develop-method").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e);
    let targetElem = document.querySelector(e.target.getAttribute("showme")),
      y = targetElem;
    console.log(targetElem);

    if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start;
      let totalMovement = (panels.length - 1) * targetElem.offsetWidth;
      y = Math.round(
        tween.scrollTrigger.start +
          (targetElem.offsetLeft / totalMovement) * totalScroll
      );
    }
    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false,
      },
      duration: 1,
    });
  });
});
// console.log(tween);



