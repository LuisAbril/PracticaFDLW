const NUM_RESULTS = 4;

let loadMoreRequests = 0;

async function loadMore() {

    const from = (loadMoreRequests + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/pageProds?from=${from}&to=${to}`);

    const newProducts = await response.text();

    const prodDiv = document.getElementsByClassName('container main')[0];

    prodDiv.innerHTML += newProducts;

    loadMoreRequests++;   
}