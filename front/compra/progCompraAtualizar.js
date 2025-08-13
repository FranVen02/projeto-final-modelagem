let res = document.getElementById('res')
let btnAtualizar = document.getElementById('btnAtualizar')

btnAtualizar.addEventListener('click', (e) => {
    e.preventDefault()

    let id = document.getElementById('codSell').value
    let quantity = document.getElementById('quantity').value
    let buyDate = document.getElementById('buyDate').value
    let unitPrice = document.getElementById('unitPrice').value
    let appliedDiscount = document.getElementById('appliedDiscount').value
    let payment = document.getElementById('payment').value
    let status = document.getElementById('status').value

    const finalPrice = ((unitPrice * quantity) - (unitPrice * quantity * (appliedDiscount/100))).toFixed(2)

    let usuario_id = document.getElementById('usuario_id').value
    let produto_id = document.getElementById('produto_id').value

     const valores = {
        quantity: quantity,
        buyDate: buyDate,
        unitPrice: unitPrice,
        appliedDiscount: appliedDiscount,
        payment: payment,
        status: status,
        finalPrice: finalPrice,
        usuario_id: usuario_id,
        produto_id: produto_id
    };

    fetch(`http://localhost:3000/compra/${id}`, {
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
            <table border='1' cellpadding='8'>
                <tr>j
                    <td>Quantidade: ${dados.quantity}</td>
                    <td>Data de compra: ${dados.buyDate}</td>
                    <td>Preço unitário: ${dados.unitPrice}</td>
                    <td>Disconto aplicado: ${dados.appliedDiscount}</td>
                    <td>Preço final: ${dados.finalPrice}</td>
                    <td>Forma de pagamento: ${dados.payment}</td>
                    <td>Status de compra: ${dados.status}</td>
                    <td>Chave de usuário: ${dados.usuario_id}</td>
                    <td>Chave de produto: ${dados.produto_id}</td>
                </tr>
            </table>
            `
        }else{

            res.innerHTML = 'Dados inválidos.';
            console.log('Dados inválidos.')
        }
    })
    .catch((err) =>{
        
        res.innerHTML = 'Erro ao atualizar a compra:' + err
        console.error('Erro ao atualizar a compra:', err)
    })
})