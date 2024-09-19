// validacion de nombre.



function validForm() {

    var name, lastname, age, pass, email;

    name = validNombre(document.getElementById("nombre").value)
    if (!name) {
        document.getElementById("nombreIncorrecto").innerHTML = "El nombre ingresado no es valido";
    } else {
        document.getElementById("nombreIncorrecto").innerHTML = " ";
    }

    lastname = validNombre(document.getElementById("apellido").value);
    if (!lastname) {
        document.getElementById("apellidoIncorrecto").innerHTML = "El apellido ingresadp no es valido";
    } else {
        document.getElementById("apellidoIncorrecto").innerHTML = " ";
    }

    age = validAge(document.getElementById("edad").value);
    if (!age) {
        document.getElementById("edadIncorrecta").innerHTML = "La edad ingresada no es valida";
    } else {
        document.getElementById("edadIncorrecta").innerHTML = " ";
    }

    pass = validPassword(document.getElementById("password").value);
    if (!pass) {
        document.getElementById("passwordIncorrecta").innerHTML = "La contraseña no es valida"
    } else {
        document.getElementById("passwordIncorrecta").innerHTML = " "
    }

   email = validEmail(document.getElementById("email").value)
   if(!email){
    document.getElementById("emailIncorrecto").innerHTML = "El email solo permite @google.com @outlook.com @icloud.com"
   }else{
    document.getElementById("emailIncorrecto").innerHTML = " "
   }


};


function validNombre(nombre) {

    // creo esta variable para ver lo que puede contener el nombre
    const patronNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
    // un flag para manejar el retorno
    var flag = true;

    // verifico si cumple las condiciones de expresiones regulares
    if (!patronNombre.test(nombre)) {
        flag = false;
    }
    // verifico valor minimo y maxima
    if (nombre.length < 2 || nombre.length > 20) {
        flag = false;
    }
    return flag;
}

function validAge(age) {


    var flag = true;
    var patron = /^\d+$/;

    if (!patron.test(age) || age > 100) {
        flag = false
    }

    return flag;
}

function validPassword(pass) {
    var patron = /^a-zA-Z0123456789.$&/;
    var flag = true;

    if (!patron.test(pass) || !passwordLength(pass)) {
        flag = false;
    }
    return flag;

}

function passwordLength(pass) {
    if (pass < 9 || pass > 20) {
        return false;
    }
    return true;
}


function validEmail(email){
    var flag = true;
    var array = ["@gmail.com", "@outlook.com", "icloud.com"];

    for(var i=0;i<array.length;i++){
        if(!email.includes(array[i])){
            return false;
        }
    }
    return flag;
}