// ajustes-globais.js
// Lê o que foi salvo na página de Acessibilidade e aplica na página atual.
// Fica na pasta raiz do site e entra em TODAS as páginas.

(function () {
  // lê do navegador sem quebrar se o armazenamento estiver bloqueado
  function ler(chave, padrao) {
    try {
      var valor = localStorage.getItem(chave);
      return valor === null ? padrao : valor;
    } catch (erro) {
      return padrao;
    }
  }

  function aplicarAjustes() {
    var corpo = document.body;

    var tamanho = ler("tamanho", "100");
    var espacamento = ler("espacamento", "normal");
    var cores = ler("cores", "padrao");
    var movimento = ler("movimento", "false") === "true";
    var teclado = ler("teclado", "false") === "true";

    document.documentElement.style.fontSize = tamanho + "%";

    corpo.classList.toggle("amplo", espacamento === "amplo");
    corpo.classList.toggle("escuro", cores === "escuro");
    corpo.classList.toggle("contraste", cores === "contraste");
    corpo.classList.toggle("sem-movimento", movimento);
    corpo.classList.toggle("foco-forte", teclado);

  }

  window.aplicarAjustes = aplicarAjustes;
  aplicarAjustes();

  // se o ajuste mudar em outra aba aberta, atualiza esta também
  window.addEventListener("storage", aplicarAjustes);
})();