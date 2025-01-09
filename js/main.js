
// Sample health data (this can be replaced with actual data from an API or manual input)
const healthData = {
  activity: {
    moveCalories: 750,
    exerciseMinutes: 45,
    standHours: 10,
    steps: 12000,
    walkingDistance: 5.2,
    restingEnergy: 1600
  },
  bodyMeasurements: {
    weight: 72, // in kg
    height: 175, // in cm
    bodyFatPercentage: 18,
    bmi: 23.5
  },
  heart: {
    heartRate: 72,
    bloodPressure: { systolic: 120, diastolic: 80 }
  },
  sleep: {
    duration: '7h 15m',
    stages: {
      deep: '1h 30m',
      rem: '2h',
      light: '3h 45m'
    }
  }
};

// Function to populate health overview data
function populateOverview() {
  const overviewElement = document.getElementById('overview-data');
  
  const moveCalories = `Move Calories: ${healthData.activity.moveCalories} cal`;
  const exerciseMinutes = `Exercise Minutes: ${healthData.activity.exerciseMinutes} minutes`;
  const standHours = `Stand Hours: ${healthData.activity.standHours} hours`;
  const steps = `Steps: ${healthData.activity.steps}`;
  const walkingDistance = `Walking/Running Distance: ${healthData.activity.walkingDistance} miles`;
  const restingEnergy = `Resting Energy: ${healthData.activity.restingEnergy} cal`;

  const weight = `Weight: ${healthData.bodyMeasurements.weight} kg`;
  const height = `Height: ${healthData.bodyMeasurements.height} cm`;
  const bodyFat = `Body Fat Percentage: ${healthData.bodyMeasurements.bodyFatPercentage}%`;
  const bmi = `BMI: ${healthData.bodyMeasurements.bmi}`;

  const heartRate = `Heart Rate: ${healthData.heart.heartRate} bpm`;
  const bloodPressure = `Blood Pressure: ${healthData.heart.bloodPressure.systolic}/${healthData.heart.bloodPressure.diastolic} mmHg`;

  const sleepDuration = `Sleep Duration: ${healthData.sleep.duration}`;
  const sleepStages = `Sleep Stages - Deep: ${healthData.sleep.stages.deep}, REM: ${healthData.sleep.stages.rem}, Light: ${healthData.sleep.stages.light}`;

  overviewElement.innerHTML = `
    <p>${moveCalories}</p>
    <p>${exerciseMinutes}</p>
    <p>${standHours}</p>
    <p>${steps}</p>
    <p>${walkingDistance}</p>
    <p>${restingEnergy}</p>
    <hr>
    <p>${weight}</p>
    <p>${height}</p>
    <p>${bodyFat}</p>
    <p>${bmi}</p>
    <hr>
    <p>${heartRate}</p>
    <p>${bloodPressure}</p>
    <hr>
    <p>${sleepDuration}</p>
    <p>${sleepStages}</p>
  `;
}

// Call the function to populate the overview data
document.addEventListener('DOMContentLoaded', populateOverview);

// Simple navigation smooth scrolling (for future links on the same page)
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
