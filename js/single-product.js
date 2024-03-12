const singleProduct = async () => {
    isLoading = true;
    const loading = document.getElementById("loading");

    const id = new URLSearchParams(window.location.search).get("id");
    // const query = window.location.search;
    // let parameters = new URLSearchParams(query);
    // let id = parameters.get('id');

    const res22 = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data22 = await res22.json();
    detailsShow(data22);
}
function detailsShow(data) {
    const singleCategory = document.getElementById("singleCategory");
    const pop = document.querySelector("#singleProduct");
    if (isLoading) {
        loading.classList.toggle("hidden")
        pop.classList.toggle("shadow-2xl")
    } else {
        loading.classList.toggle("hidden")
        pop.classList.toggle("shadow-2xl")
    }
    console.log(data.id);
    // const appendChildSingle = document.createElement("div");
    // appendChildSingle.classList.add("text-center");
    singleCategory.classList.add("text-green-600")
    singleCategory.innerText = "Product : " + data.category;
    pop.innerHTML =
        `
        <div class="left">
                <figure><img class='w-2/6 mt-4 mx-auto' src=${data.image} alt=${data.category} /></figure>
            </div>
            <div class="right">
                <div class="card-body text-black">
                <h2 class="card-title">${data.title}
                </h2>
                <div class="text-start">Price : <span class="text-green-600 font-bold">$</span>${data.price}</div>
                <p class="text-start"> ${data.description}</p>
            </div>
        </div> 
    `
    // pop.appendChild(appendChildSingle);
    isLoading = false;
}
















singleProduct();