let resultCel = document.getElementById("result-cel");
const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", function () {
  let inputFht = Number(document.getElementById("input-fht").value);
  let celcius = ((inputFht - 32) * 5) / 9;
  resultCel.innerHTML = celcius.toFixed(2);
  console.log(inputFht);
});
