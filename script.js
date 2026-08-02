const weddingDate = new Date("August 18, 2026 14:00:00").getTime();

const timer = document.getElementById("timer");

setInterval(() => {

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

const seconds = Math.floor((distance % (1000 * 60)) / 1000);

timer.innerHTML =
`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

},1000);
