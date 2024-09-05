document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const instruction = document.getElementById("instruction");
    const timer = document.getElementById("timer");
    const painInput = document.getElementById("painInput");
    let startTime, endTime, totalSteps;

    startButton.addEventListener("click", function() {
        instruction.textContent = "Rise from the chair and start walking.";
        startButton.style.display = "none";
        startTime = Date.now();
        totalSteps = 0;
        walk();
    });

    function walk() {
        // Simulate walking for 3 seconds (3 meters)
        setTimeout(function() {
            // Check if the participant experienced pain during walking
            const painFactor = parseFloat(painInput.value);
            if (painFactor >= 0 && painFactor <= 10) {
                instruction.textContent = "Turn around and walk back to the chair.";
                totalSteps += calculateSteps();
                if (totalSteps === 0) {
                    instruction.textContent += " No steps recorded. Please repeat.";
                } else {
                    timer.textContent = `Total Steps taken: ${totalSteps}`;
                    endTest();
                }
            } else {
                instruction.textContent = "Participant experienced pain. Test aborted.";
                endTest();
            }
        }, 3000); // 3 seconds to walk 3 meters
    }

    function calculateSteps() {
        // Here you can implement more sophisticated step counting algorithms
        // For simplicity, let's say 1 step per second
        return 1;
    }

    function endTest() {
        // Show start button again for retesting
        startButton.style.display = "block";
    }
});
