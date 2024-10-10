// Select all the piano keys
const pianoKeys = document.querySelectorAll(".piano-keys .key");

// Function to play the audio based on the key pressed
const playTune = (key) => {
    let audio; // Declare audio variable

    // Determine the audio file based on the key
    switch (key) {
        case 's':
            audio = new Audio('sounds/red.m4a');  // Replace with your sound file
            break;
        case 'd':
            audio = new Audio('sounds/orange.m4a');  // Replace with your sound file
            break;
        case 'f':
            audio = new Audio('sounds/yellow.m4a');  // Replace with your sound file
            break;
        case 'j':
            audio = new Audio('sounds/green.m4a');  // Replace with your sound file
            break;
        case 'k':
            audio = new Audio('sounds/blue.m4a');  // Replace with your sound file
            break;
        case 'l':
            audio = new Audio('sounds/purple.m4a');  // Replace with your sound file
            break;
        default:
            console.error('No sound file found for this key.');
    }

    if (audio) {
        audio.play(); // Play the sound if audio object is created

        const clickedKey = document.querySelector(`[data-key="${key}"]`);
        if (clickedKey) {
            clickedKey.classList.add("active"); // Corrected classList to classList
            // Remove active class after a short delay
            setTimeout(() => {
                clickedKey.classList.remove("active");
            }, 200); // Change duration as needed
        }
    }
}

// Add event listeners to each piano key for mouse clicks
pianoKeys.forEach(key => {
    key.addEventListener("click", () => {
        playTune(key.querySelector("span").textContent); // Use the text content of the span to identify the key
    });
});

// Add event listener for keyboard presses
document.addEventListener("keydown", (event) => {
    const key = event.key; // Get the pressed key
    const validKeys = ['s', 'd', 'f', 'j', 'k', 'l']; // Define valid keys

    if (validKeys.includes(key)) {
        playTune(key); // Play the tune for the pressed key

        
    }
});
