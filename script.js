document.getElementById("speak-btn").addEventListener("click", () => {
  const text = document.getElementById("tts-text").value;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
});

document.getElementById("toggle-contrast").addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});

document.getElementById("increase-font").addEventListener("click", () => {
  document.body.style.fontSize = "larger";
});

document.getElementById("decrease-font").addEventListener("click", () => {
  document.body.style.fontSize = "smaller";
});

document.getElementById("translate-btn").addEventListener("click", async () => {
  const text = document.getElementById("translate-text").value;
  const response = await fetch(https://api.mymemory.translated.net/get?q=${text}&langpair=en|hi);
  const data = await response.json();
  document.getElementById("translation-output").textContent = data.responseData.translatedText;
});

document.getElementById("toggle-reader").addEventListener("click", () => {
  alert("Screen Reader Mode Activated!");
});

document.getElementById("magnifier").addEventListener("mouseover", (e) => {
  e.target.style.transform = "scale(1.5)";
});

document.getElementById("magnifier").addEventListener("mouseout", (e) => {
  e.target.style.transform = "scale(1)";
});

document.getElementById("start-speech").addEventListener("click", () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();
  recognition.onresult = (event) => {
    document.getElementById("speech-output").textContent = event.results[0][0].transcript;
  };
});

// Virtual Keyboard
const keyboardContainer = document.getElementById("virtual-keyboard");
const keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
keys.forEach((key) => {
  const button = document.createElement("button");
  button.textContent = key;
  button.addEventListener("click", () => {
    alert(Key ${key} pressed!);
  });
  keyboardContainer.appendChild(button);
});

document.getElementById("toggle-cb-sim").addEventListener("click", () => {
  document.body.style.filter = "grayscale(100%)";
});