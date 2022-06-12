
let token_to_dollar = .05
let dollar_to_gbp = .81

const conversions = {
  "USD": 1,
  "GBP": .81,
  "EUR": .95,
}

window.onload = function() {
  const token_input = document.getElementById('tokens')
  const fiat_input = document.getElementById('fiat')
  const currency_select = document.getElementById('currency')


  token_input.addEventListener('input', function(e) {
    fiat_input.value = token_to_dollar * token_input.value * conversions[currency_select.value]
  })

  fiat_input.addEventListener('input', function(e) {
    token_input.value = fiat_input.value / conversions[currency_select.value] / token_to_dollar
  })

  currency_select.addEventListener('change', function(e) {
    fiat_input.value = token_to_dollar * token_input.value * conversions[currency_select.value]
  })

}
