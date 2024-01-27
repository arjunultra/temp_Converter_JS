let resultCel = document.getElementById("result-cel");
const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let inputFht = Number(document.getElementById("input-fht").value);
  console.log(inputFht);
  let celcius = ((inputFht - 32) * 5) / 9;
  resultCel.innerHTML = celcius.toFixed(2);
});
