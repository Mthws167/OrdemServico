
document.getElementById('form2').style.display = "none"


function resultado() {
    document.getElementById('form1').style.display = "none";

    let nos1 = document.getElementById("nos").value;
    let nome1 = document.getElementById("nome").value;
    let endereco1 = document.getElementById("endereco").value;
    let numero1 = document.getElementById("numero").value;
    let bairro1 = document.getElementById("bairro").value;
    let cidade1 = document.getElementById("cidade").value;
    let estado1 = document.getElementById("estado").value;
    let cep1 = document.getElementById("cep").value;
    let telefone1 = document.getElementById("telefone").value;
    let cpfcnpj1 = document.getElementById("CpfCnpj").value;
    let cliente1 = document.getElementById("cliente").value;
    let telefone21 = document.getElementById("telefone2").value;
    let cpfcnpj21 = document.getElementById("CpfCnpj2").value;
    let obs1 = document.getElementById("obs").value;
    let descricao1 = document.getElementById("descricao").value;
    let servico1 = document.getElementById("servico").value;
    let data1 = document.getElementById("data").value;
    let hora1 = document.getElementById("hora").value;


    document.getElementById('form2').style.display = "block";

    document.getElementById("nosOS").innerHTML = "ORDEM DE SERVIÇO Nº: " + nos1;
    document.getElementById("nomeServidor").innerHTML = nome1;
    document.getElementById("enderecoNumeroBairro").innerHTML = endereco1 + "," + numero1 + "," + bairro1;
    document.getElementById("cidadeEstadoCep").innerHTML = cidade1 + "," + estado1 + ", CEP:" + cep1;
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
