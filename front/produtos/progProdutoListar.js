let res = document.getElementById("res")
let btnListar = document.getElementById('btnListar')

btnListar.addEventListener('click', () =>{

    fetch("http://localhost:3000/produto")
    .then(resp => resp.json())
    .then(dados => {
        dados.forEach(dad => {

            res.innerHTML +=
                `
                <table border="1" cellpadding="8">
            <tr>
                <td>${dad.title}</td>
                <td>${dad.description}</td>
                <td>${dad.category}</td>
                <td>${dad.price}</td>
                <td>${dad.discountPercentage}</td>
                <td>${dad.precoFinal}</td>
                <td>${dad.stock}</td>
                <td>${dad.brand}</td>
                <td><img src="${dad.thumbnail}"></td>
            </tr>
            </table>
        `
        })
    })
    .catch((err) => {
        console.error("Erro na listagem dos produtos: ", err)
    })

})