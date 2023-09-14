function validarDatos(){
    window.event.preventDefault();
        if (document.form.nombre.value ==" "){
            alert ("campo nombre obligatorio")
            document.form.nombre.focus ();
        }else if (document.form.email.value ==" "){
            alert ("campo email obligatorio")
            document.form.email.focus ();
        }else if (document.form.asunto.value ==" "
        && document.form.asunto.length >=12){
            alert ("campo  obligatorio")
            document.form.asunto.focus ();
        }else if (document.form.mensaje.value ==" "
        && document.form.asunto.length >=50){
            alert ("campo mensaje obligatorio y debe tener hasta 50 caracteres")
            document.form.mensaje.focus ();
        }
    }
    
document.querySelector ("form").addEventListener ("submit", validarDatos)

function validarMail() {
    let mail= document.getElementById("correo").value 
    let mailMin= mail.toLowerCase()     
    if (mailMin == "" || mailMin.indexOf("@") == -1|| mailMin.indexOf(".com") == -1) {
        mensajeValido("E-mail correcto ")
    }  else {
        mensajeInvalido("E-mail inválido ")
    }
}

