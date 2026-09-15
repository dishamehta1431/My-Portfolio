// Navbar active link effect
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Typing effect
const text = ["Fullstack Developer", "Frontend Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".font-1").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 120);
  }
})();

// Contact button alert
const contactBtn = document.querySelector(".btn-msg");

contactBtn.addEventListener("click", () => {
  alert("Message Sent Successfully!");
});

// Mouse click sparkle effect
document.addEventListener("click", function (e) {
  const circle = document.createElement("span");

  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";

  circle.classList.add("click-effect");

  document.body.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 600);
});