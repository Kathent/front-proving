const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const containerMessage = document.querySelector(".container");
const replay = document.querySelector("#replay");

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;

    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        containerMessage.classList.add("show");
      }
    });
  });
}

runAnimation();

function resetDom() {
  counter.classList.remove("hide");
  containerMessage.classList.remove("show");
  nums.forEach((num) => {
    num.classList.value = "";
  });
  nums[0].classList.add("in");
}

replay.addEventListener("click", () => {
  resetDom();
  runAnimation();
});
