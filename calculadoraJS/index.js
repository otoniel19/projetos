//estrutura da calculadora de adição
  alert("comemeçe digitando pela direita para evitar erros")
    function somar() {
      let t1 = document.querySelector('input#espaco1')//aqui estamos recuperando o número digitado
      let t2 = document.querySelector('input#espaco2')//aqui também
    
      n1 = parseInt(t1.value)//aqui estamos convertendo para número inteiro
      n2 = parseInt(t2.value)//aqui também
      
      let resultado = (n1 + n2)//aqui estamos somando o resultado digitado
      
      let res = document.querySelector('p#resto')//aqui estamos recuperando o text vazio para aparecer o resultado abaixo 
      
      res.innerText = resultado//aqui estamos pegando o elemento acima e mostrando o resultado onde esta vazio
    }  
    let fundo = document.getElementsByTagName('body')[0]//aqui mudamos o fundo
    fundo.style.background = "green"
    
    let cor = document.getElementsByTagName('body')[0]//aqui mudamos a cor das letras
    cor.style.color = "white"
 
