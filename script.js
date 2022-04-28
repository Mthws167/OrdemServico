function resultado() {
    let nos = document.getElementById("nos").value;
    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    let numero = document.getElementById("numero").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let cep = document.getElementById("cep").value;
    let telefone = document.getElementById("telefone").value;
    let cpfcnpj = document.getElementById("CpfCnpj").value;
    let cliente = document.getElementById("cliente").value;
    let telefone2 = document.getElementById("telefone2").value;
    let cpfcnpj2 = document.getElementById("CpfCnpj2").value;
    let obs = document.getElementById("obs").value;
    let descricao = document.getElementById("descricao").value;
    let servico = document.getElementById("servico").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;

    if (nos.value != "" && nome.value != "" && endereco.value != "" && numero.value != "" && bairro.value != "" && cidade.value != "" && estado.value != "" && cep.value != "" && cpfcnpj.value != "" && telefone.value != "" && cliente.value != "" && telefone2.value != "" && cpfcnpj2.value != "" && obs.value != "" && descricao.value != "" && servico.value != "" && data.value != "" && hora.value != "") {
        document.getElementById("nos").innerHTML = "Nº OS: " + nos;
        document.getElementById("nome").innerHTML = "Nome: " + nome;
        document.getElementById("endereco").innerHTML = "Endereço: " + endereco;
        document.getElementById("nmero").innerHTML = "Número: " + numero;
        document.getElementById("bairro").innerHTML = "Bairro: " + bairro;
        document.getElementById("cidade").innerHTML = "Cidade: " + cidade;
        document.getElementById("estado").innerHTML = "Estado: " + estado;
        document.getElementById("cep").innerHTML = "CEP: " + cep;
        document.getElementById("telefone").innerHTML = "Telefone: " + telefone;
        document.getElementById("cpfcnpj").innerHTML = "CPF/CNPJ: " + cpfcnpj;
        document.getElementById("cliente").innerHTML = "Cliente: " + cliente;
        document.getElementById("telefone2").innerHTML = "Telefone: " + telefone2;
        document.getElementById("cpfcnpj2").innerHTML = "CPF/CNPJ: " + cpfcnpj2;
        document.getElementById("obs").innerHTML = "Obs.: " + obs;
        document.getElementById("descricao").innerHTML = "Descrição: " + descricao;
        document.getElementById("servico").innerHTML = "Serviço: " + servico;
        document.getElementById("data1").innerHTML = "Data: " + data;
        document.getElementById("hora1").innerHTML = "Hora: " + hora;

    }else {
        var nulo = "Informe os valores!";
        alert("ERRO!");
        alert(nulo);
    }
}


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

var CpfCnpjMask = function (val) {
    return val.replace(/\D/g, '').length <= 11 ? '000.000.000-009' : '00.000.000/0000-00';
},
    cpfCnpjpOpcao = {
        onKeyPress: function (val, e, field, options) {
            field.mask(CpfCnpjMask.apply({}, arguments), options);
        }
    };


