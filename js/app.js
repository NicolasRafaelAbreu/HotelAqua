window.addEventListener('load', inicio);

function inicio(){
    document.querySelector("#btnReservar").addEventListener('click', realizarReserva);
};

function realizarReserva(){
    let nombre = document.querySelector('#txtNombre').value;
    let apellido = document.querySelector('#txtApellido').value;
    let numeroDeContacto = document.querySelector('#numeroDeTelefono').value;
    let checkIn = document.querySelector('#txtCheck-in').value;
    let checkOut = document.querySelector('#txtCheck-out').value;
    let tipoHab = document.querySelector('#txtNumTarjeta').value;
    let verificado = verificarDatos(nombre, apellido, numeroDeContacto);
    if(verificado){
        let mensaje = `Hola queria saber si tiene disponibilidad para hacer una reserva de una habitación ${tipoHab} a nombre de ${nombre} ${apellido}, número de contacto ${numeroDeContacto}, con ingreso el día ${checkIn} y salida el ${checkOut}, aguardo su confirmación, gracias.`;
        var url = "https://api.whatsapp.com/send?phone=59899535316&text="+encodeURIComponent(mensaje);
        window.open(url);
    };
};

function verificarDatos(nombre, apellido, numeroDeContacto){
    let esValido = false;
    if(nombre.length > 2){
        if(apellido.length > 2){
            if(numeroDeContacto.length > 5){
                esValido = true;
            }else{
                alert("Número de Telefono incorrecto!");
            };
        }else{
            alert("El Apellido tiene que tener un minimo de 3 caracteres!");
        };
    }else{
        alert("El Nombre tiene que tener un minimo de 3 caracteres!");
    };
    return esValido;
};