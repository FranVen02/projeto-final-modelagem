let res = document.getElementById('res')
let btnAtualizar = document.getElementById('btnAtualizar')

btnAtualizar.addEventListener('click', (e) => {
    e.preventDefault()

    let id = document.getElementById('codProd').value
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    let category = document.getElementById('category').value
    let price = document.getElementById('price').value
    let discountPercentage = document.getElementById("discountPercentage").value
    let precoFinal = price - (price * (discountPercentage / 100))
    let stock = document.getElementById('stock').value
    let brand = document.getElementById('brand').value
    let thumbnail = document.getElementById('thumbnail').value
    

     const valores = {
        title: title,
        description: description,
        category: category,
        price: price,
        discountPercentage: discountPercentage,
        stock: stock,
        brand: brand,
        thumbnail: thumbnail
    };

    fetch(`http://localhost:3000/produto/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados =>{

        console.log(dados)
        if(dados){
            res.innerHTML = 
            `
            Título: ${dados.title} ${dados.description}<br>
            Categoria: ${dados.category}<br>
            Preço (pré-desconto): ${dados.price}<br>
            Desconto: ${dados.discountPercentage}<br>
            Preço final: ${precoFinal}<br>
            Estoque: ${dados.stock}<br>
            Marca: ${dados.brand}<br>
            Link da imagem: ${dados.thumbnail}<br>
            `
        }else{
            res.innerHTML = 'Dados inválidos.';
            console.log('Dados inválidos.')
        }
    })
    .catch((err) =>{
        
        res.innerHTML = 'Erro ao atualizar o produto:' + err
        console.error('Erro ao atualizar o produto:', err)
    })
})