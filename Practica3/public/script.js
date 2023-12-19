const NUM_RESULTS = 4;

let loadMoreRequests = 0;

async function loadMoreProd() {

    const from = (loadMoreRequests + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/pageProds?from=${from}&to=${to}`);

    const newProducts = await response.text();

    const prodDiv = document.getElementsByClassName('container main')[0];

    prodDiv.innerHTML += newProducts;

    loadMoreRequests++;   
}

const NUM_RESULTS_COMMENTS = 1;

let loadMoreRequestsComments = 0

async function loadMoreComments() {

    const from = (loadMoreRequestsComments + 1) * NUM_RESULTS_COMMENTS;
    const to = from + NUM_RESULTS_COMMENTS;

    const response = await fetch(`/pageComments?product={{id}}&from=${from}&to=${to}`);

    const newComments = await response.text();

    const commDiv = document.getElementsByClassName('comentbox')[0];

    commDiv.innerHTML += newComments;

    loadMoreRequestsComments++;
}