const inputDisciplina = document.querySelector('#disciplina')
const inputAva = document.querySelector('#notaAva')
const inputProva = document.querySelector('#notaProva')
const botaoEnviar = document.querySelector('#botaoEnviar')
const saidaNotas = document.querySelector('#saidaNotas')

let contador = 0

let notas = []

function calculaNota(){
  let disciplina = inputDisciplina.value
  let ava = inputAva.value.replace(',', '.')
  let prova = inputProva.value.replace(',', '.')


  if (isNaN(ava) || isNaN(prova)) {
    alert("Por favor, insira números válidos para Ava e Prova.")

    limpaInputs()

    return
  }


  const media = (ava * 0,4) + (prova * 0.6)
  const novaNota = document.createElement('li')

  novaNota.className = `${contador} nota`
  novaNota.innerHTML = `${disciplina}: ${media.toFixed(2)}  <button class="${contador} deletar">X</button>`

  saidaNotas.appendChild(novaNota)

  const botaoDeletar = novaNota.querySelector('.deletar')
  botaoDeletar.addEventListener('click', () => {
    novaNota.remove()
  })

  limpaInputs()

  contador ++
}

function limpaInputs(){
  inputDisciplina.value = ''
  inputAva.value = ''
  inputProva.value = ''
}

botaoEnviar.addEventListener('click', () => {
  calculaNota()
})
