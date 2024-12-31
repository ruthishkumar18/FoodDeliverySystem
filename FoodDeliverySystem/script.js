// Sample menu data with more dishes
const menuItems = [
    { id: 1, name: "Pizza", price: 10.99 },
    { id: 2, name: "Burger", price: 5.99 },
    { id: 3, name: "Pasta", price: 7.99 },
    { id: 4, name: "Sushi", price: 12.99 },
    { id: 5, name: "Salad", price: 4.99 },
    { id: 6, name: "Steak", price: 15.99 },
    { id: 7, name: "Tacos", price: 6.49 },
    { id: 8, name: "Sandwich", price: 5.49 }
];

// DOM Elements
const menuItemsContainer = document.getElementById("menuItems");
const orderList = document.getElementById("orderList");
const totalPriceElement = document.getElementById("totalPrice");
const submitOrderButton = document.getElementById("submitOrder");

let order = [];
let totalPrice = 0;

// Function to display menu items in a table format
function displayMenu() {
    menuItems.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><button onclick="addToOrder(${item.id})">Add to Order</button></td>
        `;

        menuItemsContainer.appendChild(row);
    });
}

// Function to add item to order
function addToOrder(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (item) {
        order.push(item);
        totalPrice += item.price;
        updateOrderSummary();
    }
}

// Function to update the order summary
function updateOrderSummary() {
    // Clear current order list
    orderList.innerHTML = '';

    // Add each item to the order list
    order.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        orderList.appendChild(listItem);
    });

    // Update total price
    totalPriceElement.textContent = totalPrice.toFixed(2);

    // Enable or disable the submit button based on order size
    submitOrderButton.disabled = order.length === 0;
}

// Function to handle the order placement
function placeOrder() {
    if (order.length > 0) {
        alert(`Your order has been placed! Total price: $${totalPrice.toFixed(2)}`);
        // Reset the order after placing it
        order = [];
        totalPrice = 0;
        updateOrderSummary();
    } else {
        alert("Your order is empty. Please add some items before placing an order.");
    }
}

// Initialize the menu on page load
displayMenu();
