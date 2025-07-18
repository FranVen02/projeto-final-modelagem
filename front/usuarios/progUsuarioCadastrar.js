let res = document.getElementById("res")
let btnCadastrarLote = document.getElementById('btnCadastrarLote')
let btnCadastrar = document.getElementById('btnCadastrar')

btnCadastrarLote.addEventListener("click", (e) => {
    e.preventDefault()

    fetch("https://dummyjson.com/users")
        .then(resp => resp.json())
        .then(dados => {
            dados.users.forEach(dad => {

                console.log(dad)
                const valores = {
                    firstName: dad.firstName,
                    lastName: dad.lastName,
                    age: dad.age,
                    email: dad.email,
                    phone: dad.phone,
                    city: dad.city,
                    state: dad.state,
                    birthDate: dad.birthDate
                }
                console.log("Valores: ", valores)

                fetch("http://localhost:3000/usuario", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(valores)
                })
                    .then(resp => resp.json())
                    .then(() => {
                        res.innerHTML = "Lote registrado com sucesso."
                        console.log('Lote registrado com sucesso.')
                    })
                    .catch((err) => {
                        console.error("Erro no registro do lote: ", err)
                    })
            })
        })
        .catch((err) => {
            console.error("Erro no registro do lote: ", err)
        })
})

btnCadastrar.addEventListener("click", (e) => {
    e.preventDefault()

    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let age = document.getElementById("age").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let address = document.getElementById("address").value
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value
    let birthDate = document.getElementById("birthDate").value

    const valores = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        phone: phone,
        city: city,
        state: state,
        birthDate: birthDate
    }
    fetch("http://localhost:3000/usuario", {
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
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${age}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${address}</td>
                <td>${city}</td>
                <td>${state}</td>
                <td><img src="${birthDate}"></td>
            </tr>
            </table>
        `
        })
})