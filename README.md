# Image-Carousel

# Usage

document.addEventListener("DOMContentLoaded", () => {
const images = [
"https://picsum.photos/200/300?random=1",
"https://picsum.photos/200/300?random=2",
"https://picsum.photos/200/300?random=3",
"https://picsum.photos/200/300?random=4",
];

const image = new Carousel(images);
console.log(image);
const body = document.querySelector("body");
image.appendTo(body);
});
