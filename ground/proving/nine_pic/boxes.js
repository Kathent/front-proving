let boxesCollection = document.getElementsByClassName("boxes");
console.log(boxesCollection);

if (boxesCollection) {
  let boxes = boxesCollection[0];
  console.log("boxes ", boxes);
  let width = 4,
    height = 3;

  let widthPixel = 200,
    heighPixel = 150;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let box = document.createElement("div");
      box.classList.add("box");
      let mm = `${-j * widthPixel}px`;
      let nn = `${-i * heighPixel}px`;
      box.style.backgroundPositionX = mm;
      box.style.backgroundPositionY = nn;
      boxes.appendChild(box);
    }
  }
}
