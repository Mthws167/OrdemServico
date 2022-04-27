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


function resultado() {
    var nos = document.getElementById("NOS").value;
    var nome = document.getElementById("nome").value;
    var endereco = document.getElementById("endereco").value;
    var numero = document.getElementById("numero").value;
    var bairro = document.getElementById("bairro").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;
    var cep = document.getElementById("cep").value;
    var telefone = document.getElementById("telefone").value;
    var cpfcnpj = document.getElementById("CpfCnpj").value;
    var cliente = document.getElementById("cliente").value;
    var telefone2 = document.getElementById("telefone2").value;
    var cpfcnpj2 = document.getElementById("CpfCnpj2").value;
    var obs = document.getElementById("obs").value;
    var descricao = document.getElementById("descricao").value;
    var servico = document.getElementById("servico").value;
    var data = document.getElementById("data").value;
    var hora = document.getElementById("hora").value;

    if(nos.value != ""&&nome.value != ""&&endereco.value != ""&&numero.value != ""&&bairro.value != ""&&cidade.value != ""&&estado.value != ""&&cep.value != ""&&cpfcnpj.value != ""&&telefone.value != ""&&cliente.value != ""&&telefone2.value != ""&&cpfcnpj2.value != ""&&obs.value != ""&&descricao.value != ""&&servico.value != ""&&data.value != ""&&hora.value != ""){
        var nos1=parseInt(nos.value);
        document.getElementById("nos1").innerHTML = "Nº OS: "+nos;
    }
}
