var campo = "";

function operacao(sinal) {
    campo = document.getElementById('icampoNumerico').value.toString();

    var numeros = campo.split(sinal);
    
    if (sinal == '+') {
        resultado = parseInt(numeros[0]) + parseInt(numeros[1]);
    } else if (sinal == '-') {
        resultado = parseInt(numeros[0]) - parseInt(numeros[1]);
    } else if (sinal == '*') {
        resultado = parseInt(numeros[0]) * parseInt(numeros[1]);
    } else if (sinal == '/') {
        resultado = parseInt(numeros[0]) / parseInt(numeros[1]);
    } else if (sinal == '^') {
        resultado = parseInt(numeros[0]) ** parseInt(numeros[1]);
    } else if (sinal == 'root') {
        resultado = Math.sqrt(parseInt(numeros[0]));
    } else if (sinal == 'sin') {
        calc = Math.sin(grauToRad(numeros[0]));
        resultado = calc.toFixed(2);
    } else if (sinal == 'cos') {
        calc = Math.cos(grauToRad(numeros[0]));
        resultado = calc.toFixed(2);
    } else if (sinal == 'tan') {
        calc = Math.tan(grauToRad(numeros[0]));
        resultado = calc.toFixed(2);
    } else if (sinal == 'mod') {
        resultado = Math.abs(numeros[0]);
    } else if (sinal = 'log') {
        resultado = Math.log10(numeros[0])
    } 

    document.getElementById('icampoNumerico').value = resultado.toString();
}

function limparCampo() {
    document.getElementById('icampoNumerico').value = null;
}

function grauToRad(valor) {
    valorRadiano = (2 * 3.14 * parseFloat(valor)) / 360;
    return valorRadiano;
}