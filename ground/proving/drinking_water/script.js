let smallCup = document.getElementsByClassName("small-cup");
let remainedDiv = document.getElementsByClassName("remained");
for (let x = 0; x < smallCup.length; x++) {
  let tmp = x;
  smallCup.item(tmp).addEventListener("click", () => {
    console.log("tmp is: ", tmp);
    let remained = 2 - (2 * (tmp + 1.0)) / 8;
    remainedDiv.item(0).children.item(0).textContent = remained + "L";
  });
}
