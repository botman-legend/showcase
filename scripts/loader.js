const frames = [
  "assets/robots/loader/1.png",
  "assets/robots/loader/2.png",
  "assets/robots/loader/3.png",
  "assets/robots/loader/4.png"
];

let i = 0;
const loaderImg = document.getElementById("robotLoader");
const textSequence = document.getElementById("textSequence");

const interval = setInterval(() => {
  loaderImg.src = frames[i];
  i++;

  if (i >= frames.length) {
    clearInterval(interval);

    // Sequence: line → zigzag → glow welcome
    textSequence.className = "line";
    setTimeout(() => {
      textSequence.className = "zigzag";
    }, 1000);
    setTimeout(() => {
      textSequence.className = "glow";
    }, 2000);

    // Fade out loader after text finishes
    setTimeout(() => {
      const loader = document.getElementById("loader");
      loader.style.transition = "opacity 1s ease";
      loader.style.opacity = 0;

      setTimeout(() => {
        loader.style.display = "none";
        document.getElementById("mainContent").classList.remove("hidden");
        document.getElementById("robotsSection").classList.remove("hidden");
      }, 1000);
    }, 4000);
  }
}, 600);
// After loader fades out
// After loader fades out
setTimeout(() => {
  const loader = document.getElementById("loader");
  loader.style.transition = "opacity 1s ease";
  loader.style.opacity = 0;

  setTimeout(() => {
    loader.style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");

    // Show vision windows one by one
    const visionSection = document.getElementById("visionSection");
    visionSection.classList.remove("hidden");
    const windows = visionSection.querySelectorAll(".window");
    windows.forEach((win, idx) => {
      setTimeout(() => {
        win.classList.add("show");
      }, idx * 1000); // stagger each window
    });
  }, 1000);
}, 4000);
