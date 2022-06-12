// source/index.js
var token_to_dollar = 0.05;
var conversions = {
  "USD": 1,
  "GBP": 0.81,
  "EUR": 0.95
};
window.onload = function() {
  const token_input = document.getElementById("tokens");
  const fiat_input = document.getElementById("fiat");
  const currency_select = document.getElementById("currency");
  token_input.addEventListener("input", function(e) {
    fiat_input.value = token_to_dollar * token_input.value * conversions[currency_select.value];
  });
  fiat_input.addEventListener("input", function(e) {
    token_input.value = fiat_input.value / conversions[currency_select.value] / token_to_dollar;
  });
  currency_select.addEventListener("change", function(e) {
    fiat_input.value = token_to_dollar * token_input.value * conversions[currency_select.value];
  });
};
//# sourceMappingURL=bundle.js.map
