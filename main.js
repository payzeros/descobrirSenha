var senha = [];
tentativas = 0;

function aleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (var i = 0; i < 4; i++) {
    senha.push(aleatorio(0, 9));
}

function resetaSenha() {
    senha = [];
    tentativas = 0
}
var descobrirSenha = function (tentativa) {
    tentativa = tentativa.toString();
    
    array = tentativa.split('');
    
    var retorno = '';
    var erro = 0;
    while (erro == 0) {
        if (senha[0] != array[0]) {
            retorno += "senha incorreta";
            erro++;
        } else {
            if (array[0] == senha[0]) {
                retorno += 'tente outra vez*';
                if (array[1] == senha[1]) {

                    retorno += '*';
                    if (array[2] == senha[2]) {

                        retorno += '*';
                        if (array[3] == senha[3]) {
                        
                            retorno = 'acertou!';
                            senha = [];
                            tentativas = 0
                            erro++
                        } else {
                            erro++;
                        }
                    } else {

                        erro++;
                    }
                } else {
                    erro++;
                }
            }
        }
    }
    return retorno;
}


var bruteForce = function () {
    var tentativasErro = [];
    var acerto = ''

    geraNumeroParaSenha = function () {
        var um = Math.floor(Math.random() * 9) + 0;
        var dois = Math.floor(Math.random() * 9) + 0;
        var tres = Math.floor(Math.random() * 9) + 0;
        var quatro = Math.floor(Math.random() * 9) + 0;
        var numero = '' + um + dois + tres + quatro;
        return numero
    }
    while (acerto != "acertou!") {
        tentativa = geraNumeroParaSenha()
        var existe = 0
        for (var i = 0; i < tentativasErro.length; i++) {
            if (tentativasErro[i] == tentativa) {
                existe++
            }
        }

        if (existe == 0) {
            acerto = descobrirSenha(tentativa)
            tentativasErro.push(tentativa);
        }
    }
console.log("senha: " + tentativa);
console.log("numero de tentativas = " + tentativasErro.length)
}
bruteForce()