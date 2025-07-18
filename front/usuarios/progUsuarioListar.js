let res = document.getElementById("res")
let btnListar = document.getElementById('btnListar')

btnListar.addEventListener('click', () =>{

    fetch("http://localhost:3000/usuario")
    .then(resp => resp.json())
    .then(dados => {
        dados.forEach(dad => {

            res.innerHTML +=
                `
                <table border="1" cellpadding="8">
            <tr>
                <td>${dad.firstName}</td>
                <td>${dad.lastName}</td>
                <td>${dad.age}</td>
                <td>${dad.email}</td>
                <td>${dad.phone}</td>
                <td>${dad.birthDate}</td>
                <td>${dad.address}</td>
                <td>${dad.state}</td>
                <td><img src="${dad.city}"></td>
            </tr>
            </table>
        `
        })
    })
    .catch((err) => {
        console.error("Erro na listagem dos produtos: ", err)
    })

})