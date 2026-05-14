# Asincronía

### Asincronía en Javascript

JS no espera a que algo lento termine sino que continua su ejecucion y espera que se termine en un segundo plano

```js
console log('Empezando mi programa')

setTimeout (() => {
    console.log('Esta linea tardará 2 segundos o 2000ms')
}, 2000)  // 2000ms <>2seg

console.log('Fin de mi programa')
```

## API

Una API es un mensajero que lleva pedidos(peticiones) y trae respuestas.

Nuestras aplicaciones web, no va directo a una base de datos.
Nuestra aplicacion websiempre habla con una API.

Ejemplo: Cliente -> Mesero (API) -> Cocina (Backend o Base de Datos)

## HTTP + Verbos HTTP

HTTP -> Es un protocolo de comunicacion (Hypertext Tranfer Protocol)

HTTP es el lenguaje que las aplicaciones web usan para comunicarse.

Ejemplos:  
http://127.0.0.1:5500  
http://localhost:5500  

## Verbos HTTP

GET      -> obtener datos







En JS:

```js
JSON.stringify({ name: 'Alonso' })  //Convertimos a una cadena de texto con el formato JSON
JSON.parse('{ "name":"Alonso" }')  // Convertimos una cadena de texto con el formato JSON a un objeto JS
```

## STATUS CODE

https://http.cat/

200         -> Todo OK
201         -> Recurso creado (POST)
400         -> Error del cliente
401         -> No autenticado
403         -> Sin permisos  
404         -> El recurso no existe
500         -> Error del servidor

