const $form = document.querySelector('#carta-a-santa')

//const nombre = document.querySelector('#nombre').value
//const nombre = document.formulario.nombre.value
const nombre = $form.nombre.value
const ciudad = $form.ciudad.value
const comportamiento = $form.comportamiento.value
const descripcionRegalo = $form['descripcion-regalo'].value



// console.log(nombre)
// console.log(ciudad)
// console.log(comportamiento)
// console.log(descripcionRegalo)



function validarNombre(nombre){
    if(nombre.length === 0)
        return 'El campo "Nombre" debe tener al menos 1 caracter'
    
    if(nombre.length >= 50)
        return 'El campo "Nombre" debe tener menos de 50 caracteres'
    
    if(!/^[a-z]+$/i.test(nombre)){
        return 'El campo Nombre solo admite letras'
    }
            
    if(nombre.length <50)
        return ''
}
// TAREA:
// validarCiudad
// validarDescripcionRegalo


function validarCiudad(ciudad){
    if(ciudad.length === 0){
        return 'Por favor, elegir ciudad de residencia';
    }
    return '';
}

function validarDescripcionRegalo(descripcionRegalo){
    if(descripcionRegalo.length === 0){
        return 'Completar el recuadro con qué te gustaría recibir esta Navidad'
    }
    if(descripcionRegalo.length >= 100){
        return 'El campo descripción del regalo no debe tener más de 100 caracteres'
    }
    if(!/^[a-z0-9]+$/i.test(descripcionRegalo))
        return 'El campo descripción regalo solo puede tener letras o números'
        
    return '';
}

function validarFormulario(event){
    const $form = document.querySelector('#carta-a-santa')
    const nombre = $form.nombre.value
    const ciudad = $form.ciudad.value
    const descripcionRegalo = $form["descripcion-regalo"].value

    const errorNombre = validarNombre(nombre)
    const errorCiudad = validarCiudad(ciudad)
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo)
     
    const errores = {nombre: errorNombre, ciudad: errorCiudad, 'descripcion-regalo': errorDescripcionRegalo} // cambié descripcionRegalo por descripcion-regalo para usarlo como key

    let esExito = manejarErrores(errores) === 0
    if(esExito){
        $form.className = 'oculto'
        document.querySelector('#exito').className = ''
        
        setTimeout(function(){window.location.href}, 5000)

    }


    event.preventDefault()    
}

function borrarErrores(){
    document.querySelector('#errores').innerText = ''
}


function manejarErrores(errores){ //está hecho 2 veces porque vamos a usar objetos para hacer esta funcion
    const keys = Object.keys(errores)
    const $errores = document.querySelector('#errores')
    borrarErrores()
    let cantErrores = 0
    
    keys.forEach(function(key){
        const error = errores[key]

        if(error){
            cantErrores++
            $form[key].className = "error"

            const $error = document.createElement('li')
            $error.innerText = error
            $errores.appendChild($error)
            

            
        }else{
            $form[key].className = ""
        }

    })
    return cantErrores
//      errorNombre = errores.nombre
//      errorCiudad = errores.ciudad
//      errorDescripcionRegalo = errores.descripcionRegalo

//      if(errorNombre){ // acá, si errorNombre no es vacío entra al if
//          $form.nombre.className = "error"
//      }else{
//         $form.nombre.className = ""
//      }
//      if(errorCiudad){
//          $form.ciudad.className = "error"
//     }else{
//         $form.ciudad.className = ""
//     }
//     if(errorDescripcionRegalo){
//         $form["descripcion-regalo"].className = "error"
//    }else{
//     $form["descripcion-regalo"].className = ""
//    }
}

//object.keys(objeto) -> devuelve el nombre referido a cada key
//object.values(objeto) -> devuelve el valor de cada key


Object.keys(errores).forEach(function(key){
    if(error){
        $form.error.className = "error"
    }else{
        $form.error.className = ""
    }
})



/////////////////////////////////////////////////////
/////////////////RegEx "//.test('')" ////////////////  mdn regular expresions (para más info)
/////////////////////////////////////////////////////

//      /abc/.test('asdasdabcasdasdasd') da true porque el texto contiene abc en algun lado
//      /^abc/.test('abcasdasdasd') da true porque el texto COMIENZA con abc
//      /^abc[0-9]+/.test('abc1242352345123') da true porque el texto comienza en abc y luego lo siguen uno o más numeros
//      /^abc[0-9]*/.test('abc1242352345123') da true porque el texto comienza en abc y/o luego lo siguen numeros (puede no venir un numero)
//      /^abc[0-9]{1}/.test('abc1a') da true porque el texto comienza en abc y/o luego lo sigue un solo numero
//          puedo elegir cant de numeros usando coma: {1,3} (ahí deberían ir 3 numeros despues del abc)
//      el $ significa "quiero que termine de esta manera"
//      /[a-z]/i.test('') la i sirve para decir que no me importa si se usa mayusculas

// event bubbling
//document.querySelectorAll('*').forEach(function(element){element.onclick = function(){console.log(this.tagName)}})

$form.onsubmit = validarFormulario