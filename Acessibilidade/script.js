var form = document.getElementById("funcionalidades");
var texto = document.getElementById("texto");
var botaoParar = document.getElementById("parar");
var corpo = document.body;

// aplica os ajustes na página
function aplicar() {
  // tamanho do texto
  document.documentElement.style.fontSize = form.tamanho.value + "%";

  // espaçamento
  if (form.espacamento.value == "amplo") {
    corpo.classList.add("amplo");
  } else {
    corpo.classList.remove("amplo");
  }

  // cores
  corpo.classList.remove("escuro");
  corpo.classList.remove("contraste");
  if (form.cores.value == "escuro") {
    corpo.classList.add("escuro");
  }
  if (form.cores.value == "contraste") {
    corpo.classList.add("contraste");
  }

  // menos movimento
  if (form.movimento.checked) {
    corpo.classList.add("sem-movimento");
  } else {
    corpo.classList.remove("sem-movimento");
  }

  // destacar o Tab
  if (form.teclado.checked) {
    corpo.classList.add("foco-forte");
  } else {
    corpo.classList.remove("foco-forte");
  }

  // linguagem simples
  if (form.simples.checked) {
    texto.innerHTML =
      "<p>As plantas usam a luz do sol para fazer o próprio alimento.</p>" +
      "<p>Elas pegam gás carbônico do ar e água da terra.</p>" +
      "<p>Com a luz, transformam os dois em açúcar.</p>";
  } else {
    texto.innerHTML =
      "<p>As plantas realizam fotossíntese, processo pelo qual convertem energia luminosa em energia química.</p>" +
      "<p>Para isso, absorvem dióxido de carbono da atmosfera e água do solo.</p>" +
      "<p>Sob a ação da luz, esses compostos são transformados em glicose.</p>";
  }
}

// salva cada escolha no navegador
function salvar() {
  localStorage.setItem("tamanho", form.tamanho.value);
  localStorage.setItem("espacamento", form.espacamento.value);
  localStorage.setItem("cores", form.cores.value);
  localStorage.setItem("movimento", form.movimento.checked);
  localStorage.setItem("teclado", form.teclado.checked);
  localStorage.setItem("simples", form.simples.checked);
}

// lê o que foi salvo
function carregar() {
  if (localStorage.getItem("tamanho")) {
    form.tamanho.value = localStorage.getItem("tamanho");
    form.espacamento.value = localStorage.getItem("espacamento");
    form.cores.value = localStorage.getItem("cores");
    form.movimento.checked = localStorage.getItem("movimento") == "true";
    form.teclado.checked = localStorage.getItem("teclado") == "true";
    form.simples.checked = localStorage.getItem("simples") == "true";
  }
}

// quando mexer em qualquer opção
function mudou() {
  aplicar();
  salvar();
}

// botão Restaurar padrão
function restaurar() {
  form.reset();
  aplicar();
  salvar();
}

// botão Ouvir este texto
function ouvir() {
  speechSynthesis.cancel();
  var fala = new SpeechSynthesisUtterance(texto.innerText);
  fala.lang = "pt-BR";
  speechSynthesis.speak(fala);
  botaoParar.hidden = false;
}

// botão Parar áudio
function parar() {
  speechSynthesis.cancel();
  botaoParar.hidden = true;
}

form.addEventListener("change", mudou);
document.getElementById("restaurar").addEventListener("click", restaurar);
document.getElementById("ouvir").addEventListener("click", ouvir);
botaoParar.addEventListener("click", parar);

// ao abrir a página
carregar();
aplicar();