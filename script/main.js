function openModal(pet) {
    var txt1 = document.getElementById("txt1");
    var txt2 = document.getElementById("txt2");
    var img = document.getElementById('modalImg');

    // Preenche o modal com informações baseadas no pet
    switch (pet) {
        case "Queno":
            txt1.innerHTML = "Queno";
            txt2.innerHTML = "Era uma noite chuvosa quando Queno apareceu na minha porta. Encharcado e tremendo, ele ganhou um cobertor quentinho e comida. Hoje, ele corre feliz pelo quintal, sempre com aquele brilho nos olhos. Queno nos ensinou o valor de um simples gesto de amor.";
            img.src = "images/quenologo.png"; // Ajuste para a imagem do Queno
            break;
        case "Biscoito":
            txt1.innerHTML = "Biscoito";
            txt2.innerHTML = "Biscoito escapou da coleira e correu para brincar com os patos do parque. Depois de alguns minutos de pura alegria, voltou com a língua de fora. Mesmo cansado, ele olhou para mim com um sorriso travesso no rosto. Naquele dia, percebi como a felicidade pode ser tão simples.";
            img.src = "images/biscoito.jpg"; // Imagem do Biscoito
            break;
        case "Gin":
            txt1.innerHTML = "Gin Tônica";
            txt2.innerHTML = "Gin, minha doguinha, não gostava muito de água. Mas no seu primeiro banho, ela parecia uma bolinha de algodão molhada. Enquanto eu secava, ela dormiu no meu colo, tranquila e feliz. Foi o momento em que nos tornamos inseparáveis.";
            img.src = "images/gin.jpg"; // Imagem da Gin
            break;
        case "Scotch":
            txt1.innerHTML = "Scotch";
            txt2.innerHTML = "Scotch adorava correr pelo quintal, mas um dia achou uma poça de lama. Ele pulou com tanta alegria que ficou irreconhecível, todo marrom! Depois do banho, ele ainda parecia orgulhoso de sua “aventura radical”. Desde então, sempre fica de olho em novas poças para explorar.";
            img.src = "images/scotch2.jpg"; // Imagem do Scotch
            break;
        case "Billy":
            txt1.innerHTML = "Billy";
            txt2.innerHTML = "Billy sempre late para um cantinho vazio da sala, como se visse algo. Um dia, ele até levou um brinquedo para o amigo invisível. Rimos muito, mas adoramos como ele parece sempre animado com tudo. Para Billy, qualquer momento é uma chance de se divertir!";
            img.src = "images/billy.jpg"; // Imagem do Billy
            break;
        case "Pintada":
            txt1.innerHTML = "Pintada";
            txt2.innerHTML = "Pintada fez amizade com os gatos que visitam nosso portão todos os dias. Ela divide os biscoitos e fica abanando o rabo enquanto eles comem. Os vizinhos dizem que ela é a pacificadora do bairro. No fundo, Pintada só quer que todos sejam felizes juntos!";
            img.src = "images/pintada.png"; // Imagem da Pintada
            break;
        default:
            txt1.innerHTML = "Pet não encontrado!";
            txt2.innerHTML = "Por favor, tente mais tarde.";
            img.src = ""; // Caso o pet não seja encontrado
            break;
    }

    // Exibe o modal usando display: flex
    document.getElementById("knowMore").classList.add("show"); 
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("knowMore").classList.remove("show");
}
