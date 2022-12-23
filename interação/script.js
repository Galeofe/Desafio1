var textInput = document.getElementById('input_texto');
var outInput = document.getElementById('output');

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/a/g, "ai") .replace(/e/g, "enter") .replace(/i/g, "imes") .replace(/o/g, "ober") .replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea reandonly id = "input_texto">' + resultCripto + '</textarea>' + '<button class = "btn_copiar" id = "copiar" onclick = "copiar()">Copiar</button>';
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/ai/g, 'a') .replace(/enter/g, 'e') .replace(/imes/g, 'i') .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

    document.getElementById('output').innerHTML = '<textarea reandonly id = "input_texto">' + resultDescripto + '</textarea>' + '<button class = "btn_copiar" id = "copiar" onclick = "copiar()">Copiar</button>';
}

function copiar() {
    var textoCop = document.getElementById('input_texto');

    textoCop.select();
    document.execCommand('copy');
    alert("TEXTO COPIADO!");
}