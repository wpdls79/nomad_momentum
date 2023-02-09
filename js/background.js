const images = ["1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImage}`;
bgImg.className = "bgImg";

document.body.appendChild(bgImg);