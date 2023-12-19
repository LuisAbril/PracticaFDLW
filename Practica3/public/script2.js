const NUM_RESULTS_COMMENTS = 2;

let loadMoreRequestsComments = 0

async function loadMoreComments() {

    const from = (loadMoreRequestsComments + 1) * NUM_RESULTS_COMMENTS;
    const to = from + NUM_RESULTS_COMMENTS;
    const id = location.pathname.split("/").splice(-1)[0];

    const response = await fetch(`/pageComments?product=${id}&from=${from}&to=${to}`);

    const newComments = await response.text();

    const commDiv = document.getElementsByClassName('comentbox')[0];

    commDiv.innerHTML += newComments;

    loadMoreRequestsComments++;
}