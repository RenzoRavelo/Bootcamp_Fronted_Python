const url = 'https://jsonplaceholder.typicode.com/users'

console.log(fetch(url))

const renderUsers = (users =[]) => {
    const divApp = document.querySelector('#app')

    let usersList = ''

    users.forEach(user => {
        usersList += `<h3>${user.id} - ${user.name} - ${user.username} - </h3>`
    })
    divApp.innerHTML = usersList
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        renderUsers(data)
    })
    .catch(error => {
        console.log (error)
    })

const fetchUserSinRetorno = async() => {    // Retorna un promesa(promise)
    const response = await fetch(url)

    const data = await response.json()
    
    console.log(data)
}

//fetchUserSinRetorno()

const fetUserConRetorno = async () => {
    const response = await fetch(url)

    return await response.json()
}

//fetchUserConRetorno()  //  Retorna una promesa
// .then(users => console.log(users))

const renderUsers = (users = []) =>  {
    const divApp = document.querySelector('#app')

    let usersLists = ''

    users.forEach(user => {
        usersLists += `
        <div>
            <h2>${user.id} - ${user.name}</h2>
        </div>`
    })
}


const fetchUsersConManejoDeErrores = async () => {
    try {
        const response = await fetch(url)

        console.log(response.status)  // 200

        if (response.status === 404) {
            console.log('Tuvimos problemas para cargar el resurso users')
            //return
            throw new Error('ERROR HTTP:' + response.status)
        }
    return await response.json() 
    } catch (error) {   // Manejamos errores inesperados como ausencia de Internet
        console.log(error)
    }
}

fetchUsersConManejoDeErrores()
.then(users => {
    console.log(users)
})

// TODO: Resolver estos ejercicios
// Mostrar un mensaje de cargando
// Mostrar solo usuarios de una ciudad, la ciudad es a su elección
// Mostrar cuántos usuarios hay en el listado de users
// //ienen hasta mañana para resolver estos ejercicios por discord envian las respuestas.