const buttonRegulation = document.querySelector('#regulation')
const buttonInstruction = document.querySelector('#instruction')
const drugTable = document.querySelector('.drug-table')
const drugInstruction = document.querySelector('.drug-instruction')


buttonRegulation.addEventListener('click', function () {
  if (this.dataset.open === 'false') {
    drugTable.classList.remove('hidden')
    this.dataset.open = 'true'

  }
  if (buttonInstruction.dataset.open === 'true') {
    drugInstruction.classList.add('hidden')
    buttonInstruction.dataset.open = 'false'
  }
})

buttonInstruction.addEventListener('click', function () {
  if (this.dataset.open === 'false') {
    drugInstruction.classList.remove('hidden')
    this.dataset.open = 'true'
  }
  if (buttonRegulation.dataset.open === 'true') {
    drugTable.classList.add('hidden')
    buttonRegulation.dataset.open = 'false'
  }
})






