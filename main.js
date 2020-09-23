// Iniciar com uama mensagem de boas vindas e informar o nome
 var nome = prompt("BEM VINDO(A)! \n Informe seu nome.");

//Mostrar uma tela na qual o usuário pode escolher se quer mesmo dar início a prova ou não.
var numero = prompt("Olá "+ nome + "Coloque o número correspondente a sua resposta \n 1.Sim \n 2.Não");

//Caso ele não deseje iniciar, o fluxo deve ser encerrado. Caso ele queira, seguirá para a próxima etapa, descrita no item 3.
//Mostrar, através de prompt, a pergunta 1 com alternativas. O usuário responde e depois é apresentada a pergunta 2 e depois a 3.
    if (numero == 1){
      var soma = prompt("Qual a soma de 10 + 25?  \n Alternativas: \n (1) 50   \n (2) 35   \n (3) 40"); 
      var subtracao =  prompt("Qual o resultado da subtração 20 - 2?  \n Alternativas: \n (1) 21 \n (2) 15 \n (3) 18");
      var divisao =  prompt("Qual o resultado de 20/5? \n Alternativas: \n (1) 10  \n (2) 4 \n (3) 25")     
    
    }else{
        prompt("Sessão encerrada.");
    }

    //Mostrar uma tela de resultados (respostas corretas e incorretas).
 var identificacao = document.getElementById("nomeInicial")
.textContent = "Olá, " + nome;
    
    if(soma == 35){
        var certo = document.getElementById("respostaSoma")
        .textContent = "Resposta 1 correta";
    }else{
        var errado = document.getElementById("erradaSoma")
        .textContent = "Resposta 1 errada";

    }

    if(subtracao == 18){
        var certo = document.getElementById("respostaSubtracao")
        .textContent = "Resposta 2 correta";
    }else{
        var errado = document.getElementById("erradaSubtracao")
        .textContent = "Resposta 2 errada";

    }


    if(divisao == 4){
        var certo = document.getElementById("respostaDivisao")
        .textContent = "Resposta 3 correta";
    }else{
        var errado = document.getElementById("erradaDivisao")
        .textContent = "Resposta 3 errada";

    }