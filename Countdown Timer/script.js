// // let now = new Date();


//   function getTargetTime() {
//     const input = document.getElementById("appt");
//     const targetTime = input.value;
//     console.log("Selected time:", targetTime);
    
//     // Optional: convert to Date object
//     const dateTimeObj = new Date(targetTime);
//     // console.log("As Date object:", dateTimeObj);
//     const currentTime = new Date();
//     const timeDifference = dateTimeObj - currentTime;
//     console.log("Time difference in milliseconds:", timeDifference);

//     const diffInMins = Math.floor(timeDifference /(1000 * 60));
//     const diffInHouers = Math.floor(timeDifference /(1000 * 60 * 60))
//     const diffInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));


//     console.log("Difference in milliseconds:",timeDifference);
//     console.log("Difference in minutes:", diffInMins);
//     console.log("Difference in hours:", diffInHouers);
//     console.log("Difference in days:", diffInDays);
//     let countDisplay = document.getElementById("appt");
//     countDisplay.innerHTML = `Time left: ${diffInDays} days, ${diffInHouers % 24} hours, ${diffInMins % 60} minutes`;
//     console.log("Countdown display updated.",countDisplay.innerHTML);





//   }


//   function startCountdown() {

//       getTargetTime();
//   }





// just for check
let countdownInterval;

function getTargetTime() {
  const input = document.getElementById("appt");
  const targetTime = new Date(input.value);
  const currentTime = new Date();
  const timeDifference = targetTime - currentTime;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdownDisplay").textContent = "Time's up!";
    return;
  }

  const diffInSeconds = Math.floor(timeDifference / 1000);
  const seconds = diffInSeconds % 60;
  const minutes = Math.floor(diffInSeconds / 60) % 60;
  const hours = Math.floor(diffInSeconds / 3600) % 24;
  const days = Math.floor(diffInSeconds / (3600 * 24));

  document.getElementById("countdownDisplay").textContent =
    `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function startCountdown() {
  clearInterval(countdownInterval); // prevent multiple intervals
  getTargetTime(); // run once instantly
  countdownInterval = setInterval(getTargetTime, 1000); // update every second
}
function stopCountdown() {
  clearInterval(countdownInterval);
  document.getElementById("countdownDisplay").textContent = "Countdown stopped.";
}