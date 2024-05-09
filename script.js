const profileImag = document.getElementById("profileImag");
const main = document.querySelector(".main");
const body = document.querySelector("body");
const mostFrequentSearch = document.querySelector('.mostFrequent')
const productAvilable = document.getElementById("productAvilable");
const shopingBag = document.getElementById('shopingCart')
const addOption = document.getElementById('addOption')

document.addEventListener("DOMContentLoaded", function () {
  /** profile DaganDrop  start */

  const profileBtn = document.getElementById("profile-btn");
  const profileDropdown = document.getElementById("profile-dropdown");

  profileBtn.addEventListener("click", function () {
    profileDropdown.classList.toggle("hidden");
  });

  const logoutBtn = document.getElementById("logout-btn");
  logoutBtn.addEventListener("click", function () {
    console.log("Logged out");
  });

  const addProductToCart = document.querySelectorAll(".addBtn");
  addProductToCart.forEach((button) => {
    button.addEventListener("click", handlingAddToCartBtn);
  });

  let productAdded = [];

  function handlingAddToCartBtn(event) {
    const product = event.target.closest('.cartFrame')
    const item = {
      productName: product.querySelector('.contsPname').textContent,
      price: parseInt(product.querySelector('.price').textContent.slice(1).trim()),
      productImg: product.querySelector('img').src
    }
    productAdded.push(item)
    productAvilable.innerHTML = parseInt(productAvilable.textContent) + 1
    console.log(productAdded);
  }

  productAdded.forEach((product) => {
    showingAllSelectedProduct(product.productImg, product.price, product.productName, 1)
  });

  /*** Showing all production which is avilable in cart */
  const showAllProductOfAddToCart = document.getElementById(
    "showAllProductOfAddToCart"
  );

  showAllProductOfAddToCart.addEventListener("click", () => {
    productAvilable.style.display = "block";
  });


  let isAvilableProductRaperVisible = false;

  shopingBag.addEventListener('click', (e) => {
    const avilableProductRaper = document.querySelector('.avilableProductRaper');

    if (!isAvilableProductRaperVisible) {
      avilableProductRaper.style.left = "0%";
      isAvilableProductRaperVisible = true;
    } else {
      avilableProductRaper.style.left = "-100%";
      isAvilableProductRaperVisible = false;
    }
  });


});


let products = [
  {
    url: "https://images.unsplash.com/photo-1474169482634-9d0381a70510?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 9999,
    productName: "Taj",
    quantity: 1,
    purchaseCount: 1500,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1675586677399-2dbd468cad2f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 799,
    productName: "Banana",
    quantity: 1,
    purchaseCount: 2000,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 599,
    productName: "Apple",
    quantity: 1,
    purchaseCount: 1200,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1609424572698-04d9d2e04954?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 499,
    productName: "Orange",
    quantity: 1,
    purchaseCount: 1500,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1628007299415-a6db64a43787?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 899,
    productName: "Grapes",
    quantity: 1,
    purchaseCount: 1800,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1496843916299-590492c751f4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 699,
    productName: "Pineapple",
    quantity: 1,
    purchaseCount: 2500,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1622208489373-1fe93e2c6720?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 899,
    productName: "Watermelon",
    quantity: 1,
    purchaseCount: 3000,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1552265129-14577cfb8a05?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 399,
    productName: "Peach",
    quantity: 1,
    purchaseCount: 1700,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 599,
    productName: "Strawberry",
    quantity: 1,
    purchaseCount: 1300,
    isAvailable: true
  },
  {
    url: "https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mrp: 499,
    productName: "Kiwi",
    quantity: 1,
    purchaseCount: 1400,
    isAvailable: true
  },
];

function designeCart(url, price1, purchesCount, isAvilabel, pName) {
  const cartFrame = document.createElement("div");
  cartFrame.className = "cartFrame";

  const img = document.createElement("img");
  img.src = url;
  img.className = "img";

  const priceAndAddToCartRapped = document.createElement("div");
  priceAndAddToCartRapped.className = "container1";

  const price = document.createElement("p");
  price.className = "price";
  price.innerHTML = `₹ ${price1}`;

  const addToCartBtn = document.createElement("button");
  addToCartBtn.className = "addBtn";
  addToCartBtn.innerHTML = "Add To Cart";

  const soldItemAndReadyToDelieverRapped = document.createElement("div");
  soldItemAndReadyToDelieverRapped.className = "container2";

  const soldItemTillNow = document.createElement("p");
  soldItemTillNow.className = "soldItem";
  soldItemTillNow.innerHTML = `<i class="ri-eye-fill"></i> ${purchesCount}`;

  const readyForDelieveryToday = document.createElement("p");
  readyForDelieveryToday.className = "delieveringToday";
  readyForDelieveryToday.innerHTML = `Avilable : ${isAvilabel === true ? 'Yes' : 'No'}`;

  const productName = document.createElement('p')
  productName.className = 'container2, contsPname'
  productName.innerHTML = `${pName}`

  cartFrame.appendChild(img);
  cartFrame.appendChild(productName)

  priceAndAddToCartRapped.appendChild(price);
  priceAndAddToCartRapped.appendChild(addToCartBtn);

  soldItemAndReadyToDelieverRapped.appendChild(soldItemTillNow);
  soldItemAndReadyToDelieverRapped.appendChild(readyForDelieveryToday);

  cartFrame.appendChild(priceAndAddToCartRapped);

  cartFrame.appendChild(soldItemAndReadyToDelieverRapped);

  main.appendChild(cartFrame);
}

function showingAllSelectedProduct(url, price, productName, quantity) {
  const product = `
    <div class="relative">
      <div class="w-full bg-slate-700 p-4 rounded-md flex flex-wrap justify-between items-center gap-10 top-2 md:mt-3">
        <div class="productInfo flex-grow">
          <h3 class="text-white font-semibold">Product Name: ${productName}</h3>

          <div class="flex items-center gap-3 mt-2">
            <button class="ri-add-line text-white border border-green-400 px-4 py-2 rounded-full cursor-pointer"></button>
            <p class="w-16 bg-slate-800 rounded text-white text-center">${quantity}</p>
            <button class="ri-subtract-line text-white border border-red-400 px-4 py-2 rounded-full cursor-pointer"></button>
          </div>
          <p class="text-green-400 mt-2"><span class="text-white">MRP of One Piece:</span> ₹ ${price}</p>
        </div>
        <div class="img-container">
          <img src="${url}" alt="" class="w-48 h-24 rounded">
        </div>
      </div>
    </div>
  `;

  document.querySelector('.avilableProductRaper').innerHTML += product

}

function appendTotalAmountSection(price, quantity) {
  const totalAmountSection = `
    <div class=" bottom-0 left-0 w-full text-white bg-gray-800 p-4 mt-4">
      <h1 class="text-center mb-2">Total Amount: ₹ ${price * quantity}</h1>
      <div class="w-full h-0.5 bg-gray-500 mb-2"></div>
      <button class="bg-green-800 text-white rounded-md w-full py-2">
        Make Payment Here <i class="ri-corner-right-up-line ml-1"></i>
      </button>
    </div>
  `;

  document.querySelector('.avilableProductRaper').innerHTML += totalAmountSection;
}

function mostFrequentSearchByUser(url, tagName) {
  const elm = `<a href="#" class="optionTag decoration-0 bg-gray-700 px-2 py-1 rounded" id="Option"><p class="text-white font-awesome text-xs font-semibold">${tagName}</p></a>`

  mostFrequentSearch.innerHTML += elm

}

function allInputOtions(optionVlaue) {
  const section1 = `<option value="${optionVlaue === undefined? '': optionVlaue.trim()}" class="text-white">${optionVlaue === undefined? '': optionVlaue.trim()}</option>`
  addOption.innerHTML += section1
}

function swiperJs(){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay:{
      delay:3000
    }
  });
}
swiperJs()

function currentOffers(url){
  const offer = `<div class="swiper-slide text-center flex justify-center items-center"><img src="${url}" alt="" class="object-cover"></div>`
  document.querySelector('.swiper-wrapper').innerHTML += offer
}
const url = 'https://www.shutterstock.com/image-vector/discount-banner-shape-special-offer-260nw-1467549638.jpg'
// currentOffers(url)

for (let i = 0; i < products.length; i++) {
  let product = products[i];
  designeCart(product.url, product.mrp, product.purchaseCount, product.isAvailable, product.productName)
  allInputOtions(product.productName)
}

for (let i = 0; i < products.length / 2 - 1; i++) {
  let product = products[i];
  showingAllSelectedProduct(product.url, product.mrp, product.productName, product.quantity)
}

appendTotalAmountSection(50, 2);

products.forEach(product => {
  mostFrequentSearchByUser('', product.productName.toUpperCase().trim())
});


