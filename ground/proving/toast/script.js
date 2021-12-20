let toasts = [];

let index = 0;

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

let button = document.getElementById("click");
let marginBottom = 20;
let height = 40;

let onclick = function () {
  console.log("clicked");
  let tmp = document.createElement("div");
  tmp.textContent = `Toast ${index++}`;
  tmp.classList.add("toast");
  tmp.style.left = "50%";

  let bottom = (tmp.style.bottom = `${marginBottom}px`);
  setTimeout(() => {
    toasts.pop();
    tmp.parentNode.removeChild(tmp);
  }, 10000);

  let current = marginBottom;
  for (let x = toasts.length - 1; x >= 0; x--) {
    current = current + height + marginBottom;
    toasts[x].style.bottom = `${current}px`;
    console.log("x : ", x, " bottom is: ", toasts[x].style.bottom);
  }

  toasts.push(tmp);
  button.parentElement.appendChild(tmp);
};

button.onclick = delayEv(onclick);
