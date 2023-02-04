const numeroDaSorte = Math.floor(Math.random() * (10 - 0) + 0);
let numeroEscolhido = "";
let acertou = false;

for(let i = 0; i < 3; i++){
    numeroEscolhido = prompt("Escolha um número de 0 a 10 e ganhe um presente.");
    
    if (numeroEscolhido == numeroDaSorte){
        alert(`Parabéns você ganhou um abraço. Sinta-se abraçado. O número da sorte era ${numeroDaSorte}`);
        acertou = true;
        break;
    }
        alert("Errado");
    }
    if (!acertou){
        alert(`Infelizmente você não acertou o número escolhido era ${numeroDaSorte}`);
}
