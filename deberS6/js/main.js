// function msm(){
//     preventDefault();
//     $nombre = document.getElementById(`NOMBRE`).value 
//     $mensaje = document.getElementById(`MENSAJE`).value 
//     $email = document.getElementById(`EMAIL`).value 
//     $model = document.createElement('div')
//     $img = document.getElementById(`IMG_PERFIL`)
//     $div_informacion = document.createElement('div')
//     $div_informacion.innerHTML = `<p>Tu nombre es: ${$nombre}}<br>Tu email es: ${$email}<br>Tu mensaje es: ${$mensaje}<br>/p>`
//     $model.appendChild($img)
//     $model.appendChild($div_informacion)
//     $model.classList.add('Model')
//     document.body.appendChild($model)
// }



    



document.addEventListener('submit', (msm)=>{
    msm.preventDefault();
    $nombre = document.getElementById(`NOMBRE`).value 
    $mensaje = document.getElementById(`MENSAJE`).value 
    $email = document.getElementById(`EMAIL`).value 

    $container_model = document.createElement('div')
    $container_model.class = "elcontainerModel"
    $container_model.classList.add('container_model')
    
    $boton = document.createElement('button')
    $boton.textContent= 'ACEPTAR'
    $boton.class = "boton_model"
    
   
    
    $boton.classList.add('boton_model')
    

    $model  = document.createElement('div')
    $model.classList.add('model')

    $imagenPerfil = document.createElement('img')
    $imagenPerfil.src = "../sources/perfil-picture.jpg"
    $imagenPerfil.classList.add('model_imagen')

    $div_informacion = document.createElement('div')
    $div_informacion.innerHTML = `<br><h2 class="model_titulo">Informacion que sera enviada</h2><br><p>Al nombre de: ${$nombre}<br>Con el correo: ${$email}<br>El mensaje es:<br> ${$mensaje}<br></p>`
    $model.appendChild($imagenPerfil)
    $model.appendChild($div_informacion)
    $model.appendChild($boton)
    $container_model.appendChild($model)
    
    

    window.document.body.appendChild($container_model)
})

