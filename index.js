//função da Idade
function idade() {
  let anoAtual = parseInt(prompt("em que ano você está?"))

  let anoNasceu = parseInt(prompt("em que ano você nasceu?"))

  atual = (anoAtual)
  nasceu = (anoNasceu)

  let idadeTotal = (anoAtual - anoNasceu)

  window.confirm(` VOCÊ ESTA EM ${atual} ENTÃO VOCÊ TEM ${idadeTotal} ANOS `)
  return;
}

//função da calculadora
function calculadora() {
  alert("digite + para adição - para subtração * para multiplicação / para divisão obs: no operador")
  let primeiro = parseInt(prompt("digite o primeiro número"))
  let operador = prompt("digite um operador")
  let segundo = parseInt(prompt("digite o segundo número"))

  a1 = (primeiro)
  a2 = (operador)
  a3 = (segundo)

  switch (operador) {
    case "+":
      let mais = (a1 + a3)

      window.confirm(` ${a1} + ${a3} e igual a ${mais} `)
      break;
    case "-":
      let menos = (a1 - a3)

      window.confirm(` ${a1} - ${a3} e igual a ${menos} `)
      break;
    case "*":
      let multiplicação = (a1 * a3)

      window.confirm(` ${a1} * ${a3} e igual a ${multiplicação} `)
      break;
    case "/":
      let divisão = (a1 / a3)

      window.confirm(` ${a1} / ${a3} e igual a ${divisão} `)

  }
}
