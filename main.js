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

function resetaSenha(){
    senha = [];
    tentativas = 0
}

var descobrirSenha = function (a, b, c, d) {
    var retorno = '';
    var erro = 0;
    while (erro == 0) {
        if (senha[0] != a) {
            retorno += "senha incorreta";
            erro++;
        } else {
            if (a == senha[0]) {
                retorno += 'tente outra vez*';
                if (b == senha[1]) {
                    
                    retorno += '*';
                    if (c == senha[2]) {
                        
                        retorno += '*';
                        if (d == senha[3]) {
                            console.log("aqui");
                            retorno = 'você acertou!';
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
    console.log(retorno);
    return retorno;
}
descobrirSenha(1, 2 ,3 ,4);