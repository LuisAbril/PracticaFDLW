function validarTitulo(input) {
    const msgError = document.getElementById("msgError");
    const boton = document.getElementById("sub");
    if (!input.value){
        msgError.textContent="El nombre del producto no puede ser vacio";
        boton.disabled=true;
    } else {
        const primL = input.value[0];
        const reg = /[A-Z]/;
        if(reg.test(primL)){
            msgError.textContent="";
            boton.disabled=false;
        } else {
            msgError.textContent="El nombre del producto debe empezar por mayúscula";
            boton.disabled=true;
        }
    }
    //https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api
}