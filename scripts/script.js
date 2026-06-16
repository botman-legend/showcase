// scripts/script.js

// Add hover glow effect
document.querySelectorAll('.robot img').forEach(robot => {
  robot.addEventListener('mouseenter', () => {
    robot.style.filter = "drop-shadow(0 0 20px #00faff)";
  });
  robot.addEventListener('mouseleave', () => {
    robot.style.filter = "drop-shadow(0 0 5px #00faff)";
  });
});
const frames = [
  "assets/robots/loader/1.png",
  "assets/robots/loader/2.png",
  "assets/robots/loader/3.png",
  "assets/robots/loader/4.png"
];
let i = 0;
setInterval(() => {
  document.getElementById("robotLoader").src = frames[i];
  i = (i + 1) % frames.length;
}, 250);

