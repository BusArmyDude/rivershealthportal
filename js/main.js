// Function to toggle the active class in the navigation bar when clicked
document.querySelectorAll("nav ul li a").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll("nav ul li a").forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    });
});

// Handling the form for symptoms tracking (checkboxes, text inputs, etc.)
const saveSymptomsButton = document.getElementById("save-symptoms");

if (saveSymptomsButton) {
    saveSymptomsButton.addEventListener("click", function() {
        const symptomsList = document.querySelectorAll("#symptoms li");

        // Loop through each symptom item and collect data
        let symptomsData = [];
        symptomsList.forEach((symptomItem) => {
            let symptomName = symptomItem.querySelector("label").textContent.trim();
            let isChecked = symptomItem.querySelector("input[type='checkbox']").checked;
            let symptomDetail = symptomItem.querySelector("input[type='text']").value;
            let symptomDate = symptomItem.querySelector("input[type='date']").value;

            symptomsData.push({
                name: symptomName,
                checked: isChecked,
                detail: symptomDetail,
                date: symptomDate,
            });
        });

        // Save data to localStorage (temporary storage for now)
        localStorage.setItem("symptomsData", JSON.stringify(symptomsData));

        alert("Symptoms data saved successfully!");

        // Optionally, you could also send this data to a server via an AJAX request
    });
}

// Display saved symptoms data from localStorage (if any)
window.onload = function() {
    const savedSymptomsData = JSON.parse(localStorage.getItem("symptomsData"));

    if (savedSymptomsData && savedSymptomsData.length > 0) {
        const symptomListContainer = document.getElementById("symptom-list");
        savedSymptomsData.forEach(symptom => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>${symptom.name}</strong><br>
                Checked: ${symptom.checked ? 'Yes' : 'No'}<br>
                Detail: ${symptom.detail}<br>
                Date: ${symptom.date}
            `;
            symptomListContainer.appendChild(listItem);
        });
    }
};

// Simple feature to track time in Daylight (for Mental Wellbeing)
function trackDaylightTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const daylightMessage = document.getElementById("daylight-time-message");

    if (hours >= 6 && hours <= 18) {
        daylightMessage.textContent = "It's daylight!";
        daylightMessage.style.color = "green";
    } else {
        daylightMessage.textContent = "It's nighttime.";
        daylightMessage.style.color = "blue";
    }
}

// Call the function to track daylight time on page load
window.addEventListener("load", trackDaylightTime);

// Function to calculate the total hours of sleep in the sleep section
function calculateTotalSleep() {
    const sleepStartTime = document.getElementById("sleep-start-time");
    const sleepEndTime = document.getElementById("sleep-end-time");
    const sleepDurationDisplay = document.getElementById("sleep-duration");

    if (sleepStartTime && sleepEndTime && sleepDurationDisplay) {
        sleepEndTime.addEventListener("change", function() {
            const startTime = new Date("1970-01-01 " + sleepStartTime.value);
            const endTime = new Date("1970-01-01 " + sleepEndTime.value);
            let sleepDuration = (endTime - startTime) / (1000 * 60 * 60); // Duration in hours

            if (sleepDuration < 0) {
                sleepDuration += 24; // If the end time is after midnight
            }

            sleepDurationDisplay.textContent = `Total Sleep Duration: ${sleepDuration.toFixed(2)} hours`;
        });
    }
}

// Call the sleep calculation on page load
window.addEventListener("load", calculateTotalSleep);

// Function to update and show heart rate (for Heart section)
function updateHeartRate() {
    const heartRateDisplay = document.getElementById("heart-rate-display");

    if (heartRateDisplay) {
        // For demo purposes, we're generating a random heart rate between 60-100 bpm
        const randomHeartRate = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
        heartRateDisplay.textContent = `Current Heart Rate: ${randomHeartRate} bpm`;
    }
}

// Update heart rate on page load
window.addEventListener("load", updateHeartRate);

// Form submission for medications (handling Medications page)
const medicationsForm = document.getElementById("medications-form");

if (medicationsForm) {
    medicationsForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const medName = document.getElementById("med-name").value;
        const medDosage = document.getElementById("med-dosage").value;
        const medTimeTaken = document.getElementById("med-time-taken").value;
        const medType = document.getElementById("med-type").value;
        const medSideEffects = document.getElementById("med-side-effects").value;

        // Collect the data and store it temporarily in localStorage (for this demo)
        const medicationData = {
            name: medName,
            dosage: medDosage,
            timeTaken: medTimeTaken,
            type: medType,
            sideEffects: medSideEffects,
        };

        let medications = JSON.parse(localStorage.getItem("medications")) || [];
        medications.push(medicationData);

        localStorage.setItem("medications", JSON.stringify(medications));

        alert("Medication record saved!");
    });
}

// Display saved medications data from localStorage (on Medications page)
window.onload = function() {
    const savedMedications = JSON.parse(localStorage.getItem("medications"));

    if (savedMedications && savedMedications.length > 0) {
        const medicationList = document.getElementById("medication-list");
        savedMedications.forEach(medication => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>${medication.name}</strong><br>
                Dosage: ${medication.dosage}<br>
                Time Taken: ${medication.timeTaken}<br>
                Type: ${medication.type}<br>
                Side Effects: ${medication.sideEffects}
            `;
            medicationList.appendChild(listItem);
        });
    }
};

document.addEventListener('DOMContentLoaded', function() {
  // Highlight the active page in the navbar
  const currentPath = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});

// Functionality for interactive elements (if any)
document.querySelector('button').addEventListener('click', function() {
  alert('Start tracking your health data!');
});
