const allowedNames = ["makdya", "Makdya", "MAKDYA"];

const promisesText = `
“I promise effort.”
“I promise honesty.”
“I promise patience."
"I promise to stand by you 💕"
"I promise to make you smile 😊"
"I promise to respect and support you 🌸"
"I promise to love you 💍"
"I promise to be your safe place on your best days ☀️
and on your worst ones 🌙💖"
`;

function noClick() {
  const env = document.getElementById("envelope");
  env.style.transform = "translateX(-120%) rotate(-8deg)";

  setTimeout(() => {
    env.style.transform = "translateX(0) rotate(0)";
    alert("Hmm… NO is not available today 😌💖");
  }, 900);
}

function yesClick() {
  const env = document.getElementById("envelope");
  env.classList.add("open");

  setTimeout(() => {
    env.classList.add("hidden");
    document.getElementById("lockScreen").classList.remove("hidden");
  }, 1000);
}

function unlock() {
  const input = document.getElementById("secretName").value.trim();
  const error = document.getElementById("error");

  if (allowedNames.includes(input)) {
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("finalLetter").classList.remove("hidden");
    typeText();
  } else {
    error.textContent = "That’s not it 😔 Try again";
  }
}

function typeText() {
  let i = 0;
  const speed = 45;
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
