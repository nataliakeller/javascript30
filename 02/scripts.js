const secondHand = document.querySelector('.hand-second');
const minsHand = document.querySelector('.hand-min');
const hourHand = document.querySelector('.hand-hour');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  var secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  var minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;



  const hours = now.getHours();
  var hoursDegrees = ((hours / 24) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 940);
