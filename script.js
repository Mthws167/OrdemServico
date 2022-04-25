function numeroOS(evt) {
    var evento = evt || window.event;
    var chave = evento.keyCode || evento.which;
    chave = String.fromCharCode(chave);
    var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if (!regex.test(chave)) {
        evento.returnValue = false;
        if (evento.preventDefault) evento.preventDefault();
    }
}

function numeroCasa(evt) {
    var evento = evt || window.event;
    var chave = evento.keyCode || evento.which;
    chave = String.fromCharCode(chave);
    var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if (!regex.test(chave)) {
        evento.returnValue = false;
        if (evento.preventDefault) evento.preventDefault();
    }
}


function Formulario() {
    var NOS = document.getElementById('NOS').innerHTML = NOS;
    var Nome = document.getElementById('nome');
    var Endereco = document.getElementById('endereco');
    var NumeroCasa = document.getElementById('numero');
    var Bairro = document.getElementById('bairro');
    var Cidade = document.getElementById('cidade');
    var Estado = document.getElementById('estado');
    var CEP = document.getElementById('cep');
    var CPFCNPJ = document.getElementById('CpfCnpj');
    var Cliente = document.getElementById('cliente');
    var Descricao = document.getElementById('descricao');
    var Servico = document.getElementById('servico');
    var Data = document.getElementById('data');
    var Hora = document.getElementById('hora');

}


function gohome() {
    window.location = 'index.html';
}
function save() {
    window.localStorage.setItem('campo1', $('#campo1').val());
}
function load() {
    $('#campo2').val(window.localStorage.getItem('campo1'));
}
function erase() {
    window.localStorage.removeItem('campo1');
}
