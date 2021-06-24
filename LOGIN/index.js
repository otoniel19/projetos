function start() {
let resultado = prompt("usuário ou adm?")

go = (resultado)

  if(go.includes("usuário")) {
    login()
  }
  if(go.includes("adm")) {
    adm()
  }
}

function login(nome,senha) {
nome = "usuário";
senha = 12345;

alert(" nome: usuário senha: 12345")

let n = prompt("nome de usuário")

nome1 = (n)

if(nome1 !== nome) {
  alert("usuário inválido")
  return;
} 
let s = parseInt(prompt("senha"))

senha1 = (s)

if(senha1 !== senha) {
  alert("senha inválida")
  return;
} else {
  window.confirm("processando...")
  window.open("usuário.html")
}

  
};
function adm(nome,senha) {
  nome = "admin"
  senha = 12345678910;
  
  alert(" nome: admin senha: 12345678910")
  
  let n = prompt("nome de adm")
  
  nome1 = (n)
  
  if(nome1 !== nome) {
    alert("usuário adm inválido")
    return;
  }
let s = parseInt(prompt("senha"))

senha1 = (s)

if(senha1 !== senha) {
  alert("senha inválida")
  return;
} else {
  window.open("admin.html")
}
  
}