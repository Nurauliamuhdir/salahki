document.addEventListener("DOMContentLoaded", function () {
  const animatedText = document.getElementById("joinUsText");
  const textContent = "Join Us";

  function typeText(index) {
      animatedText.textContent = textContent.substring(0, index);
      if (index < textContent.length) {
          setTimeout(function () {
              typeText(index + 1);
          }, 150); // Adjust the typing speed (150ms) as needed
      }
  }

  typeText(0);
});
