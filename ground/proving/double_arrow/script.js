let left = document.getElementById("left-container");
let right = document.getElementById("right-container");

console.log("script");

if (left) {
  left.onwheel = (ev) => {
    console.log("ev is", ev);
  };
}

let transformNum = 0;
let running = false;
if (right) {
  right.onwheel = (ev) => {
    if (running) {
      console.log("running....");
      return;
    } else {
      setTimeout(transform(ev), 2000);
    }
  };
}

let transform = (ev) => {
  console.log("ev enter.....", running);
  if (running) {
    return;
  }
  if (ev.deltaY > 0) {
    transformNum++;
  } else if (ev.deltaY < 0) {
    transformNum--;
  }

  if (transformNum < 0) {
    transformNum = 0;
  } else if (transformNum >= right.childElementCount) {
    transformNum = right.childElementCount - 1;
  }

  for (let i = 0; i < right.childElementCount; i++) {
    right.children[i].style.transform = `translate(0, ${-transformNum * 100}%)`;
    right.children[i].style.transition = "transfrom 2s ease-in-out";
  }
  running = false;
};
// function transformEle(ele, )
