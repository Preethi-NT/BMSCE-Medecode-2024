// Global variables to store start time, end time, duration, and interval IDs for each test
let tugStartTime, tugEndTime, tugDuration, tugIntervalId;
let tenMwtStartTime, tenMwtEndTime, tenMwtDuration, tenMwtIntervalId;
let bbsStartTime, bbsEndTime, bbsDuration, bbsIntervalId;

// Global variables to store start time, end time, and duration

// Global variables to store start time, end time, duration, and interval ID

// Function to start the TUG test
function startTUG() {
    tugStartTime = Date.now();
    tugIntervalId = setInterval(updateTugTimer, 1000); // Use a separate update function for TUG
}

// Function to stop the TUG test
function stopTUG() {
    tugEndTime = Date.now();
    let elapsedTimeInSeconds = Math.floor((tugEndTime - tugStartTime) / 1000);
    tugDuration = elapsedTimeInSeconds;
    clearInterval(tugIntervalId);

    // Check conditions
    if (tugDuration <= 10 && document.getElementById('tugPainLevel').value <= 5) {
        // Unlock 10MWT and BBS tests
        document.getElementById('walkTest').classList.remove('locked');
        document.getElementById('bergTest').classList.remove('locked');
    } else {
        // Keep 10MWT and BBS tests locked
        document.getElementById('walkTest').classList.add('locked');
        document.getElementById('bergTest').classList.add('locked');
    }
}

// Function to update the TUG timer
function updateTugTimer() {
    let elapsedTime = Math.floor((Date.now() - tugStartTime) / 1000);
    let tugTimer = document.getElementById('tugTimer');
    tugTimer.textContent = `Timer: ${elapsedTime}s`;
}


// Function to start the 10MWT
function startTenMwt() {
    tenMwtStartTime = Date.now();
    tenMwtIntervalId = setInterval(updateTenMwtTimer, 1000); // Use a separate update function for 10MWT
}

function stopTenMwt() {
    tenMwtEndTime = Date.now();
    let elapsedTimeInSeconds = Math.floor((tenMwtEndTime - tenMwtStartTime) / 1000);
    tenMwtDuration = elapsedTimeInSeconds;
    clearInterval(tenMwtIntervalId);
    // Update UI or perform other actions as needed
}

// Function to update 10MWT timer
function updateTenMwtTimer() {
    let elapsedTime = Math.floor((Date.now() - tenMwtStartTime) / 1000);
    let tenMwtTimer = document.getElementById('walkTimer');
    tenMwtTimer.textContent = `Timer: ${elapsedTime}s`;
} 

// Function to start the BBS
function startBbs() {
    bbsStartTime = Date.now();
    bbsIntervalId = setInterval(updateBbsTimer, 1000); // Use a separate update function for 10MWT
}
function stopBbs() {
    bbsEndTime = Date.now();
    let elapsedTimeInSeconds = Math.floor((bbsEndTime - bbsStartTime) / 1000);
    bbsDuration = elapsedTimeInSeconds;
    clearInterval(bbsIntervalId);
    // Update UI or perform other actions as needed

}

// Function to update BBS timer
function updateBbsTimer() {
    let elapsedTime = Math.floor((Date.now() - bbsStartTime) / 1000); // Corrected to use bbsStartTime
    let bbsTimer = document.getElementById('bergTimer');
    bbsTimer.textContent = `Timer: ${elapsedTime}s`;
}