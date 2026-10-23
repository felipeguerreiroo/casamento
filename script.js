
function atualizarContagem() {
    const casamento = new Date("2028-01-12T17:30:00-03:00");
    const agora = new Date();

    let diferenca = casamento.getTime() - agora.getTime();

    if (diferenca <= 0) {
        document.getElementById("dias").textContent = "0";
        document.getElementById("horas").textContent = "0";
        document.getElementById("minutos").textContent = "0";
        document.getElementById("segundos").textContent = "0";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );
    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );
    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}

atualizarContagem();
setInterval(atualizarContagem, 1000);
