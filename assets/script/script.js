var rafa = {nome:"Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos:0};
var paulo = {nome:"Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos:0};
var rafael = {nome:"Rafael", vitorias: 0, empates: 0, derrotas: 0, pontos:0};

function calcularPontos(jogador){
    var pontos = jogador.vitorias * 3 + jogador.empates
    return pontos
}


var jogadores = [rafa, paulo,rafael]


function exibeJogadoresNaTela(jogadores){
    var elemento = ""
    for(let i = 0;i <jogadores.length; i++){
        elemento += `<tr><td>${jogadores[i].nome}</td>`
        elemento += `<td>${jogadores[i].vitorias}</td>`
        elemento += `<td>${jogadores[i].empates}</td>`
        elemento += `<td>${jogadores[i].derrotas}</td>`
        elemento += `<td>${jogadores[i].pontos}</td>`
        elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        elemento += "<td><button onClick='removerJogador("+ i +")'>Remover</button></td>"
        elemento += "</tr>"
    }
    let tabelaJogadores = document.querySelector('#tabelaJogadores')
    tabelaJogadores.innerHTML = elemento
}
exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calcularPontos(jogador)

    let numeroAleatorio = parseInt(Math.random() * jogadores.length)
    let j = jogadores
    let n = numeroAleatorio

    if(  j[n] === jogador && j[n] === j.at() ){
        n ++
        j[n].derrotas ++
    }else if(j[n] === jogador && j[n] === j.at(-1)  ){
        n --
        j[n].derrotas ++
    }else if(j[n] === jogador) {
        n ++
        j[n].derrotas ++
        
    } else {
        j[n].derrotas ++
    }

    
    exibeJogadoresNaTela(jogadores)
     
}

function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calcularPontos(jogador)
    let numeroAleatorio = parseInt(Math.random() * jogadores.length)
    let j = jogadores
    let n = numeroAleatorio

    if(  j[n] === jogador && j[n] === j.at() ){
        n ++
        j[n].empates ++
        
        
    }else if(j[n] === jogador && j[n] === j.at(-1)  ){
        n --
        j[n].empates ++
        
    }else if(j[n] === jogador) {
        n ++
        j[n].empates ++
      
        
    } else {
        j[n].empates ++
        
    }
    j[n].pontos = calcularPontos(j[n])
    
    
    
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    
    let numeroAleatorio = parseInt(Math.random() * jogadores.length)
    let j = jogadores
    let n = numeroAleatorio

    if(  j[n] === jogador && j[n] === j.at() ){
        n ++
        j[n].vitorias ++
    }else if(j[n] === jogador && j[n] === j.at(-1)  ){
        n --
        j[n].vitorias ++
    }else if(j[n] === jogador) {
        n ++
        j[n].vitorias ++
        
    } else {
        j[n].vitorias ++
    }
    j[n].pontos = calcularPontos(j[n])
    exibeJogadoresNaTela(jogadores)
}



// limpar tela


function limparDados(jogador){
    for(let i = 0; i < jogadores.length; i++){
        jogadores[i].vitorias = 0
        jogadores[i].empates = 0
        jogadores[i].derrotas = 0
        jogadores[i].pontos = calcularPontos(jogadores[i])
    }
    
    exibeJogadoresNaTela(jogadores)
  
}

function addNovoJogador(){
    let novoJogadorNow = document.querySelector('#addNovoJogador').value
 
    if(novoJogadorNow){
        novoJogadorNow = {nome:`${novoJogadorNow}`, vitorias: 0, empates: 0, derrotas: 0, pontos:0}
        jogadores.push(novoJogadorNow)
        console.log(jogadores)
        exibeJogadoresNaTela(jogadores)
        document.querySelector('#addNovoJogador').value = ""
    }else {
        alert('adicione um novo jogador')
    }
}

//removendo jogador
function removerJogador(i){
    let jogador = jogadores[i]
    console.log(jogador)
    jogadores.splice(jogadores.indexOf(jogador), [i])
    exibeJogadoresNaTela(jogadores)
}






