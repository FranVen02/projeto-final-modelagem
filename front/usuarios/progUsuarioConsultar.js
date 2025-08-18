let res = document.getElementById('res')
let btnConsultar = document.getElementById('btnConsultar')

btnConsultar.addEventListener('click', (e) =>{
    e.preventDefault()

    let firstName = document.getElementById('firstName').value

    fetch(`http://localhost:3000/usuario/${firstName}`)
    .then(resp => resp.json())
    .then(dados =>{

        console.log(dados)
        if(dados){

            res.innerHTML = 
            `
            <table border="1" cellpadding="8">
                <tr>
                    <td>${dados.firstName}</td>
                    <td>${dados.lastName}</td>
                    <td>${dados.age}</td>
                    <td>${dados.email}</td>
                    <td>${dados.phone}</td>
                    <td>${dados.address}</td>
                    <td>${dados.city}</td>
                    <td>${dados.state}</td>
                    <td>${dados.birthDate}</td>
                </tr>
            </table>
            `
        }else{

            console.log('Usuário não encontrado.')
            res.innerHTML = 'Usuário não encontrado.'
        }
    })
    .catch((err) =>{

        console.error('Erro ao encontrar usuário: ', err)
    })
})