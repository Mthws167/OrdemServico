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
    onKeyPress: function(val, e, field, options) {
    field.mask(CpfCnpjMask.apply({}, arguments), options);
    }
    };




