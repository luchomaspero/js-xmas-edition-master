function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'El campo "Nombre" debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') ===
      'El campo "Nombre" debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
      validarNombre('Fabrizio') === '',
      "Validar nombre no validó un nombre válido"
  )

  console.assert(validarNombre('123123') === 'El campo Nombre solo admite letras',
  "Validar nombre no validó que el nombre sólo tiene letras")
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'Por favor, elegir ciudad de residencia', 'ValidarCiudad no validó que la ciudad no sea vacío'
    )
    console.assert(
        validarCiudad('Catamarca') === '',
        "Validar ciudad no validó una ciudad válida"
    )
}

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'Completar el recuadro con qué te gustaría recibir esta Navidad' , 'ValidarDescripcionRegalo no validó que la solicitud del regalo no sea vacío'
    )
    console.assert(
        validarDescripcionRegalo('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'El campo descripción del regalo no debe tener más de 100 caracteres', 'Validar descripcion regalo no validó que el campo sea menor a 100 caracteres'
    )
    console.assert(validarDescripcionRegalo('Moto') === '',
    "Validar Descripcion Regalo no validó una descripción válida"
    )
    console.assert(validarDescripcionRegalo('.,.,.,..,') === 'El campo descripción regalo solo puede tener letras o números',
    "Descripcion regalo no validó que el texto tenga solo numeros y/o letras"
    )
}
probarValidarDescripcionRegalo()
probarValidarNombre();
probarValidarCiudad();