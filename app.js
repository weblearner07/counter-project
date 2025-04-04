const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const beep = document.getElementById("beep");
const timestamp = document.getElementById("timestamp");
const updateColor = (count) => {
    value.style.color = count > 0 ? "green" : count < 0 ? "red" : "#222";
  };
  
  const playSound = () => {
    beep.currentTime = 0;
    beep.play();
  };
  
  const showTimestamp = () => {
    const now = new Date();
    timestamp.textContent = `Last updated: ${now.toLocaleString()}`;
  };
// Initialize count from localStorage or default to 0
let count = localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0;
value.textContent = count;
updateColor(count);
showTimestamp();

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const button = e.currentTarget;

    if (button.classList.contains("decrease")) {
      count--;
    } else if (button.classList.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    localStorage.setItem("count", count);
    value.textContent = count;
    updateColor(count);
    playSound();
    showTimestamp();
  });
});


