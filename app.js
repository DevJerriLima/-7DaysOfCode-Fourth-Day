let numeroDaSorte = 5;

let i = 0;
while(i < 3){
    let numeroEscolhido = prompt("Escolha um número de 0 a 10 e ganhe um presente.");
    
    if (numeroEscolhido != numeroDaSorte && i ==  2){
        alert(`Uma pena você não acertou, o número da sorte era ${numeroDaSorte}.`);
    }else if (numeroEscolhido == numeroDaSorte){
        alert("Parabéns você ganhou um abraço. Sinta-se abraçado.");
        i = 2;
    }else{
        i++;
    }
    
}
