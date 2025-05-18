const text = "Hi, I'm Dhruvi Mehta!";
let index = 0;

function type() {
  const typingEl = document.getElementById("typing");
  if (index < text.length) {
    typingEl.textContent += text.charAt(index);
    index++;
    setTimeout(type, 70);
  }
}

document.addEventListener("DOMContentLoaded", type);
  