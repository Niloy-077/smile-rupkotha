function openBox() {
  const lid = document.getElementById("lid");
  const content = document.getElementById("content");

  // Animate the lid opening
  lid.style.transform = "rotateX(-150deg)";

  // Display content after the lid is open
  setTimeout(() => {
    content.style.display = "block";
  }, 1000);
}