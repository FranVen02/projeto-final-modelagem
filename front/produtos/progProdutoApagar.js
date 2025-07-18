let res = document.getElementById("res")
let btnApagar = document.getElementById('btnApagar')

btnApagar.addEventListener('click', (e) =>{
    e.preventDefault()

    let id = document.getElementById('codProd').value

    fetch(`http://localhost:3000/produto/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp =>{

        console.log(resp)
        if(resp.status === 204){

            res.innerHTML = 'Os dados foram excluídos com sucesso.'
            console.log('Os dados foram excluídos com sucesso.')
        }else{
            
            res.innerHTML = 'Erro na exclusão dos dados.'
            console.error('Erro na exclusão dos dados.')
        }
    })

    .catch((err) => {
        console.error("Erro na exclusão dos produtos: ", err)
    })  
})