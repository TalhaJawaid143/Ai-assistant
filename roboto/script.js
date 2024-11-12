// Initialize SpeechRecognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US"; // Set the language correctly

// Define the speak function for text-to-speech
function speak(text) {
    const abc = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(abc);
}

// Define the handleCommands function
function handleCommands(command) {
    if (command.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://www.youtube.com/", "_blank");
    } else if (command.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://www.facebook.com/", "_blank");
    } else if (command.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://www.instagram.com/", "_blank");
    } else if (command.includes("open google")) {
        speak("Opening Google...");
        window.open("https://www.google.com/", "_blank");
    } else if (command.includes("open whatsapp")) {
        speak("Opening WhatsApp...");
        window.open("https://www.whatsapp.com/", "_blank");
    }  else if (command.includes("open Github")) {
        speak("Opening Github...");
        window.open("https://www.github.com/", "_blank");
    }  else {
        speak("Searching on Google...");
        window.open(`https://www.google.com/search?q=${command}`, "_blank");
    }
}

// Trigger recognition on button click
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    speak("Hello, how can I help you?");
    setTimeout(() => {
        btn.innerHTML = "Listening...";
        btn.style.backgroundColor = "green"; // Corrected the color syntax
        recognition.start();
    }, 2000); // Start recognition after 2 seconds to allow the greeting to finish
});

// Process recognition results
recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log("Recognized Command:", command); // Logging for debugging
    handleCommands(command);
};

// Reset the button state when recognition ends
recognition.onend = () => {
    btn.innerHTML = "Start Listening...";
    btn.style.backgroundColor = "green"; // Ensure the color is reset correctly
};

