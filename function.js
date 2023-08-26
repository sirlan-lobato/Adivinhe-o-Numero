let botao = document.getElementById("botao");
let msg = document.getElementById("mensagem");
let numeroSecreto = parseInt(Math.random() * 15 + 1);
let chute = '';
let tentativas = 1;

botao.addEventListener('click', ()=>{
    while(chute != numeroSecreto){
        chute = parseInt(prompt("Insira um número"));
        if(chute == numeroSecreto){
                msg.style.display = "block";
                let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
                msg.innerHTML = `Parabéns vc acertou com ${tentativas} ${palavraTentativa} o numero era ${numeroSecreto}`;
                break;
        }else{
            if(chute > numeroSecreto){
                alert("O numero secreto é menor");
                // alert(`cONTANDO ${tentativas}`)
            }
            else{
                alert("O numero é maior");
                // alert(`cONTANDO ${tentativas}`)
            }
        }
      tentativas++   
    }

})
console.log(numeroSecreto);
