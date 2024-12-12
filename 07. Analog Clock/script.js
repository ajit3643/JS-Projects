const hourElem = document.querySelector(".hour");
const minuteElem = document.querySelector(".minute");
const secondElem = document.querySelector(".second");
const timeElem = document.querySelector(".time");
const dateElem = document.querySelector(".date");
const toggleElem = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
toggleElem.addEventListener("click", (e) => {
  const htmlElem = document.querySelector("html");
  if (htmlElem.classList.contains("dark")) {
    htmlElem.classList.remove("dark");
    e.target.innerHTML = "🌙 Dark mode";
  } else {
    htmlElem.classList.add("dark");
    e.target.innerHTML = "🌤️ Light mode";
  }
});
function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hourForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  hourElem.style.transform = `translate(-50%, -100%) rotate(${scale(hourForClock, 0, 12, 0, 360)}deg)`
  minuteElem.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
  secondElem.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
  timeElem.innerHTML = `${hourForClock}:${minutes<10?`0${minutes}`:minutes} ${ampm}`
  dateElem.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min)*(out_max-out_min)/(in_max-in_min)+out_min
}
setTime()
setInterval(setTime, 1000)