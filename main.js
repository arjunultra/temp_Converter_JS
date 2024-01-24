let inputFht = document.getElementById("input-fht");
let inputValue = inputFht.value;
let resultCel = document.getElementById("result-cel");
const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", function () {
  let resultAns = ((inputValue - 32) * 5) / (9).toFixed(2);
  resultCel.innerHTML += resultAns;
});
