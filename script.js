function numeroOS(evt) {
    var evento = evt || window.event;
    var chave = evento.keyCode || evento.which;
    chave = String.fromCharCode( chave );
    var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(chave) ) {
       evento.returnValue = false;
       if(evento.preventDefault) evento.preventDefault();
    }
 }

 function numeroCasa(evt) {
    var evento = evt || window.event;
    var chave = evento.keyCode || evento.which;
    chave = String.fromCharCode( chave );
    var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(chave) ) {
       evento.returnValue = false;
       if(evento.preventDefault) evento.preventDefault();
    }
 }


function Formulario(){
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

    if(!NOS==null){
        alert('Campo Obrigatório!');
        return false;
    }else if(!Nome.checked){
        alert('Campo Obrigatório!');
        return false;
    }else if(!Endereco.checked){
        alert('Campo Obrigatório!');
        return false;
    }else if(!NumeroCasa.checked){
        alert('Campo Obrigatório!');
        return false;
    }else if(!Bairro.checked){
        alert('Campo Obrigatório!');
        return false;
    }else if(!Cidade.checked){
        alert('Campo Obrigatório!');
        return false;
    }else if(!Estado.checked){
        alert('Campo Obrigatório!');
        return false;
    }else if(!CEP.checked){
        alert('Campo Obrigatório!');
        return false;
    }else if(!CPFCNPJ.checked){
        alert('Campo Obrigatório!');
        return false;
    }else if(!Cliente.checked){
        alert('Campo Obrigatório!');
        return false;
    }else if(!Descricao.checked){
        alert('Campo Obrigatório!');
        return false;
    }else if(!Servico.checked){
        alert('Campo Obrigatório!');
        return false;
    }else if(!Data.checked){
        alert('Campo Obrigatório!');
        return false;
    }else if(!Hora.checked){
        alert('Campo Obrigatório!');
        return false;
    }else{
        return true;
    }

}
