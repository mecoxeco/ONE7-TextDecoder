// REPLACES PARA O CRYPT
function criptografar(palavra) {
    return palavra
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

//REPLACES PARA O DECRYPT
function descriptografar(palavra) {
    return palavra
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// CRIPTOGRAFAR (CRYPT)
function criptografarTexto() {
    var texto = document.getElementById('texto').value;
    var resultado = criptografar(texto);
    document.getElementById('resultado').value = resultado;
}

// DESCRIPTOGRAFAR (DECRYPT)
function descriptografarTexto() {
    var texto = document.getElementById('texto').value;
    var resultado = descriptografar(texto);
    document.getElementById('resultado').value = resultado;
}

// COPYCAT
function copiarResultado() {
    var resultado = document.getElementById('resultado');
    resultado.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}
// MODAL
function abrirModalChave() {
    var modal = document.getElementById('modalChave');
    modal.style.display = 'block';
}

function fecharModalChave() {
    var modal = document.getElementById('modalChave');
    modal.style.display = 'none';
}

window.onclick = function (event) {
    var modais = document.getElementsByClassName('modal');
    for (var i = 0; i < modais.length; i++) {
        if (event.target == modais[i]) {
            modais[i].style.display = 'none';
        }
    }
}
