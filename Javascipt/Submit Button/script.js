const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()
  console.log(form.name.value)
  console.log(form.town.value)
})