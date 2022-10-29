function validarFormulario(){
    const motivo=document.getElementById("motivo");
    const correo=document.getElementById("correo");
    if (!correo.checkValidity()){
        document.getElementById("correoError").innerHTML="Inserte una direccion de correo valida";
    }
    else{
        document.getElementById("correoError").innerHTML="";
    }
    if(motivo=="sel_motivo"){
        document.getElementById("motivoError").innerHTML="Inserte un motivo";
    }
    else{
        document.getElementById("motivoError").innerHTML="";
    }
    return;
}