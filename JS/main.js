const btnColors = document.querySelectorAll(".btn-colors")
const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const roboImg = document.getElementById("robotron-img")
const btnProducaoIniciar = document.getElementById("producao")
const loop = document.getElementById("loop")

// robotron-2000 settings
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


// Statistics
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector(".controle-contador")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}


function atualizaEstatistica(peca){

    estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas [peca] [elemento.dataset.estatistica]
    })
}


// to  change robotron-2000 color 
btnColors.forEach((elemento) => {
    elemento.addEventListener("click", () =>{
        if(elemento.value == "Branco"){
            roboImg.src = "img/tron-branco.png"
        }
        else if(elemento.value == "Amarelo"){
            roboImg.src = "img/tron-amarelo.png"
        }
        else if(elemento.value == "Preto"){
            roboImg.src = "img/tron-Preto.png"
        }
        else if(elemento.value == "Rosa"){
            roboImg.src = "img/tron-rosa.png"
        }
        else if(elemento.value == "Azul"){
            roboImg.src = "img/tron-azul.png"
        }
        else{
            roboImg.src = "img/tron-vermelho.png"
        }
    })
} )


// after clicking "Iniciar Produção" its name will change to "Em produção" and a loop circle will display

btnProducaoIniciar.addEventListener("click", () => {
    btnProducaoIniciar.value = "Em produção"
    btnProducaoIniciar.classList.add("producao-loop")
    loop.classList.add("loop")
})