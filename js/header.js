let appHeader = `
    <nav class='header-first w-25'>
       <img src='imgs/logo.png' width=140/>
       <a href='index.html' class='badge badge-dark pt-2 pb-2'>Home</a>
       <a href='pages/store.html' class='badge badge-dark pt-2 pb-2'>Store</a>
       <a href='pages/contact.html' class='badge badge-dark pt-2 pb-2'>Contact us</a>
       <a href='pages/about.html' class='badge badge-dark pt-2 pb-2'>About us</a>
    </nav>
    <nav class='header-sec'>
       <a href='../pages/cart.html' class='badge badge-info'><span class="material-symbols-outlined">shopping_cart</span></a>
    </nav>
`;
document.getElementById("header").innerHTML = appHeader;