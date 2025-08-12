let res = document.getElementById('res')
let btnCadastrar = document.getElementById('btnCadastrar')

btnCadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const quantity = Number(document.getElementById('quantity').value)
    const buyDate = document.getElementById('buyDate').value
    const unitPrice = Number(document.getElementById('unitPrice').value)
    const appliedDiscount = Number(document.getElementById('appliedDiscount').value)
    const payment = document.getElementById('payment').value
    const status = document.getElementById('status').value
    const usuario_id = Number(document.getElementById('usuario_id').value)
    const produto_id = Number(document.getElementById('produto_id').value)

    const finalPrice = ((unitPrice * quantity) - (unitPrice * quantity * (appliedDiscount/100))).toFixed(2)

    const valores = {
        quantity: quantity,
        buyDate: buyDate,
        unitPrice: unitPrice,
        appliedDiscount: appliedDiscount,
        finalPrice: finalPrice,
        payment: payment,
        status: status,
        usuario_id: usuario_id,
        produto_id: produto_id
    }
    res.innerHTML = ''

    fetch(`http://localhost:3000/compra`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })

    .then(resp => resp.json())
    .then(dados =>{

        res.innerHTML =
        `
        <table border='1' cellpadding='8'>
            <tr>
                <td>${dados.quantity}</td>
                <td>${dados.buyDate}</td>
                <td>${dados.unitPrice}</td>
                <td>${dados.appliedDiscount}</td>
                <td>${dados.finalPrice}</td>
                <td>${dados.payment}</td>
                <td>${dados.status}</td>
                <td>Chave de usuário: ${dados.usuario_id}</td>
                <td>Chave de produto: ${dados.produto_id}</td>
            </tr>
        </table>
        `
    })
    .catch((err)=>{

        console.error('Erro ao cadastrar a compra!',err)
    })
})