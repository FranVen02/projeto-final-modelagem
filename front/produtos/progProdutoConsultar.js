let res = document.getElementById('res')
let btnConsultar = document.getElementById('btnConsultar')

btnConsultar.addEventListener('click', (e) =>{
    e.preventDefault()

    let codProd = document.getElementById('codProd').value

    fetch(`http://localhost:3000/produto/${codProd}`)
    .then(resp => resp.json())
    .then(dados =>{

        console.log(dados)
        if(dados){

            res.innerHTML = 
            `
            <table border="1" cellpadding="8">
                <tr>
                    <td>${dados.title}</td>
                    <td>${dados.description}</td>
                    <td>${dados.category}</td>
                    <td>${dados.price}</td>
                    <td>${dados.discountPercentage}</td>
                    <td>${dados.stock}</td>
                    <td>${dados.brand}</td>
                    <td>${dados.thumbnail}</td>
                </tr>
            </table>
            `
        }else{

            console.log('Produto não encontrado.')
            res.innerHTML = 'Produto não encontrado.'
        }
    })
    .catch((err) =>{

        console.error('Erro ao encontrar produto: ', err)
    })
})