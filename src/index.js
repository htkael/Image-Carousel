import "./styles.css";

export class Carousel {
  constructor(images = []) {
    this.currentSlide = 0;
    this.images = images;
    this.slideShowElement = this.createSlideShow();
    this.slides = this.slideShowElement.querySelectorAll(".carouselSlide");
    this.dotsContainer = this.slideShowElement.querySelector(".carouselDots");
    this.init();
  }

  createSlideShow() {
    // create carousel container
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    // create each slide
    this.images.forEach((image) => {
      const slide = document.createElement("div");
      slide.classList.add("carouselSlide", "fade");
      const img = document.createElement("img");
      img.src = image;
      slide.append(img);
      carousel.append(slide);
    });

    const arrows = document.createElement("div");
    arrows.classList.add("arrows");

    const leftArrow = document.createElement("button");
    leftArrow.classList.add("carouselArrow", "left");
    leftArrow.innerHTML = "&lt";
    arrows.append(leftArrow);

    const rightArrow = document.createElement("button");
    rightArrow.classList.add("carouselArrow", "right");
    rightArrow.innerHTML = "&gt";
    arrows.append(rightArrow);

    carousel.append(arrows);

    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("carouselDots");
    carousel.append(dotsContainer);

    return carousel;
  }

  init() {
    this.createDots(); // Create dots for each slide
    this.showSlide(this.currentSlide);

    // Add event listeners for the arrows
    const leftArrow = this.slideShowElement.querySelector(".left");
    const rightArrow = this.slideShowElement.querySelector(".right");

    leftArrow.addEventListener("click", () => this.prevSlide());
    rightArrow.addEventListener("click", () => this.nextSlide());

    // Auto-slide functionality
    this.autoSlide = setInterval(() => this.nextSlide(), 10000);
  }

  createDots() {
    this.slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("carouselDot");
      dot.addEventListener("click", () => this.goToSlide(index));
      this.dotsContainer.append(dot);
    });
  }

  showSlide(index) {
    this.slides.forEach((slide, i) => {
      slide.classList.remove("active");
      this.dotsContainer.children[i].classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
        this.dotsContainer.children[i].classList.add("active");
        console.log(slide);
      }
    });
  }

  prevSlide() {
    this.currentSlide =
      this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
    this.showSlide(this.currentSlide);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.showSlide(this.currentSlide);
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.showSlide(this.currentSlide);
  }

  appendTo(parent) {
    parent.append(this.slideShowElement);
  }
}

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
