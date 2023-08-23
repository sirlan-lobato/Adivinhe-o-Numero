let msgBoaVindas = document.getElementById("mensagemBoaVinda");
let inputNumero = document.getElementById("numeroAleatorio");
let botao = document.getElementById("botao");
let numeroAleatorio = parseInt(Math.random() * 10);
let res = document.getElementById("mensagem");
let tentativas = 10;

botao.addEventListener('click', ()=>{

    for(let i = 1; i < tentativas; i-- ){
         if(inputNumero.value == numeroAleatorio){
        res.innerHTML = `Parabéns vc Acertou o numero era ${numeroAleatorio}`; 
    }else{
        if(inputNumero.value > numeroAleatorio){
            res.innerHTML = `O numero secreto é menor`
        }else{
            res.innerHTML = `O numero secreto é maior`
        }
    } 
    }

    alert(`Opa vc ja tentou ${tentativas} tentativas`)

      
});

console.log(numeroAleatorio)