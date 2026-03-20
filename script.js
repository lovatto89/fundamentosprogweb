const form = document.getElementById("formContato");
const resposta = document.getElementById("resposta");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação de campos vazios
    if (nome === "" || email === "" || mensagem === "") {
        resposta.textContent = "Preencha todos os campos!";
        resposta.className = "mensagem erro";
        return;
    }

    // Validação de e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        resposta.textContent = "E-mail inválido!";
        resposta.className = "mensagem erro";
        return;
    }

    // Simulação de envio
    resposta.textContent = "Mensagem enviada com sucesso!";
    resposta.className = "mensagem sucesso";

    // Limpar formulário
    form.reset();
});