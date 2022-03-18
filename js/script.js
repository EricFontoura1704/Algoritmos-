// alert("Hello World");
// console.log("OK");

// 1. Mudando valores com .value
function mudarTexto() {
    document.getElementById('texto1').value = "Buenas";
}

// 2. Mudando valores com .innerText
function mudarTexto2() {
    // document.getElementById('texto2').innerText = "Inner<br> Text";
    document.getElementById('texto2').innerText =
        "<ul>" +
        "<li>Item 1</li>" +
        "<li>Item 2</li>" +
        "<li>Item 3</li>" +
        "</ul>";
    // console.log("texto2");
}

// 3. Mudando valores com .innerHTML
function mudarTexto3() {
    // document.getElementById('texto3').innerHTML = "Inner<br> HTML";
    document.getElementById('texto3').innerHTML =
        "<ul>" +
        "<li>Item 1</li>" +
        "<li>Item 2</li>" +
        "<li>Item 3</li>" +
        "</ul>";
}

// 4. Mudando imagem ao clicar
function mudarImagem() {
    document.getElementById("img1").src = "img/carro.jpg";
}

// 5. Mudando imagem ao passar o mouse
function mudarImagem2() {
    document.getElementById("img2").src = "img/carro.jpg";
}

function voltarImagem() {
    document.getElementById("img2").src = "img/espaco.jpg";
}

// 6. Mudando cor do texto CSS (estilo)
function mudarCorTexto() {
    // guarda o elemento inteiro
    const texto = document.getElementById("texto6");

    texto.innerHTML = "OK"
    texto.style.color = "yellow"
    texto.style.backgroundColor = "gray"
    texto.style.fontWeight = "700"
    texto.style.padding = "10px"
    texto.style.borderRadius = "30px"
    texto.style.textAlign = "center"
    texto.style.width = "100px"

    // Adiciona um a classe CSS no elemento HTML
    // texto.classList.add("box");
}

// 7. Mudando o CSS (com parâmetros)
function mudarTexto7(elemento) {
    elemento.innerHTML = "Texto alterado pelo JavaScript";
}

// 8. Chamando uma function que chama outra
function calcular(valor1, valor2) {
    // Converte para número
    /*  const valorConvertido1 = parseInt(valor1.value);
        const valorConvertido2 = parseInt(valor2.value); */

    valor1 = parseFloat(valor1.value);
    valor2 = parseFloat(valor2.value);

    /*  const resultado = valorConvertido1 + valorConvertido2;
        const resultado = valor1 + valor2; */

    const resultado = somar(valor1, valor2);

    // Mostra o resultado
    mostrarResultado(resultado);
}

function somar(valor1, valor2) {
    return valor1 + valor2;
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').innerHTML = resultado;
}

// 9. Clicar , segurar e soltar
function segurar(elemento) {
    elemento.innerHTML = "Solte!";
    elemento.style.backgroundColor = "yellow";
}

function soltar(elemento) {
    elemento.innerHTML = "Segure!";
    elemento.style.backgroundColor = "cyan"
}

// 10. Data e Hora
function mostrarData() {
    document.getElementById("data").innerHTML = Date();
}

// 11. Contador de Cliques

// Escopo GLOBAL
let contador = 0;

function contarCliques() {
    //Incrementa o contador
    // let contador = 0; // Escopo LOCAL

    contador++;
    // contador = contador + 1;
    //contador += 1;

    //Mostra o resultado
    document.getElementById("display").value = contador;
}

function zerarContador() {
    contador = 0;

    document.getElementById("display").value = contador
}