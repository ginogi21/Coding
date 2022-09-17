const colorInput = document.querySelector('input[type=color]')

const colorButton = document.querySelector('button')
const colorVariable = '--yellow'

colorButton.addEventListener('click', _ => {
  document.documentElement.style.setProperty(colorVariable, 'green')
})

colorInput.addEventListener('change', e => {
  //console.log(e.target.value)
  document.documentElement.style.setProperty(colorVariable, e.target.value)
})