let smallCup = document.getElementsByClassName("small-cup");
let remainedDiv = document.getElementsByClassName("remained");
let consumedDiv = document.getElementById("consumed");
for (let x = 0; x < smallCup.length; x++) {
  let tmp = x;
  smallCup.item(tmp).addEventListener("click", () => {
    console.log("tmp is: ", tmp);
    let consumed = (2 * (tmp + 1.0)) / 8;
    let remained = 2 - consumed;
    remainedDiv.item(0).children.item(0).textContent = remained + "L";
    consumedDiv.textContent = ((tmp + 1.0) / 8) * 100 + "%";
    let height = `${(consumed / 2) * 330}px`;
    consumedDiv.style.height = height;
    consumedDiv.style.backgroundColor = "#6ab3f8";
    console.log("consumedDiv: ", consumedDiv, consumedDiv.style.height, height);
  });
}
