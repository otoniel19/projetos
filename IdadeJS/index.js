function idade() {
  
  let t1 = document.getElementById('txt1')
  let t2 = document.getElementById('txt2')
  
  let n1 = parseInt(t1.value)
  let n2 = parseInt(t2.value)
  
  nasceu = (n1)
  atual = (n2)
  
  let resultado = (atual - nasceu)
  
  let res = document.getElementById('resto')
  
  res.innerText = resultado + " Anos ";
  
  let sla = document.getElementById('resto')[0]
}

let x = document.getElementById('eg')

x.addEventListener('click', gg)

function gg() {
  alert("obrigado por usar meu progama 😎 até a próxima")
}