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

(function () {
    function adicionar() {
        var dados = JSON.stringify({
            nos: document.querySelector("input[name=nos]").value,
            nome: document.querySelector("input[name=nome]").value,
            endereco: document.querySelector("input[name=endereco]").value,
            numero: document.querySelector("input[name=numero]").value,
            bairro: document.querySelector("input[name=bairro]").value,
            cidade: document.querySelector("input[name=cidade]").value,
            estado: document.querySelector("input[name=estado]").value,
            cep: document.querySelector("input[name=cep]").value,
            telefone: document.querySelector("input[name=telefone]").value,
            cpfcnpj: document.querySelector("input[name=cpfcnpj]").value,
            cliente: document.querySelector("input[name=cliente]").value,
            telefone2: document.querySelector("input[name=telefone2]").value,
            cpfcnpj2: document.querySelector("input[name=cpfcnpj2]").value,
            obs: document.querySelector("input[name=obs]").value,
            descricao: document.querySelector("input[name=descricao]").value,
            servico: document.querySelector("input[name=servico]").value,
            data: document.querySelector("input[name=data]").value,
            hora: document.querySelector("input[name=hora]").value

        });
        // tbClientes.push(dados);
        localStorage.setItem("storage", JSON.stringify(dados));
        alert("Registro Adicionado!");
        return true;
    }
    var form = document.querySelector("form");
    form.addEventListener("submit", function () {
        // event.preventDefault(); event
        return adicionar();
    });
})();


var CpfCnpjMask = function (val) {
    return val.replace(/\D/g, '').length <= 11 ? '000.000.000-009' : '00.000.000/0000-00';
},
    cpfCnpjpOpcao = {
        onKeyPress: function (val, e, field, options) {
            field.mask(CpfCnpjMask.apply({}, arguments), options);
        }
    };

