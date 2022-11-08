function validarFormulario(){
    const motivo=document.getElementById("motivo");
    const correo=document.getElementById("email");
    let error=false;
    if (!(document.getElementById("email").checkvalidity())){
        alert("Inserte una direccion de correo valida")
        document.getElementById("correoError").innerHTML="Inserte una direccion de correo valida";
        return false;
    }
    else{
        document.getElementById("correoError").innerHTML="";
    }
    if(motivo=="sel_motivo"){
        document.getElementById("motivoError").innerHTML="Inserte un motivo";
        return false;
    }
    else{
        document.getElementById("motivoError").innerHTML="";
    }
        document.getElementById("envioCorrecto").innerHTML="Su mensaje se ha enviado correctamente";
        return true;
}