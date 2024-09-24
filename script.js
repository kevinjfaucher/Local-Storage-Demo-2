// Function to add items to the cart and store it in localStorage

let cart = [];

function addItemsToCart() {
     cart = [
        { name: "Apple", price: 1.50 },
        { name: "Banana", price: 0.75 }
    ];
    alert('Items added to cart!');
}


function convertToJson(){
    localStorage.setItem('cart', JSON.stringify(cart));
}



// Function to retrieve the cart and display it
function showCart() {
    let storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    console.log(storedCart[0].name);
    
    // Save the element in a const
    const cartDisplay = document.getElementById('cartDisplay');
    
    // Start with a basic heading for the cart
    cartDisplay.innerHTML = '<h2>Your Cart:</h2>';
    
    // Loop through the storedCart array and display each item
    storedCart.forEach(function(item) {
        cartDisplay.innerHTML += `${item.name}: $${item.price}<br>`;
    });
}
