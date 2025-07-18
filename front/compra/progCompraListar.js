let res = document.getElementById("res")
let btnListar = document.getElementById('btnListar')

btnListar.addEventListener('click', () =>{

    fetch("http://localhost:3000/compra")
    .then(resp => resp.json())
    .then(dados => {
        dados.forEach(dad => {

            res.innerHTML +=
                `
                <table border="1" cellpadding="8">
            <tr>
                <td>${dad.usuario_id}</td>
                <td>${dad.produto_id}</td>
                <td>${dad.codSell}</td>
                <td>${dad.quantity}</td>
                <td>${dad.buyDate}</td>
                <td>${dad.unitPrice}</td>
                <td>${dad.appliedDiscount}</td>
                <td>${dad.finalPrice}</td>
                <td>${dad.payment}</td>
                <td>${dad.status}</td>
            </tr>
            </table>
        `
        })
    })
    .catch((err) => {
        console.error("Erro na listagem das compras: ", err)
    })

})