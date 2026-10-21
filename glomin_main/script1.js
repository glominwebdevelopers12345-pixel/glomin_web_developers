const words = [
  "Websites.",
  "Apps.",
  "Applications.",
  "E-Commerce Apps.",
  "Food Delivery Apps.",
  "Shopping Apps.",
  "Web Developments.",
  "Softwares."
];

const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const word = words[wordIndex];

  if (deleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = word.substring(0, charIndex);

  let speed = deleting ? 50 : 100;

  if (!deleting && charIndex === word.length) {
    deleting = true;
    speed = 1500;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
