function config(idBotao, novoTitulo, novaImagem, novoP) {
    //acessando o id do botao
    var botao = document.querySelector(idBotao)
    //adicionando um evento de click para quando apertar modificar conforme o bloco 
    botao.addEventListener('click', function() {
        var titulo = document.querySelector('#title')
        titulo.textContent = novoTitulo;
        
        var p = document.querySelector('#p')
        p.textContent = novoP

        var imagem = document.querySelector('#img')
        imagem.src = novaImagem
    })
}

//chamando a function config 
config('#btn-mario', 'Super Mario', './IMG/mario-img.png','O icônico encanador vermelho da Nintendo, conhecido por salvar a Princesa Peach do malvado Bowser. Sempre aventureiro, Mario é o herói principal do Reino dos Cogumelos.')
config('#btn-luigi', 'Luigi', './IMG/luigi-img.png', ' Irmão mais novo de Mario, Luigi é corajoso e leal. Com seu chapéu verde, ele frequentemente ajuda Mario em suas aventuras, enfrentando fantasmas e outros desafios.')
config('#btn-dino', 'Yoshi', './IMG/dino-img.png','O adorável dinossauro verde, companheiro de Mario. Yoshi usa sua língua longa para engolir inimigos e transforma-los em ovos, ajudando Mario em várias missões.')
config('#btn-cogumelo', 'Toad', './IMG/cogumelo-azul.png','Habitante do Reino dos Cogumelos, Toad é sempre prestativo. Com seu chapéu de cogumelo azul, ele fornece itens e conselhos valiosos para Mario e amigos.')

