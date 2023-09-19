function confirmarEntrada() {
    // Obtém o nome digitado pelo usuário
    var nome = document.getElementById("nome").value;

    // Salva o nome na sessionStorage
    sessionStorage.setItem("nome", nome);

    // Redireciona para a tela de confirmação
    window.location.href = "confirmacao.html";
}
