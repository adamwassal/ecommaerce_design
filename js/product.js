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

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Load product details
document.addEventListener('DOMContentLoaded', () => {
    const productId = getUrlParameter('id');
    const product = products.find(p => p.id == productId);

    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price-amount').textContent = product.price;
        document.getElementById('sell').textContent = product.discount;
        document.getElementById('old-price').textContent = product.oldPrice;
        document.getElementById('product-image').src = product.image;
    }
});
