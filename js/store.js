// js/store.js

// Sample product data
const products = [
    {
        id: 1,
        name: 'Dell 6650e',
        description: 'A high-performance laptop from Dell.',
        price: '8000 EGP',
        oldPrice: '16000 EGP',
        image: '../imgs/products/sell/1.jpeg',
        discount: '-50%'
    },
    {
        id: 2,
        name: 'MacBook',
        description: 'A premium laptop from Apple.',
        price: '150000 EGP',
        oldPrice: '200000 EGP',
        image: '../imgs/products/sell/3.png',
        discount: '-25%'
    },
    {
        id: 3,
        name: 'Hp probook 60',
        description: 'A reliable laptop from HP.',
        price: '7200 EGP',
        oldPrice: '',
        image: '../imgs/products/sell/4.png',
        discount: ''
    },

    {
        id: 4,
        name: 'Hp probook 60',
        description: 'A reliable laptop from HP.',
        price: '7200 EGP',
        oldPrice: '',
        image: '../imgs/products/dell.jpeg',
        discount: ''
    },

    {
        id: 5,
        name: 'Hp probook 60',
        description: 'A reliable laptop from HP.',
        price: '7200 EGP',
        oldPrice: '',
        image: '../imgs/products/hp.jpeg',
        discount: ''
    },

    {
        id: 6,
        name: 'Hp probook 60',
        description: 'A reliable laptop from HP.',
        price: '7200 EGP',
        oldPrice: '8000 EGP',
        image: '../imgs/products/mac2.png',
        discount: '-10%'
    },

    {
        id: 7,
        name: 'Hp probook 60',
        description: 'A reliable laptop from HP.',
        price: '7200 EGP',
        oldPrice: '8000 EGP',
        image: '../imgs/products/mac2.png',
        discount: '-10%'
    },
    {
        id: 8,
        name: 'Hp probook 60',
        description: 'A reliable laptop from HP.',
        price: '7200 EGP',
        oldPrice: '8000 EGP',
        image: '../imgs/products/mac2.png',
        discount: '-10%'
    },
    {
        id: 9,
        name: 'Hp probook 60',
        description: 'A reliable laptop from HP.',
        price: '7200 EGP',
        oldPrice: '8000 EGP',
        image: '../imgs/products/mac2.png',
        discount: '-10%'
    },
    {
        id: 10,
        name: 'Hp probook 60',
        description: 'A reliable laptop from HP.',
        price: '7200 EGP',
        oldPrice: '8000 EGP',
        image: '../imgs/products/mac2.png',
        discount: '-10%'
    },

];

// Function to create product HTML
function createProductHTML(product) {
    return `
        <div class="product col-md-4 mt-3">
            <span class="sell">${product.discount}</span>
            <img src="${product.image}" alt="${product.name}" width="240" height="140">
            <a href="product.html?id=${product.id}" style="color: black">
                <p>${product.name}</p>
            </a>
            <p class="font-weight-bold">
                ${product.price} <span class="old-price"><del>${product.oldPrice}</del></span>
            </p>
            <a href="product.html?id=${product.id}" class="badge badge-success w-75">Buy Now</a>
        </div>
    `;
}

// Load products into the product list
document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        productList.innerHTML += createProductHTML(product);
    });
});
