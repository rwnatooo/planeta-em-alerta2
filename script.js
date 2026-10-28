
const year = document.getElementById("year");
const shareButton = document.getElementById("shareButton");
const message = document.getElementById("mensagem");

// Atualiza automaticamente o ano do rodapé.
year.textContent = new Date().getFullYear();

// Compartilha a campanha ou copia o texto para divulgação.
shareButton.addEventListener("click", async () => {
  const shareData = {
    title: "Planeta em Alerta",
    text: "Conheça os fatos científicos sobre o aquecimento global. Informe-se e ajude a combater a desinformação climática!",
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);

      message.textContent =
        "Obrigado por divulgar a conscientização climática!";

    } else if (
      navigator.clipboard &&
      window.isSecureContext
    ) {
      await navigator.clipboard.writeText(
        shareData.text + " " + shareData.url
      );

      message.textContent =
        "Texto e link copiados para compartilhar!";

    } else {
      message.textContent =
        "Copie o endereço desta página e compartilhe a campanha!";
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      message.textContent =
        "Compartilhe esta página com seus amigos e familiares!";
    }
  }
});
