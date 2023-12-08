let totalGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    //calcular o preço e o subtotal
    let preco = quantidade * valorUnitario;
    
    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtoss');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span>${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    //atualizar valor total
    
    totalGeral = totalGeral + preco;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$${totalGeral }`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';

}