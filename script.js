let nf = []

function cadastrar(){

    let tabela = {
        Produto:document.getElementById('Produto').value,
        Quantidade:document.getElementById('Quantidade').value,
        Preco: parseFloat(document.getElementById('Preco').value) 
    }
    
    nf.push(tabela) 
    }

         // Função para exibir os dados da nota fiscal
function exibirDados() {
         // Percorre a lista de itens na nota fiscal
    for (let i = 0; i < nf.length; i++) {
         // Exibe os detalhes de cada item
        document.write("Produto: " + nf[i].Produto + "<br>");              // Exibe o nome do produto
        document.write("Quantidade: " + nf[i].Quantidade + "<br>");        // Exibe a quantidade do produto
        document.write("Preço: " + nf[i].Preco + "<br>");                  // Exibe o preço unitário do produto
        let total = nf[i].Preco * nf[i].Quantidade;                        // Calcula o valor total para o item
        document.write("Valor Total: " + total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "<br>");
                                                                           // Exibe o valor total com duas casas decimais
    }
}