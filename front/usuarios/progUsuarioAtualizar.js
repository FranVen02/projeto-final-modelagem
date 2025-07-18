let res = document.getElementById('res')
let btnAtualizar = document.getElementById('btnAtualizar')

btnAtualizar.addEventListener('click', (e) => {
    e.preventDefault()

    let id = Number(document.getElementById('codUser').value)
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let age = Number(document.getElementById('age').value)
    let email = document.getElementById('email').value
    let phone = Number(document.getElementById('phone').value)
    let address = document.getElementById('address').value
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let birthDate = document.getElementById('birthDate').value
    

     const valores = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        phone: phone,
        address: address,
        city: city,
        state: state,
        birthDate: birthDate
    };

    fetch(`http://localhost:3000/usuario/${id}`, {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados => {

        console.log(dados)
        if(dados){
            
            res.innerHTML = 
            `
            Nome: ${dados.firstName} ${dados.lastName}<br>
            Idade: ${dados.age}<br>
            Email: ${dados.email}<br>
            Telefone: ${dados.phone}<br>
            Endereço: ${dados.address}<br>
            Cidade: ${dados.city}<br>
            EStado: ${dados.state}<br>
            Data de Nascimento: ${dados.birthDate}<hr>
            `
        }else{

            res.innerHTML = 'Dados inválidos.';
            console.log('Dados inválidos.')
        }
    })
    .catch((err) =>{
        
        res.innerHTML = 'Erro ao atualizar o produto:' + err
        console.error('Erro ao atualizar o produto:', err)
    })
})