// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // Grab elements from HTML
  const buttons = document.querySelectorAll("button");
  const title = document.querySelector("h1");
  const cards = document.querySelectorAll(".card");

  // Simple state
  let clickCount = 0;

  // Button interactions
  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      clickCount++;

      console.log("Clicked:", clickCount);

      // Update title dynamically
      if (title) {
        title.textContent = `Clicks: ${clickCount}`;
      }

      // Slight visual effect on cards
      cards.forEach((card) => {
        card.style.transform = "scale(1.02)";
        setTimeout(() => {
          card.style.transform = "scale(1)";
        }, 150);
      });
    });
  });

});