// Global variables to store timers and intervals
let tugStartTime, walkStartTime, bbsStartTime;
let tugInterval, walkInterval, bbsInterval;

// Function to start the TUG test
function startTUG() {
    // Reset previous intervals if any
    clearInterval(tugInterval);

    // Initialize variables
    let tugTimer = document.getElementById('tugTimer');
    let tugPainLevel = document.getElementById('tugPainLevel').value;
    let tugGraph = document.getElementById('tugGraph');

    let timeElapsed = 0; // in seconds

    tugStartTime = Date.now();
    tugInterval = setInterval(function() {
        // Calculate elapsed time
        timeElapsed = Math.floor((Date.now() - tugStartTime) / 1000);
        tugTimer.textContent = Timer: ${timeElapsed}s;

        // Update graphical representation (example: progress bar)
        tugGraph.style.width = ${(timeElapsed / 10) * 100}%; // Example: Update width based on time elapsed

        // You can add more sophisticated graphical representations as needed

        // Example: Check if test duration exceeds a certain time and stop if needed
        if (timeElapsed >= 10) {
            clearInterval(tugInterval);
            alert('TUG Test completed!');
            // Additional actions upon completion
        }
    }, 1000); // Update timer every second
}

// Function to start the 10MWT
function startWalk() {
    // Reset previous intervals if any
    clearInterval(walkInterval);

    // Initialize variables
    let walkTimer = document.getElementById('walkTimer');
    let walkPainLevel = document.getElementById('walkPainLevel').value;
    let walkGraph = document.getElementById('walkGraph');

    let timeElapsed = 0; // in seconds

    walkStartTime = Date.now();
    walkInterval = setInterval(function() {
        // Calculate elapsed time
        timeElapsed = Math.floor((Date.now() - walkStartTime) / 1000);
        walkTimer.textContent = Timer: ${timeElapsed}s;

        // Update graphical representation (example: progress bar)
        walkGraph.style.width = ${(timeElapsed / 20) * 100}%; // Example: Update width based on time elapsed

        // You can add more sophisticated graphical representations as needed

        // Example: Check if test duration exceeds a certain time and stop if needed
        if (timeElapsed >= 20) {
            clearInterval(walkInterval);
            alert('10MWT completed!');
            // Additional actions upon completion
        }
    }, 1000); // Update timer every second
}

// Function to start the BBS
function startBBS() {
    // Reset previous intervals if any
    clearInterval(bbsInterval);

    // Initialize variables
    let bbsTimer = document.getElementById('bergTimer');
    let bbsPainLevel = document.getElementById('bergPainLevel').value;
    let bbsGraph = document.getElementById('bergGraph');

    let timeElapsed = 0; // in seconds

    bbsStartTime = Date.now();
    bbsInterval = setInterval(function() {
        // Calculate elapsed time
        timeElapsed = Math.floor((Date.now() - bbsStartTime) / 1000);
        bbsTimer.textContent = Timer: ${timeElapsed}s;

        // Update graphical representation (example: progress bar)
        bbsGraph.style.width = ${(timeElapsed / 60) * 100}; // Example: Update width based on time elapsed

        // You can add more sophisticated graphical representations as needed

        // Example: Check if test duration exceeds a certain time and stop if needed
        if (timeElapsed >= 60) {
            clearInterval(bbsInterval);
            alert('BBS completed!');
            // Additional actions upon completion
        }
    }, 1000); // Update timer every second
}