const testDetails = {
    basic: {
      title: "Timed Up and Go (TUG) Test",
      description: "Measures time to rise from chair, walk 3 meters, turn, walk back, and sit down.",
      activities: 5,
    },
    intermediate: {
      title: "6-Minute Walk Test (6MWT)",
      description: "Measures distance walked in 6 minutes on a flat surface.",
      activities: undefined, // Distance is not pre-defined
    },
    advanced: {
      title: "Functional Reach Test (FRT)",
      description: "Measures maximum forward reach distance while standing.",
      activities: 1,
    },
  };
  
  let currentLevel = null;
  let completedActivities = 0;
  let startTime = null;
  
  const testContainer = document.getElementById("test-container");
  const levelButtons = document.querySelectorAll(".level-buttons button");
  const testDetailsElement = document.getElementById("test-details");
  
  levelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentLevel = button.id.replace(/-/g, ""); // Extract level name (basic, intermediate, advanced)
      updateTestDetails();
      completedActivities = 0;
      startTime = null;
      document.getElementById("advanced-level").disabled = true; // Reset advanced button
    });
  });
  