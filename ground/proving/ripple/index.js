const button = document.getElementById("ripple");

button.addEventListener("click", (ev) => {
  let x = ev.clientX,
    y = ev.clientY;

  let offsetX = ev.target.offsetLeft;
  let offsetY = ev.target.offsetTop;

  console.log(x, y, offsetX, offsetY);

  let insideX = x - offsetX;
  let insideY = y - offsetY;

  let rippleSpan = document.createElement("span");
  rippleSpan.style.left = `${insideX}px`;
  rippleSpan.style.top = ` ${insideY}px`;
  rippleSpan.classList.add("circle");
  button.appendChild(rippleSpan);
  setTimeout(() => {
    button.removeChild(rippleSpan);
  }, 500);
});
