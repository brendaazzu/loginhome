

function logar(){

var login = document.getElementById('login').value;
var senha = document.getElementById('senha').value;

if(login == "a@gmail.com" && senha == "12345"){
    location.href = "home.html";
}else{
    alert('Usuário ou senha incorretos');
}

}
