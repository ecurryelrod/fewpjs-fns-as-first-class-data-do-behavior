/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const time = timeString.split(':')
  if (time[0] < 0 || time[0] > 24) return "Not a valid time"
  if (time[0] < 12) return "Good Morning"
  if (time[0] > 17) return "Good Evening"
  return "Good Afternoon"
}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById("greeting").textContent = message
}