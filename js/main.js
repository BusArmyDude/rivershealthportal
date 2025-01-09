// Sample data to be dynamically inserted into the page
const healthData = {
    activity: {
        moveCalories: 250,
        exerciseMinutes: 30,
        standHours: 5,
        activeEnergy: 150,
        restingEnergy: 1200,
        steps: 5000,
        walkingDistance: 2.5, // miles
        runningPower: 50,
        runningSpeed: 6, // mph
        cyclingDistance: 12, // miles
    },
    bodyMeasurements: {
        bodyFatPercentage: 18,
        bmi: 22.5,
        leanBodyMass: 150,
        weight: 170, // lbs
        wristTemperature: 98.6, // Fahrenheit
        height: 5.9, // feet
    },
    heart: {
        heartRate: 75, // bpm
        heartRateVariability: 50, // ms
        restingHeartRate: 68, // bpm
        walkingHeartRateAverage: 80, // bpm
        bloodPressure: "120/80",
        cardioFitness: 45, // VO2 max
        afibHistory: 10, // %
    },
    sleep: {
        timeAsleep: 8, // hours
        sleepStages: {
            awake: 0.5,
            rem: 2,
            core: 3,
            deep: 2.5,
        },
        highlights: {
            heartRate: 68, // bpm
        },
    },
    vitals: {
        bloodGlucose: 95, // mg/dL
        bloodOxygen: 98, // %
        bodyTemperature: 98.2, // Fahrenheit
        menstruation: "Not applicable",
    },
};

// Function to display health overview
function displayOverview() {
    const overviewSection = document.getElementById('overview-data');

    // Create an HTML string to represent the health data
    const overviewHTML = `
        <h3>Activity</h3>
        <p><strong>Move Calories:</strong> ${healthData.activity.moveCalories} kcal</p>
        <p><strong>Exercise Minutes:</strong> ${healthData.activity.exerciseMinutes} min</p>
        <p><strong>Stand Hours:</strong> ${healthData.activity.standHours} hrs</p>
        <p><strong>Active Energy:</strong> ${healthData.activity.activeEnergy} kcal</p>
        <p><strong>Resting Energy:</strong> ${healthData.activity.restingEnergy} kcal</p>
        <p><strong>Steps:</strong> ${healthData.activity.steps} steps</p>
        <p><strong>Walking Distance:</strong> ${healthData.activity.walkingDistance} miles</p>
        <p><strong>Running Power:</strong> ${healthData.activity.runningPower} watts</p>
        <p><strong>Running Speed:</strong> ${healthData.activity.runningSpeed} mph</p>
        <p><strong>Cycling Distance:</strong> ${healthData.activity.cyclingDistance} miles</p>

        <h3>Body Measurements</h3>
        <p><strong>Body Fat Percentage:</strong> ${healthData.bodyMeasurements.bodyFatPercentage}%</p>
        <p><strong>BMI:</strong> ${healthData.bodyMeasurements.bmi}</p>
        <p><strong>Lean Body Mass:</strong> ${healthData.bodyMeasurements.leanBodyMass} lbs</p>
        <p><strong>Weight:</strong> ${healthData.bodyMeasurements.weight} lbs</p>
        <p><strong>Wrist Temperature:</strong> ${healthData.bodyMeasurements.wristTemperature}°F</p>
        <p><strong>Height:</strong> ${healthData.bodyMeasurements.height} ft</p>

        <h3>Heart Health</h3>
        <p><strong>Heart Rate:</strong> ${healthData.heart.heartRate} bpm</p>
        <p><strong>Heart Rate Variability:</strong> ${healthData.heart.heartRateVariability} ms</p>
        <p><strong>Resting Heart Rate:</strong> ${healthData.heart.restingHeartRate} bpm</p>
        <p><strong>Walking Heart Rate Average:</strong> ${healthData.heart.walkingHeartRateAverage} bpm</p>
        <p><strong>Blood Pressure:</strong> ${healthData.heart.bloodPressure}</p>
        <p><strong>Cardio Fitness:</strong> ${healthData.heart.cardioFitness} VO2 max</p>
        <p><strong>AFib History:</strong> ${healthData.heart.afibHistory}%</p>

        <h3>Sleep Data</h3>
        <p><strong>Time Asleep:</strong> ${healthData.sleep.timeAsleep} hrs</p>
        <p><strong>Sleep Stages:</strong> Awake: ${healthData.sleep.sleepStages.awake} hrs, REM: ${healthData.sleep.sleepStages.rem} hrs, Core: ${healthData.sleep.sleepStages.core} hrs, Deep: ${healthData.sleep.sleepStages.deep} hrs</p>
        <p><strong>Heart Rate during Sleep:</strong> ${healthData.sleep.highlights.heartRate} bpm</p>

        <h3>Vitals</h3>
        <p><strong>Blood Glucose:</strong> ${healthData.vitals.bloodGlucose} mg/dL</p>
        <p><strong>Blood Oxygen:</strong> ${healthData.vitals.bloodOxygen}%</p>
        <p><strong>Body Temperature:</strong> ${healthData.vitals.bodyTemperature}°F</p>
        <p><strong>Menstruation:</strong> ${healthData.vitals.menstruation}</p>
    `;

    // Insert the HTML into the overview section
    overviewSection.innerHTML = overviewHTML;
}

// Call the function to populate the overview section on page load
document.addEventListener('DOMContentLoaded', displayOverview);
