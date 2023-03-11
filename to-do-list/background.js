const images = [
"0.jpg", "1.jpeg", "2.jpeg"
];

const choose =images[Math.floor(Math.random()*images.length)];

const bgm = document.createElement("img");

bgm.src = `images/${choose}`;

document.body.appendChild(bgm);