document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var selectedProduct = document.getElementById('productSelect').value;


    var predefinedProducts = {
        "product1": {
            imageUrl: "https://imageio.forbes.com/specials-images/imageserve/5fb3d1fa8e17f0f68a05b87f/The-new-MacBook-Air-with-M1-processor-/960x0.jpg?format=jpg&width=960",
            price: "80000",
            productName: "Macbook"
        },
        "product2": {
            imageUrl: "https://i.gadgets360cdn.com/products/large/vivo-t2-5g-db-709x800-1681200173.jpg",
            price: "16500",
            productName: "Vivo T2 5g"
        },
        "product3": {
            imageUrl: "https://2pgaming.com/cdn/shop/products/microsoft-original-xbox-console-halo-gta-bundle-2p-gaming-368640_grande.jpg?v=1682272214",
            price: "32000",
            productName: "Xbox console"
        }
    };

    var product = predefinedProducts[selectedProduct];

   

    var products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    
});
