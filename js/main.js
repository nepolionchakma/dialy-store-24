url = "https://fakestoreapi.com/products"
// function loadData() {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => display(data))
// }
const loadProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    display(data)
    const loadingSpinner = document.getElementById("loading");
    if (isLoading) {
        loadingSpinner.classList.toggle("hidden")
    } else {
        loadingSpinner.classList.toggle("hidden")

    }
}

function display(products) {
    // console.log(data)
    isLoading = true;
    const producstItem = document.getElementById("products");
    const productsItemMen = document.getElementById("productsMen");
    const productsItemjewelery = document.getElementById("productsjewelery");
    products = products.slice(0, 9);
    // console.group(products);

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
            <div class="badge badge-outline">$ ${product.price}</div>
            </div>
            <p class='my-6'>${paragraphResult}</p>
            <div class="badge badge-outline">${product.category}</div>
            <h4><button class="btn text-white font-bold bg-green-600 rounded px-4 py-2" onclick="detailsProduct(${product.id})">Details</button></h4>
            <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
            <div class="modal-action">
            <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div  id="detailsProduct" ></div>
                        </div>
                    </div>
                    </dialog>
            </div>
          </div>
            `
        producstItem.appendChild(item);
        const showProductsAll = document.getElementById("showAll")
        showProductsAll.classList.toggle("hidden");
        isLoading = false;

        const item2 = document.createElement('div');
        if (product.category === "jewelery") {
            item2.innerHTML =
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
            productsItemjewelery.appendChild(item2);
        }
        const item3 = document.createElement('div');
        if (product.category === "men's clothing") {
            item3.innerHTML =
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
            productsItemMen.appendChild(item3);
        }
    }
}

const detailsProduct = async (id) => {
    const resProduct = await fetch(`https://fakestoreapi.com/products/${id}`);
    const dataOfProduct = await resProduct.json();
    detailsShow(dataOfProduct);
}

const detailsShow = (data) => {
    console.log(data.id);

    const details = document.getElementById("detailsProduct");
    details.innerHTML =
        `
            <div class="card shadow hover:shadow-2xl my-4 pt-6">
            <figure><img class='w-2/6 mt-4' src=${data.image} alt=${data.category} /></figure>
            <div class="card-body text-black">
            </h2>
            <div class="card-actions mt-4 justify-center">
              <div class="badge badge-outline">${data.id}</div>
              <div class="badge badge-outline">$ ${data.price}</div>
            </div>
            </div>
          </div>
        `
    // isLoading = false;
    my_modal_5.showModal();
}


const showAll = () => {
  window.location.assign("all-product.html")
}

// loadData();
loadProducts();