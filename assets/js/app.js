window.addEventListener('DOMContentLoaded', () => {
  VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color1: 0xffffff,
  color2: 0x269ce3,
    birdSize: 1.30,
    wingSpan: 20.00,
    speedLimit: 3.00,
    separation: 100.00,
    backgroundAlpha: 0.0
  })
});

setTimeout(() => {
  const main = document.querySelector('main');
  main.style.opacity = 1;
  main.style.filter = 'blur(0)';
}, 1000)