let days = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timerID;
// https://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript

function updateValuesShown() {
  document.getElementById("days").innerText = days;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("hours").innerText = hours;
  document.getElementById("seconds").innerText = seconds;
}
updateValuesShown();

function countDown() {
  let id = setInterval(function () {
    if (seconds == 0) {
      seconds = 59;

      if (minutes == 0) {
        if (hours == 0) {
          hours = 23;

          if (days == 0) {
            minutes = 0;
            hours = 0;
            seconds = 0;
            document.getElementById("over").innerText = "Your time is up!!!";
            clearInterval(id);
          } else {
            days -= 1;
          }
        } else {
          hours -= 1;
        }
        document.getElementById("hours").innerText = hours;
      } else {
        minutes -= 1;
      }
      // document.getElementById('seconds').innerText= seconds;
      document.getElementById("minutes").innerText = minutes;

      if (days != 0) {
        seconds = 59;
      }
    }
    document.getElementById("seconds").innerText = seconds;
    seconds -= 1;
    // i+=1;
  }, 1000);

  return id;
}

function processDate() {
  clearInterval(countDown);
  let targetDate = new Date(document.getElementById("targetDate").value);
  let currentDate = new Date();
  days = Math.floor(
    (targetDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
  );
  // console.log(currentDate.getMonth())
  // days = targetDate.getDate() - currentDate.getDate() - 1;
  // console.log(targetDate.getDate())

  let midnight = new Date();
  midnight.setHours(24);
  midnight.setMinutes(0);
  midnight.setSeconds(0);
  midnight.setMilliseconds(0);

  hours = Math.floor(
    (midnight.getTime() - currentDate.getTime()) / 1000 / 60 / 60
  );
  minutes = (midnight.getTime() - currentDate.getTime()) / 1000 / 60;
  seconds = (midnight.getTime() - currentDate.getTime()) / 1000;
  seconds = 59;
  minutes = Math.floor(minutes - hours * 60);

  // console.log("days");
  // console.log(days);
  // console.log("hours");
  // console.log(hours);
  // console.log("minutes");
  // console.log(minutes);
  // console.log("seconds");
  // console.log(seconds);
  // console.log(typeof(targetDate))
  updateValuesShown();
  timerID = countDown();
}

function stopCountDown() {
  clearInterval(timerID);
  // clearInterval(processDate)
  updateValuesShown();
}
// https://stackoverflow.com/questions/8583694/determine-minutes-until-midnight
