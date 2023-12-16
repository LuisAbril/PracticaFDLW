const NUM_RESULTS = 4;

let loadMoreRequests = 0;

async function loadMore() {

    const from = (loadMoreRequests + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/productos?from=${from}&to=${to}`);

    const newProducts = await response.text();

    const prodDiv = document.getElementById("productos");

    prodDiv.innerHTML += newProducts;

    loadMoreRequests++;
}