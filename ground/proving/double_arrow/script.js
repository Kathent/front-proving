let slideLeft = document.getElementById("left-container");
let slideRight = document.getElementById("right-container");
let slidesLength = slideLeft.childElementCount;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

let delayEv = (f) => {
  let running = 0;
  return (ev) => {
    if (running) {
      return;
    }

    running++;
    setTimeout(() => {
      if (running > 1) {
        return;
      }
      f(ev);
      running--;
    }, 800);
  };
};

slideLeft.onwheel = delayEv((ev) => {
  if (ev.target.deltaY > 0) {
    changeSlide("down");
  } else {
    changeSlide("up");
  }
});

slideRight.onwheel = delayEv((ev) => {
  if (ev.target.deltaY > 0) {
    changeSlide("down");
  } else {
    changeSlide("up");
  }
});

let activeSlideIndex = 0;
const changeSlide = (direction) => {
  const sliderHeight = slideLeft.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
