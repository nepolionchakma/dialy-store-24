function allProductShow() {
  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => displayAllProduct(data))
}



function displayAllProduct(all) {
  isloading = true;
  const allProduct = document.getElementById("allProduct2");
  const loading = document.getElementById("loading");
  if (isloading) {
    loading.classList.toggle("hidden")
  } else {
    loading.classList.toggle("hidden")

  }
  for (const data of all) {
    const titleSlice = data.title.slice(0, 20) + "...";
    const descriptionSlice = data.description.slice(0, 200) + "...";

    // console.log(data);
    const cresteProductElement = document.createElement("div");
    cresteProductElement.innerHTML =
      `
      <div class="card shadow hover:shadow-2xl my-4 pt-6">
            <figure><img class='w-2/6 mt-4' src=${data.image} alt=${data.category} /></figure>
            <div class="card-body text-black">
            <h2 class="card-title">${titleSlice}
            </h2>
            <div class="text-start">Price : <span class="text-green-600 font-bold">$</span>${data.price}</div>
            <div class="card-actions mt-4 justify-center">
            </div>
            <p class='my-6 text-start'>${descriptionSlice}</p>
                <h4><a href="single-product.html?id=${data.id}"><button class="btn bg-green-600 text-white" onclick="idFilter(${data.id})">Details23</button></a></h4>
            <div class="badge badge-outline my-4 p-4"> category : ${data.category}</div>
            </div>
          </div>
      `
    allProduct.appendChild(cresteProductElement);
    isloading = false;
  }
}

const idFilter = async (id) => {
  const res22 = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data22 = await res22.json();
  return data22;
  // detailsShow(data22)
}

// function detailsShow(data) {
//   console.log(data.id);
//   const pop = document.querySelector("#pop");
//   pop.innerHTML =
//     `
//     <figure><img class='w-2/6 mt-4' src=${data.image} alt=${data.category} /></figure>
//             <div class="card-body text-black">
//             <h2 class="card-title">${data.title}
//             </h2>
//             <div class="text-start">Price : <span class="text-green-600 font-bold">$</span>${data.price}</div>
//             <p>${data.description}</p>
//     `

// }













allProductShow();