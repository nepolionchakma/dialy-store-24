function loadData() {
    url = "https://fakestoreapi.com/products"
    fetch(url)
        .then(res => res.json())
        .then(data => display(data))
}

function display(products) {
    // console.log(data)
    const productItem = document.getElementById("products");
    for (const product of products) {
        const title = product.title;
        const titleResult = title.slice(0, 30) + '...'
        const paragraph = product.description;
        const paragraphResult = paragraph.slice(0, 100) + '...'
        // console.log(paragraphResult)
        const item = document.createElement('div');
        item.innerHTML =
            `
            <div class="card shadow hover:shadow-2xl my-4 pt-6">
            <figure><img class='w-2/6 mt-4' src=${product.image} alt=${product.category} /></figure>
            <div class="card-body text-black">
            <h2 class="card-title">${titleResult}
            </h2>
            <div class="card-actions mt-4 justify-center">
              <div class="badge badge-outline">${product.category}</div>
              <div class="badge badge-outline">$ ${product.price}</div>
            </div>
              <p class='my-6'>${paragraphResult}</p>
              <h4><button class='text-white font-bold bg-green-600 rounded px-4 py-2'>Details</button></h4>
            </div>
          </div>
            `
        productItem.appendChild(item);

    }
}


loadData();