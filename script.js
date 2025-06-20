
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  });

  function showTab(event, id) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');
aplicarFiltro();
  }
        
   function aplicarFiltro() {
    const valorSelecionado = document.getElementById('filtroValor').value;
    const tabelaVisivel = document.querySelector('.tab-content.active table');
    if (!tabelaVisivel) return;

    tabelaVisivel.querySelectorAll('tbody tr').forEach(row => {
      const precoTexto = row.children[1].textContent.replace('R$', '').replace(',', '.').trim();
      const preco = parseFloat(precoTexto);
      let mostrar = true;

      if (!isNaN(preco)) {
        if (valorSelecionado === '50') mostrar = preco <= 50;
        else if (valorSelecionado === '100') mostrar = preco > 50 && preco <= 100;
        else if (valorSelecionado === '101') mostrar = preco > 100;
      }

      row.style.display = mostrar || valorSelecionado === 'todos' ? '' : 'none';
    });
  }

        function printTabelaPrecos() {
    const originalContent = document.body.innerHTML;
    const section = document.getElementById('precos').cloneNode(true);
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Imprimir Tabela de Preços</title>');
    printWindow.document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">');
    printWindow.document.write('<style>body{font-family:Montserrat,sans-serif;padding:20px;}table{width:100%;border-collapse:collapse;}th,td{border:1px solid #ccc;padding:8px;text-align:left;}th{background:#409FDA;color:#fff;}button{display:none;}</style>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(section.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  }



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
