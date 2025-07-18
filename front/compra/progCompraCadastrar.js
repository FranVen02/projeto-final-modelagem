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

        res.innerHTML += `A quantia é: ${dados.quantity} <br>`
        res.innerHTML += `A data da compra é: ${dados.buyDate} <br>`
        res.innerHTML += `O preço unitário é: ${dados.unitPrice} <br>`
        res.innerHTML += `O desconto aplicado é: ${dados.appliedDiscount}% <br>`
        res.innerHTML += `O preço final é: ${dados.finalPrice} <br>`
        res.innerHTML += `A forma pagamento é: ${dados.payment} <br>`
        res.innerHTML += `O status é: ${dados.status} <br>`
        res.innerHTML += `O código do usuário é: ${dados.usuario_id} <br>`
        res.innerHTML += `O código do produto é: ${dados.produto_id} <br>`
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar a compra!',err)
    })
})