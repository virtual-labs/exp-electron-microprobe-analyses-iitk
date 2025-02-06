// // Function to enable or disable buttons and sliders
// function toggleElementsState() {
//     const isEnabled = toggleSwitch.checked; // Check if the toggle switch is on
//     voltageSlider.disabled = !isEnabled;
//     brightnessSlider.disabled = !isEnabled;
//     workingslider.disabled = !isEnabled;
//     vaccumslider.disabled = !isEnabled;
//     on.disabled = !isEnabled;
//    mag.disabled = !isEnabled;
//    sampleDropdown.disabled = !isEnabled;
//     // Add more elements to disable/enable as needed
// }

// // Initialize the state based on the initial state of the toggle switch
// toggleElementsState();

// // Add an onchange event listener to the toggle switch
// toggleSwitch.addEventListener('change', () => {
//     toggleElementsState(); // Update the state when the toggle switch changes
// });
// Function to enable or disable buttons and sliders
function toggleElementsState() {
  const toggleSwitch = document.getElementById("toggleSwitch");
  const isEnabled = toggleSwitch ? toggleSwitch.checked : false;

  const voltageSlider = document.getElementById("voltageSlider");
  const brightnessSlider = document.getElementById("brightnessSlider");
  const workingslider = document.getElementById("workingslider");
  const vaccumslider = document.getElementById("vaccumslider");
  const on = document.getElementById("on");
  const mag = document.getElementById("mag");
  const sampleDropdown = document.getElementById("sampleDropdown");

  // Add more elements to disable/enable as needed

  voltageSlider.disabled = !isEnabled;
  brightnessSlider.disabled = !isEnabled;
  workingslider.disabled = !isEnabled;
  vaccumslider.disabled = !isEnabled;
  on.disabled = !isEnabled;
  mag.disabled = !isEnabled;
  sampleDropdown.disabled = !isEnabled;
}

// Initialize the state based on the initial state of the toggle switch
toggleElementsState();

// Add an onchange event listener to the toggle switch
document.getElementById("toggleSwitch").addEventListener('change', () => {
  toggleElementsState(); // Update the state when the toggle switch changes
});

function textToSpeech(text, lang) {
  // Check if the SpeechSynthesis API is available in the browser
  if ("speechSynthesis" in window) {
    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance();

    // Set the text to be spoken
    utterance.text = text;

    // Set the language
    if (lang) {
      utterance.lang = lang;
    }

    // Start the speech synthesis
    window.speechSynthesis.speak(utterance);
  } else {
    console.error("Speech synthesis is not supported in this browser.");
  }
}

let english = true;

function hindiVoice() {
  english = false;
  document.getElementById("dialogue-box-parent").style.display = 'none';
  if (english) {
    type("Welcome, Get started by switching on the machine. ");
    textToSpeech("Welcome, Get started by switching on the machine.");
  } else {
    type("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें|");
    textToSpeech("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें", "hi-IN");
  }
}

function englishVoice() {
  english = true;
  document.getElementById("dialogue-box-parent").style.display = 'none';
  if (english) {
    type("Welcome, Get started by switching on the machine. ");
    textToSpeech("Welcome, Get started by switching on the machine.");
  } else {
    type("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें|");
    textToSpeech("मशीन को स्टार्ट बटन द्वारा चालू करके प्रारंभ करें", "hi-IN");
  }
}

var text;
const typeSpeed = 60;
var timerId;
var typeTarget = document.getElementById("typer"),
  tWrapper = document.getElementById("toast-wrapper"),
  ti = 0,
  currentStep = 0,
  contrast = 0,
  brightness = 0,
  vac = 0,
  av = 0,
  on = false,
  dropped = false,
  imgs = [],
  mode = 1,
  removeButtonclicked = false,
  inp = 0;

function type(txt, cur = 0) {
  if (cur == txt.length) {
    timerId = -1;
    return;
  }
  if (cur === 0) {
    typeTarget.innerHTML = "";
    clearTimeout(timerId);
  }
  typeTarget.innerHTML += txt.charAt(cur);
  timerId = setTimeout(type, typeSpeed, txt, cur + 1);
}

document.addEventListener("DOMContentLoaded", function () {
  // Get references to HTML elements
  const startButton = document.getElementById("startButton");

  startButton.addEventListener("click", function () {
    statusText.textContent = "Status: XRF is started";
    if (english) {
      type("Machine started. Now please select sample");
      textToSpeech("Machine started. Now please select sample");
    } else {
      type("मशीन चालू हो गई. अब कृपया नमूना चुनें");
      textToSpeech("मशीन चालू हो गई. अब कृपया नमूना चुनें", "hi-IN");
    }
  });
});
