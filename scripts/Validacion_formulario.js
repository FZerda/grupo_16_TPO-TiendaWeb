function validarFormulario(){
    const motivo=document.getElementById("motivo");
    const correo=document.getElementById("email");
    let error=false;
    if (!correo.checkValidity()){
        document.getElementById("correoError").innerHTML="Inserte una direccion de correo valida";
        error=true;
    }
    else{
        document.getElementById("correoError").innerHTML="";
    }
    if(motivo=="sel_motivo"){
        document.getElementById("motivoError").innerHTML="Inserte un motivo";
        error=true;
    }
    else{
        document.getElementById("motivoError").innerHTML="";
    }
    if(!error) {
        document.getElementById("envioCorrecto").innerHTML="Su mensaje se ha enviado correctamente";
    }
    return;
}