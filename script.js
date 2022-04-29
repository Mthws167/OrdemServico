document.getElementById('form2').style.display = "none"

function resultado() {
    resultado = document.getElementById('form1').style.display = "none";

    var nos1 = document.getElementById("nos").value;
    var nome1 = document.getElementById("nome").value;
    var endereco1 = document.getElementById("endereco").value;
    var numero1 = document.getElementById("numero").value;
    var bairro1 = document.getElementById("bairro").value;
    var cidade1 = document.getElementById("cidade").value;
    var estado1 = document.getElementById("estado").value;
    var cep1 = document.getElementById("cep").value;
    var telefone1 = document.getElementById("telefone").value;
    var cpfcnpj1 = document.getElementById("CpfCnpj").value;
    var cliente1 = document.getElementById("cliente").value;
    var telefone21 = document.getElementById("telefone2").value;
    var cpfcnpj21 = document.getElementById("CpfCnpj2").value;
    var obs1 = document.getElementById("obs").value;
    var descricao1 = document.getElementById("descricao").value;
    var servico1 = document.getElementById("servico").value;
    var data1 = document.getElementById("data").value;
    var hora1 = document.getElementById("hora").value;


    document.getElementById('form2').style.display = "block";

    document.getElementById("nosOS").innerHTML = "ORDEM DE SERVIÇO Nº: " + nos1;
    document.getElementById("nomeServidor").innerHTML = nome1;
    document.getElementById("enderecoNumeroBairro").innerHTML = endereco1 + "," + numero1 + "," + bairro1;
    document.getElementById("cidadeEstadoCep").innerHTML = cidade1 + "" + estado1 + ", CEP:" + cep1;
    document.getElementById("telefones").innerHTML = telefone1;
    document.getElementById("cpfcnpjs").innerHTML = "CPF/CNPJ: " + cpfcnpj1;
    document.getElementById("clientes").innerHTML = "Cliente: " + cliente1;
    document.getElementById("telefones2").innerHTML = "Telefone: " + telefone21;
    document.getElementById("cpfcnpjs2").innerHTML = "CPF/CNPJ: " + cpfcnpj21;
    document.getElementById("obss").innerHTML = "OBS.: " + obs1;
    document.getElementById("descricaos").innerHTML = descricao1;
    document.getElementById("servicos").innerHTML = servico1;
    document.getElementById("dataHora").innerHTML = data1 + '-' + hora1;


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
    return val.replace(/\D/g, '').length <= 11 ? '000.000.000-000' : '00.000.000/0000-00';
},
    cpfCnpjpOpcao = {
        onKeyPress: function (val, e, field, options) {
            field.mask(CpfCnpjMask.apply({}, arguments), options);
        }
    };


function imprimir() {
    window.print();
}
