console.log('Hola JS')


//const url ='https://jsonplaceholder.typicode.com/posts'

//console.log(fetch(url))  // Promise {<pending>}  -> Devuelve una Promesa (Promise)

// Estadosde una promesa  -> pending (pendiente), fulfilled(OK) rejected(Falló)

//fetch(url)
//    .then(response => response.json())  //Se ejecuta cuando la respuesta llego correctamente y ademas convertimos la respuesta a un objeto JS
 //   .then( data => {
 //       console.log(data)   //Aqui podemos usar el objeto JS
 //       console.log(data[0])
 //       console.log(data[0].title)
 //   })


// TODO: Renderizar la lista de posts del servicio jsonplaceholder con sus campos titulo, id y body

/*const renderPosts = (posts = []) => {
    const divApp = document.querySelector('#app')

    let postsList = ''

    posts.forEach(post => {
        postsList += `<h2>${post.id} - ${post.title}</h2>`
    })

    divApp.innerHTML = postsList
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        renderPosts(data)
    })
    .catch(error => {
        //Sirve para controlar errores inesperados
        console.log(error)
    })
*/


// TODO: Renderizar la lista de todos del servicio jsonplaceholder con su titulo, id
// URL: https://jsonplaceholder.typicode.com/todos

const url ='https://jsonplaceholder.typicode.com/todos'

console.log(fetch(url))


const renderTodo = (todo =[]) => {
    const divPlay = document.querySelector('#play')

    let todoList = ''

    todo.forEach(one => {
        todoList += `<h3>${one.id} - ${one.title}</h3>`
    })
    divPlay.innerHTML = todoList
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        renderTodo(data)
    })
.catch (error => {
    console.log(error)
})

