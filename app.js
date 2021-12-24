const colors = [
  "#bdcebe",
  "#77a8a8",
  "#80ced6",
  "#92a8d1",
  "#00ffcc",
  "#89fc00",
  "#ffd200",
];

let colorText = document.getElementById("color-value");
colorText.textContent = "#000";

document.getElementById("button").addEventListener("click", function () {
  const colorValue = colors[randomColor()];
  document.body.style.backgroundColor = colorValue;
  colorText.textContent = colorValue.toUpperCase();
});

function randomColor() {
  return Math.floor(Math.random() * colors.length);
}
