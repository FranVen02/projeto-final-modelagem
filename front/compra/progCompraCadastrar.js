let res = document.getElementById("res")
let btnCadastrar = document.getElementById('btnCadastrar')

btnCadastrar.addEventListener("click", (e) => {
    e.preventDefault()

    let amount = document.getElementById("amount").value
    let buyDate = document.getElementById("buyDate").value
    let unitPrice = document.getElementById("unitPrice").value
    let appliedDiscount = document.getElementById("appliedDiscount").value
    let finalPrice = document.getElementById("finalPrice").value
    let payment = document.getElementById("payment").value
    let status = document.getElementById("status").value

    const valores = {
        amount: amount,
        buyDate: buyDate,
        unitPrice: unitPrice,
        appliedDiscount: appliedDiscount,
        finalPrice: finalPrice,
        status: status,
        state: state,
        birthDate: birthDate
    }
    fetch("http://localhost:3000/compra", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(valores)
    })
        .then(resp => resp.body)
        .then(() => {
            res.innerHTML =
                `
                <table border="1" cellpadding="8">
            <tr>
                <td>${amount}</td>
                <td>${buyDate}</td>
                <td>${unitPrice}</td>
                <td>${appliedDiscount}</td>
                <td>${finalPrice}</td>
                <td>${payment}</td>
                <td>${status}</td>
            </tr>
            </table>
        `
        })
})