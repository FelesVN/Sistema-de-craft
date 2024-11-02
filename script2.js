function gerarNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numero1 = gerarNumeroAleatorio(1, 13)
var str1 = numero1.toString()

var numero2 = gerarNumeroAleatorio(1, 13)
var str2 = numero2.toString()

var numero3 = gerarNumeroAleatorio(1, 13)
var str3 = numero3.toString()

var numero4 = gerarNumeroAleatorio(1, 13)
var str4 = numero4.toString()

var numero5 = gerarNumeroAleatorio(1, 13)
var str5 = numero5.toString()

var numero6 = gerarNumeroAleatorio(1, 13)
var str6 = numero6.toString()


function mudar1() {
    var img = document.getElementById("imagem1");
    if (img.src.includes("imagens/null.png")) {
        img.src = "itens/i" + str1 + ".png";
    }
}

function mudar2() {
    var img = document.getElementById("imagem2");
    if (img.src.includes("imagens/null.png")) {
        img.src = "itens/i" + str2 + ".png";
    }
}

function mudar3() {
    var img = document.getElementById("imagem3");
    if (img.src.includes("imagens/null.png")) {
        img.src = "itens/i" + str3 + ".png";
    }
}

function mudar4() {
    var img = document.getElementById("imagem4");
    if (img.src.includes("imagens/null.png")) {
        img.src = "itens/i" + str4 + ".png";
    }
}

function mudar5() {
    var img = document.getElementById("imagem5");
    if (img.src.includes("imagens/null.png")) {
        img.src = "itens/i" + str5 + ".png";
    }
}

function mudar6() {
    var img = document.getElementById("imagem6");
    if (img.src.includes("imagens/null.png")) {
        img.src = "itens/i" + str6 + ".png";
    }
}


var nfunc = gerarNumeroAleatorio(3, 6)


switch (nfunc) {
    case 3:
        document.getElementById("solicitar").addEventListener("click", mudar1)
        document.getElementById("solicitar").addEventListener("click", mudar2)
        document.getElementById("solicitar").addEventListener("click", mudar3)
      break;
    case 4:
        document.getElementById("solicitar").addEventListener("click", mudar1)
        document.getElementById("solicitar").addEventListener("click", mudar2)
        document.getElementById("solicitar").addEventListener("click", mudar3)
        document.getElementById("solicitar").addEventListener("click", mudar4)

      break;
    case 5:
        document.getElementById("solicitar").addEventListener("click", mudar1)
        document.getElementById("solicitar").addEventListener("click", mudar2)
        document.getElementById("solicitar").addEventListener("click", mudar3)
        document.getElementById("solicitar").addEventListener("click", mudar4)
        document.getElementById("solicitar").addEventListener("click", mudar5)

      break;
    case 6:
        document.getElementById("solicitar").addEventListener("click", mudar1)
        document.getElementById("solicitar").addEventListener("click", mudar2)
        document.getElementById("solicitar").addEventListener("click", mudar3)
        document.getElementById("solicitar").addEventListener("click", mudar4)
        document.getElementById("solicitar").addEventListener("click", mudar5)
        document.getElementById("solicitar").addEventListener("click", mudar6)
      break;
    
    default:
      alert ("DEU ERRO")
  }





