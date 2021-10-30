function validar(){
    var nombre, apellido, email, expresion;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    email = document.getElementById("email").value;
    
    expresion = /\w+@\w+\.+[a-z]/;
    
    if(nombre ===""){
        alert("El campo NOMBRE se encuentra vacio.");
        return false;
    }
    else if(apellido ===""){
        alert("El campo APELLIDO se encuentra vacio.");
        return false;    
    }
    else if(email ===""){
        alert("El campo CORREO ELECTRONICO se encuentra vacio.");
        return false;
    }
    else if(nombre.lengt>30){
        alert("El NOMBRE es muy largo.");
        return false;    
    }
    else if(apellido.lengt>60){
        alert("El APELLIDO es muy largo.");
        return false;   
    }
    else if(email.lengt>80){
        alert("El EMAIL es muy largo.");
        return false;   
    }
    else if(!expresion.test(email)){
        alert("El EMAIL no es válido.")
        return false;
    }
    }