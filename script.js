<script>
          document.addEventListener("DOMContentLoaded", () => {
            const buttons = document.querySelectorAll('.loja-categorias button');
            const produtos = document.querySelectorAll('.loja-lista .produto');
        
            buttons.forEach(button => {
              button.addEventListener('click', () => {
                // Remove a classe active de todos os botões
                buttons.forEach(btn => btn.classList.remove('active'));
                // Adiciona a classe active ao botão clicado
                button.classList.add('active');
        
                const category = button.textContent.trim();
        
                produtos.forEach(produto => {
                  if (category === 'Todos' || produto.dataset.category === category) {
                    produto.style.display = '';
                  } else {
                    produto.style.display = 'none';
                  }
                });
              });
            });
          });
    </script>
</body>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        const botoes = document.querySelectorAll(".loja-categorias button");
        const produtos = document.querySelectorAll(".loja-lista .produto");
    
        botoes.forEach(botao => {
          botao.addEventListener("click", () => {
            // Remover a classe 'active' de todos os botões
            botoes.forEach(btn => btn.classList.remove("active"));
            botao.classList.add("active");
    
            const categoria = botao.textContent.trim();
    
            produtos.forEach(produto => {
              const produtoCategoria = produto.getAttribute("data-category");
              if (categoria === "Todos" || produtoCategoria === categoria) {
                produto.style.display = "block";
              } else {
                produto.style.display = "none";
              }
            });
          });
        });
      });
</script>
</body>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const depoimentos = document.querySelectorAll('.depoimento');
    let atual = 0;

    function mostrarDepoimento() {
      depoimentos.forEach((dep, index) => {
        dep.classList.remove('ativo');
        if (index === atual) {
          dep.classList.add('ativo');
        }
      });
      atual = (atual + 1) % depoimentos.length;
    }

    // Troca de depoimento a cada 3 segundos
    mostrarDepoimento();
    setInterval(mostrarDepoimento, 4000);
  });
</script>
</body>
</html>
