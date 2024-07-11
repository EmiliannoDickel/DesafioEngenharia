document.addEventListener("DOMContentLoaded", function() {
    // Obtém o modal
    var modal = document.getElementById("entrada");

    // Obtém o botão que abre o modal
    var btn = document.getElementById("btn-cadastro");

    // Obtém o elemento <span> que fecha o modal
    var span = document.getElementsByClassName("fechar")[0];

    // Quando o usuário clicar no botão, abre o modal
    btn.onclick = function() {
      modal.styles.display = "block";
    }

    // Quando o usuário clicar no <span> (x), fecha o modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // Quando o usuário clicar fora do modal, fecha o modal
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
});
