const formulario = document.getElementById("formProduto");
const campoNome = document.getElementById("nome");
const campoPreco = document.getElementById('preco');
const campoCategoria = document.getElementById("categoria");
const campoBusca = document.getElementById("busca");
const areaLista = document.getElementById("lista-produtos");
const titulo = document.querySelector('h2');
const botao = document.querySelector('button');
const btnTodos = document.getElementById("btnTodos");
const btnEletronicos = document.getElementById("btnEletronicos");
const btnPerifericos = document.getElementById("btnPerifericos");


//produtos cadastrados:
const produtos = [
    { nome: "Notebook", preco: 3500, categoria: "Eletrônicos" },
    { nome: "Mouse", preco: 120, categoria: "Periféricos" },
    { nome: "Celular", preco: 1340, categoria: "Eletrônicos" },
    { nome: "Teclado", preco: 360, categoria: "Periféricos" }
]

//criando os cards:
function renderizarProdutos(lista) {
    const cards = lista.map(function(produto) {
        const { nome, preco, categoria } = produto;

        return '<div class="card">' + '<h3>' + nome + '</h3>' + '<p>' + categoria + '</p>' + '<p>R$ ' + preco + '</p>' + '</div>';
    });
    areaLista.innerHTML = cards.join("");
}

formulario.addEventListener("submit", function(event) {
    // Evita que a página recarregue ao enviar o formulário
    event.preventDefault();

    const nome = campoNome.value;
    const preco = campoPreco.value;
    const categoria = campoCategoria.value;
    
    produtos.push({ nome: nome, preco: preco, categoria: categoria });
    renderizarProdutos(produtos);

    titulo.textContent = 'Produto ' + nome + ' Salvo!';
    
    botao.style.backgroundColor = '#27ae60';
    botao.textContent = 'Salvo com Sucesso!';
    //alert("Produto '" + campoNome.value + "' cadastrado com sucesso!");
    });

    renderizarProdutos(produtos);

    campoBusca.addEventListener("input", function() {
        const texto = campoBusca.value.toLowerCase();
        const filtrados = produtos.filter(function(produto) {
            return produto.nome.toLowerCase().includes(texto);
        });
        renderizarProdutos(filtrados);
    });

    // Botões de filtro:

    btnTodos.addEventListener("click", function() {
        renderizarProdutos(produtos);
    });
    
    btnEletronicos.addEventListener("click", function() {
        const filtrados = produtos.filter(function(produto) {
            return produto.categoria === "Eletrônicos";
        });
    
        renderizarProdutos(filtrados);
    });
    
    btnPerifericos.addEventListener("click", function() {
        const filtrados = produtos.filter(function(produto) {
            return produto.categoria === "Periféricos";
        });
    
        renderizarProdutos(filtrados);
    });