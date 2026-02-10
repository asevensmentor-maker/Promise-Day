const allowedNames = ["makdya", "Makdya", "MAKDYA"];

const promisesText = `
“I promise effort.”
“I promise honesty.”
“I promise patience.”
“I promise you.”

I promise to be your safe place —
on your best days ☀️
and on your worst ones 🌙💖
`;

function noClick() {
  document.getElementById("envelope").classList.add("floating");
  document.getElementById("warning").classList.remove("hidden");
}

function yesClick() {
  const env = document.getElementById("envelope");
  env.classList.remove("floating");
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
    error.textContent = "";
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("celebration").classList.remove("hidden");

    setTimeout(() => {
      document.getElementById("celebration").classList.add("hidden");
      document.getElementById("finalLetter").classList.remove("hidden");
      typeText();
    }, 2000);
  } else {
    error.textContent = "Try again 💔";
  }
}

function typeText() {
  let i = 0;
  const target = document.getElementById("typingText");
  target.innerHTML = "";

  function type() {
    if (i < promisesText.length) {
      target.innerHTML += promisesText.charAt(i);
      i++;
      setTimeout(type, 45);
    }
  }
  type();
}
