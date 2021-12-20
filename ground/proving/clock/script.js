let hourE = document.getElementsByClassName("hour").item(0);
let minuteE = document.getElementsByClassName("minute").item(0);
let secondE = document.getElementsByClassName("second").item(0);

let setTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let secondDeg = -180 + (second / 60) * 360;
  secondE.style.transform = `translate(-50%, 0) rotate(${secondDeg}deg)`;
  console.log(secondE.style.transfrom, secondE);
  let minuteDeg = -180 + (minute / 60) * 360;
  minuteE.style.transform = `translate(-50%, 0) rotate(${minuteDeg}deg)`;
  let hourDeg = -180 + (hour / 12) * 360;
  hourE.style.transform = `translate(-50%, 0) rotate(${hourDeg}deg)`;
};

setInterval(() => {
  setTime();
}, 1000);
