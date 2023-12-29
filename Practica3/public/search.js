
function waitingSearch(input) {
    var typingTimer;
    var endTypingTimer = 800; //ms
    input.addEventListener("input", function () {
        clearTimeout(typingTimer);

        typingTimer = setTimeout(function () {
            search(input);
        }, endTypingTimer);

    })
}

async function search(input){
    const response = await fetch("/get-productos");
    let productos = await response.json();
    productos = productos.filter(producto => producto.nombreProd.toLowerCase().includes(input.value.toLowerCase()));
    console.log(input.value)
}