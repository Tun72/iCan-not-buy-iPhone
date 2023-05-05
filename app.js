const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    scrub: true,
    start: "-40%",
    end: "40%",
  },
});

tlH.fromTo(
  ".highlight",
  {
    color: "rgba(255, 255, 255, 0.3",
  },
  {
    color: "rgba(255, 255, 255, 1",
    stagger: 1,
  }
);

const tlRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    scrub: true,
    start: "-10%",
    end: "40%",
  },
});

tlRemove.fromTo(
  ".highlight",
  {
    color: "rgba(255, 255, 255, 1",
  },
  {
    color: "rgba(255, 255, 255, 0.3",
    stagger: 1,
  }
);

const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    pin: true,
    start: "0%",
    end: "100%",
    pinSpacing: false,
  },
});

//   page 3

const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "-25%",
    end: "30%",
    scrub: true,
  },
});

tlSplit.fromTo(".large-phone", { x: "40%" }, { x: "20%" }, "<");
tlSplit.fromTo(".small-phone", { x: "-40%" }, { x: "-20%" }, "<");

tlSplit.fromTo(
  ".product-text-left",
  { x: 50, opacity: 0 },
  { x: 0, opacity: 1 },
  "<"
);

tlSplit.fromTo(
  ".product-text-right",
  { x: -50, opacity: 0 },
  { x: 0, opacity: 1 },
  "<"
);

const tlPinSplit = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "0",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

const swatches = document.querySelectorAll(".swatches img");
// const phones = document.querySelectorAll('.purchase-right img');
const slides = document.querySelectorAll(".phone-gallery-container");

const gallery = document.querySelector(".phone-gallery");

let currentColor = "blue";
let zIndex = 2;
swatches.forEach((swatch, index) => {
  const coordLeft = slides[index].getBoundingClientRect().left;

  swatch.addEventListener("click", (e) => {
    let name = e.target.getAttribute("swatch");
    if (name === currentColor) return;
    const closeup = document.querySelector(`.${name}`);
    gsap.set(closeup, { zIndex: zIndex, duration: 1 });

    currentColor = name;
    zIndex++;

    gsap.to(gallery, { x: -coordLeft, duration: 0.5, ease: "Power2.ease" });
  });
});

const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth-page",
    start: "0%",
    end: "130%",
    scrub: true,
    pin: true,
  },
});

tlVideo.fromTo(
  ".product-video",
  { currentTime: 0 },
  { currentTime: 3, duration: 1 }
);

tlVideo.fromTo(
  ".product-info-contaier h3",
  { opacity: 0 },
  { opacity: 1, duration: 0.5, stagger: 0.25 },
  "<"
);

// sixth-page

const tlparallex = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth-page",
    start: "-25%",
    end: "50%",
    scrub: true,
  },
});

tlparallex.fromTo(".photo-title", { y: 0 }, { y: -80 });

tlparallex.fromTo(".photo-subtitle", { y: 0 }, { y: -80 }, "<");

tlparallex.fromTo(".portrait", { y: 0 }, { y: -80 }, "<");



tlparallex.fromTo(".phone-video", { y: 0 }, { y: -250 }, "<");


