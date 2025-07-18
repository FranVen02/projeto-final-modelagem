let res = document.getElementById('res')
let btnAtualizar = document.getElementById('btnAtualizar')

btnAtualizar.addEventListener('click', (e) => {
    e.preventDefault()

    let id = document.getElementById('codSell').value
    let quantity = document.getElementById('quantity').value
    let buyDate = document.getElementById('buyDate').value
    let unitPrice = document.getElementById('unitPrice').value
    let appliedDiscount = document.getElementById('appliedDiscount').value
    let payment = document.getElementById("payment").value
    let status = appliedDiscount - (appliedDiscount * (payment / 100))

    const finalPrice = ((unitPrice * quantity) - (unitPrice * quantity * (appliedDiscount/100))).toFixed(2)

    let usuario_id = document.getElementById('usuario_id').value
    let produto_id = document.getElementById('produto_id').value
    

     const valores = {
        quantity: quantity,
        buyDate: buyDate,
        unitPrice: unitPrice,
        appliedDiscount: appliedDiscount,
        payment: payment,
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
            
            res.innerHTML += `A quantia é: ${dados.quantity} <br>`
            res.innerHTML += `A data da compra é: ${dados.buyDate} <br>`
            res.innerHTML += `O preço unitário é: ${dados.unitPrice} <br>`
            res.innerHTML += `O desconto aplicado é: ${dados.appliedDiscount}% <br>`
            res.innerHTML += `O preço final é: ${dados.finalPrice} <br>`
            res.innerHTML += `A forma pagamento é: ${dados.payment} <br>`
            res.innerHTML += `O status é: ${dados.status} <br>`
            res.innerHTML += `O código do usuário é: ${dados.usuario_id} <br>`
            res.innerHTML += `O código do produto é: ${dados.produto_id} <br>`
        }else{
            res.innerHTML = 'Dados inválidos.';
            console.log('Dados inválidos.')
        }
    })
    .catch((err) =>{
        
        res.innerHTML = 'Erro ao atualizar a compra:' + err
        console.error('Erro ao atualizar a comrpa:', err)
    })
})