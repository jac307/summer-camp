document.addEventListener("DOMContentLoaded", () => {
  const speech = window.speechSynthesis;

  const content = document.getElementById("page-content");
  const toggleButton = document.getElementById("speech-toggle");
  const stopButton = document.getElementById("speech-stop");

  let utterance = null;

  if (!("speechSynthesis" in window)) {
    toggleButton.textContent = "Text-to-speech unavailable";
    toggleButton.disabled = true;
    stopButton.disabled = true;
    return;
  }

  function resetControls() {
    toggleButton.textContent = "🔊 Read aloud";
    toggleButton.setAttribute("aria-label", "Read this page aloud");
    toggleButton.setAttribute("aria-pressed", "false");
    stopButton.disabled = true;
  }

  function beginReading() {
    const pageText = content.innerText.trim();

    if (!pageText) {
      return;
    }

    speech.cancel();

    utterance = new SpeechSynthesisUtterance(pageText);

    // Canadian English
    utterance.lang = "en-CA";

    // Slightly slower speed for instructional content
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      toggleButton.textContent = "Pause";
      toggleButton.setAttribute("aria-label", "Pause reading");
      toggleButton.setAttribute("aria-pressed", "true");
      stopButton.disabled = false;
    };

    utterance.onend = resetControls;
    utterance.onerror = resetControls;

    speech.speak(utterance);
  }

  toggleButton.addEventListener("click", () => {
    if (speech.speaking && !speech.paused) {
      speech.pause();

      toggleButton.textContent = "Resume";
      toggleButton.setAttribute("aria-label", "Resume reading");
      toggleButton.setAttribute("aria-pressed", "false");

      return;
    }

    if (speech.paused) {
      speech.resume();

      toggleButton.textContent = "Pause";
      toggleButton.setAttribute("aria-label", "Pause reading");
      toggleButton.setAttribute("aria-pressed", "true");

      return;
    }

    beginReading();
  });

  stopButton.addEventListener("click", () => {
    speech.cancel();
    resetControls();
  });

  window.addEventListener("beforeunload", () => {
    speech.cancel();
  });

  resetControls();
});