function getParameters() {
    var paramsRet = {}; // Usar um objeto para armazenar os parâmetros
    var url = window.location.href; // Obtém a URL
    var paramsStart = url.indexOf("?"); // Procura o "?" na URL

    if (paramsStart !== -1) {
        // Se encontrou o "?"
        var paramString = url.substring(paramsStart + 1); // Pega a parte da URL após o "?"
        paramString = decodeURIComponent(paramString); // Decodifica a URL
        var params = paramString.split("&"); // Separa os parâmetros por "&"

        for (var i = 0; i < params.length; i++) {
            var pairArray = params[i].split("="); // retorna trechos da string separados por =
            if (pairArray.length == 2) {
                // Substituir "+" por espaço e adicionar ao objeto de parâmetros
                paramsRet[pairArray[0]] = pairArray[1].replace(/\+/g, ' ');
            }
        }
        return paramsRet;
    }
    return null; // Se não encontrar "?" na URL, retorna null
}

// Obtém os parâmetros e exibe os dados
const params = getParameters();
if (params) {
    // Exibe os parâmetros na página
    document.querySelector('main').innerHTML = `
    <table class= table_form>
        <h2>História recebida com sucesso!</h2>
        <tr>
            <td><strong>Nome:</strong></td>
            <td>${params['nome']}</td>
        </tr>
        <tr>
            <td><strong>Email:</strong></td>
            <td>${params['email']}</td>
        </tr>
        <tr>
            <td><strong>Nome do Pet:</strong></td>
            <td>${params['pet']}</td>
        </tr>
        <tr>
            <td><strong>Idade do Pet:</strong></td>
            <td>${params['idade']}</td>
        </tr>
        <tr>
            <td><strong>Arquivo foto do pet:</strong></td>
            <td>${params['foto']}</td>
        </tr>
        <tr>
            <td><strong>Texto:</strong></td>
            <td>${params['texto']}</td>
        </tr>
    </table>
`;

}
