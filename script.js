const allowedNames = ["makdya", "MAKDYA", "Makdya"];

const promisesText = `
I promise to stand by you 💕
I promise to make you smile 😊
I promise to respect and support you 🌸
I promise to love you, always 💍
`;

function noClick() {
  const letter = document.getElementById("envelope");
  letter.style.visibility = "hidden";

  setTimeout(() => {
    letter.style.visibility = "visible";
  }, 3000);
}

function yesClick() {
  document.getElementById("envelope").classList.add("open");
  setTimeout(() => {
    document.getElementById("envelope").classList.add("hidden");
    document.getElementById("lockScreen").classList.remove("hidden");
  }, 1000);
}

function unlock() {
  const input = document.getElementById("secretName").value.trim();
  const error = document.getElementById("error");

  if (allowedNames.includes(input)) {
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("finalLetter").classList.remove("hidden");
    typePromises();
  } else {
    error.textContent = "Wrong name 💔 Try again";
  }
}

function typePromises() {
  let i = 0;
  const speed = 50;
  const target = document.getElementById("typingText");

  function typing() {
    if (i < promisesText.length) {
      target.innerHTML += promisesText.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}
