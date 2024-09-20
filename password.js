document.addEventListener("DOMContentLoaded", function () {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;':,./&#60;&#62;?";

  let passwordEl1 = document.querySelector("#password-1");
  let passwordEl2 = document.querySelector("#password-2");
  let symbolCheck = document.querySelector("#symbols");
  let numberCheck = document.querySelector("#numbers");
  let lengthSlider = document.querySelector("#length");

  // Function to update the displayed slider value
  function updateSliderValue(value) {
    document.getElementById("slider-value").textContent = value;
  }

  // Update slider value when the slider is moved
  lengthSlider.addEventListener("input", function () {
    updateSliderValue(lengthSlider.value);
  });

  // Initialize the slider value on page load
  updateSliderValue(lengthSlider.value);

  // Generating random password
  function randomPassword() {
    passwordEl1.textContent = "";
    passwordEl2.textContent = "";

    let length = lengthSlider.value;
    let characterSet = letters;

    if (numberCheck.checked) {
      characterSet += numbers;
    }

    if (symbolCheck.checked) {
      characterSet += symbols;
    }

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characterSet.length);
      passwordEl1.textContent += characterSet[randomIndex];
    }

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characterSet.length);
      passwordEl2.textContent += characterSet[randomIndex];
    }
  }

  // Add event listener to the button
  document
    .querySelector("#generate-password")
    .addEventListener("click", randomPassword);

  // Copy to clipboard function
  function copyToClipboard(password) {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        alert("Password copied to clipboard!"); // Optional: Display a message
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }

  // Add event listeners to both passwords for copying
  passwordEl1.addEventListener("click", function () {
    copyToClipboard(passwordEl1.textContent);
  });

  passwordEl2.addEventListener("click", function () {
    copyToClipboard(passwordEl2.textContent);
  });
});
