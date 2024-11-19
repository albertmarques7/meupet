function validarFormulario() {
    // Obtém o valor do campo de entrada de texto com id 'nome'
    const nome = document.getElementById('nome').value;

    // Obtém o valor do campo de entrada de texto com id 'email'
    const email = document.getElementById('email').value;

    // Obtém o valor do campo de entrada de texto com id 'idade'
    const idade = document.getElementById('idade').value;

    // Obtém o valor do campo de entrada de texto com id 'texto'
    const texto = document.getElementById('texto').value;

    // Obtém o número de arquivos selecionados no campo de entrada de arquivos com id 'foto'
    const foto = document.getElementById('foto').files.length;
    
    // Verifica se os campos 'nome', 'email' ou 'texto' estão vazios
    if (texto === '' || nome === '' || email === '') {
        // Exibe um alerta pedindo ao usuário para preencher todos os campos
        alert('Por favor, preencha todos os campos');
        // Interrompe a execução da função retornando false
        return false;
    }

    // Verifica se nenhum arquivo foi selecionado no campo de foto
    if (foto === 0) {
        // Exibe um alerta pedindo ao usuário para adicionar uma foto
        alert('Por favor, adicione uma foto bem bonita do seu pet');
        // Interrompe a execução da função retornando false
        return false;
    }

    // Verifica se a idade é inválida: menor que 0, vazia ou maior que 30
    if (idade < 0 || idade === '' || idade > 30) {
        // Exibe um alerta pedindo ao usuário para fornecer uma idade válida
        alert("Por favor, digite uma idade válida do seu pet");
        // Interrompe a execução da função retornando false
        return false;
    }

    // Se todas as validações forem passadas, retorna true, indicando que o formulário é válido
    return true;
}
