const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const mainContent = document.getElementById("mainContent");
const gifContainer = document.getElementById("gifContainer");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  mainContent.style.display = "none";
  gifContainer.style.display = "block";
});