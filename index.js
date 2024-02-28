let mylabel = document.getElementById("mylabel");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let count = 0;

increase.onclick = function () {
  count++;
  mylabel.textContent = count;
};

decrease.onclick = function () {
  count--;
  mylabel.textContent = count;
};

reset.onclick = function () {
  count = 0;
  mylabel.textContent = count;
};
