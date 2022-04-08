let tempo= 6000
let indexImagemAtual= 0
let imagens= document.querySelectorAll("#seletor-imagens img")

let max= imagens.length

function proximaImagem(){
    imagens[indexImagemAtual].classList.remove('instagram-imagem-atual')
    
    indexImagemAtual++

    if(indexImagemAtual >= max){
        indexImagemAtual=0
    }
    imagens[indexImagemAtual].classList.add("instagram-imagem-atual")

    // console.log(imagens[indexImagemAtual].classList)
}

function start(){
    setInterval(() =>{
        
        proximaImagem()

    }, tempo)
}

window.addEventListener("load", start)