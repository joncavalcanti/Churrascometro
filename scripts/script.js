
// 
// Description: Only practice 
//--------------------------------------##
// Author: Jonathan Cavalcanti
// Linkedin: https://www.linkedin.com/in/jonathan-cavalcanti-5281651a6/
// GitHub: https://github.com/joncavalcanti
//--------------------------------------##


//Loading elements of Html
let inputAdult = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

//function for calc and get values
function calcular(){
    console.log("calculando...")

    let adultos = inputAdult.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let carne = carnePp(duracao);
    let bebidas = bebidasPp(duracao);
    let cerveja = cervejaPp(duracao);

    let qdtTotalCarne = carne * adultos + (carne * criancas);
    let qdtTotalCerveja = cerveja * adultos;
    let qdtTotalBebidas = bebidas * adultos + (bebidas * criancas);

    //show result on window
    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de 2 L Bebidas</p>`
}


//functions conditional 
function carnePp(duracao){
    if(duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPp(duracao){
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPp(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}