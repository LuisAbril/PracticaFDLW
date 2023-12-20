const camposErroneos = [0,0,0,0]; //titulo, url1, url2, desc

function habilitarBoton(boton){
    let suma = 0;
    for (let i=0;i<camposErroneos.length;i++){
        suma += camposErroneos[i];
    }
    if (suma == 0) {
        boton.disable = false;
    }
}

function waitTimerTitulo(input) {
    var typingTimer;
    var endTypingTimer = 800; //ms
    input.addEventListener("input", function(){
        clearTimeout(typingTimer);

        typingTimer = setTimeout(function(){
            validarTitulo(input);
        }, endTypingTimer);

    })
}

function validarTitulo(input) {
    const msgError = document.getElementById("msgErrorTitulo");
    const boton = document.getElementById("sub");
    if (!input.value){
        msgError.textContent="El nombre del producto no puede estar vacío";
        boton.disabled = true;
        camposErroneos[0]=1;
    } else {
        const primL = input.value[0];
        const reg = /[A-Z]/;
        if(reg.test(primL)){
            msgError.textContent="";
            camposErroneos[0]=0;
            habilitarBoton(boton);
        } else {
            msgError.textContent="El nombre del producto debe empezar por mayúscula";
            boton.disabled=true;
            camposErroneos[0]=1;
        }
    }
}

function waitTimerURL1(input) {
    var typingTimer;
    var endTypingTimer = 800; //ms
    input.addEventListener("input", function(){
        clearTimeout(typingTimer);

        typingTimer = setTimeout(function(){
            validarURL1(input);
        }, endTypingTimer);

    })
}

function validarURL1(input) {
    const msgError = document.getElementById("msgErrorURL1");
    const boton = document.getElementById("sub");
    if (!input.value){
        msgError.textContent="La URL no puede estar vacía";
        boton.disabled=true;
        camposErroneos[1]=1;
    } else {
        const reg = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
        if (reg.test(input.value)) {
            msgError.textContent="";
            camposErroneos[1]=0;
            habilitarBoton(boton); 
        } else {
            msgError.textContent="La URL no es valida";
            boton.disabled=true;
            camposErroneos[1]=1;
        }
    }
}

function waitTimerURL2(input) {
    var typingTimer;
    var endTypingTimer = 800; //ms
    input.addEventListener("input", function(){
        clearTimeout(typingTimer);

        typingTimer = setTimeout(function(){
            validarURL2(input);
        }, endTypingTimer);

    })
}

function validarURL2(input) {
    const msgError = document.getElementById("msgErrorURL2");
    const boton = document.getElementById("sub");
    if (!input.value){
        msgError.textContent="La URL no puede estar vacía";
        boton.disabled=true;
        camposErroneos[2]=1;
    } else {
        const reg = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
        if (reg.test(input.value)) {
            msgError.textContent="";
            camposErroneos[2]=0;
            habilitarBoton(boton); 
        } else {
            msgError.textContent="La URL no es valida";
            boton.disabled=true;
            camposErroneos[2]=1;
        }
    }
}

function waitTimerDesc(input) {
    var typingTimer;
    var endTypingTimer = 800; //ms
    input.addEventListener("input", function(){
        clearTimeout(typingTimer);

        typingTimer = setTimeout(function(){
            validarDesc(input);
        }, endTypingTimer);

    })
}

function validarDesc(input) {
    const msgError = document.getElementById("msgErrorDesc");
    const boton = document.getElementById("sub");
    if (!input.value){
        msgError.textContent="La descripción del producto no puede estar vacía";
        boton.disabled=true;
        camposErroneos[3]=1;
    } else {
        if (input.value.length>=50 && input.value.length<=500) {
            msgError.textContent="";
            camposErroneos[3]=0;
            habilitarBoton(boton);
        } else {
            msgError.textContent="La descripción del producto debe tener entre 50 y 500 caracteres";
            boton.disabled=true;
            camposErroneos[3]=1;
        }
    }
}


