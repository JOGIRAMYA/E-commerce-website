// Retrieve cart data from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display order details
const orderDetails = document.getElementById('order-details');
let total = 0;

cart.forEach(item => {
  total += item.price * item.quantity;
  const orderItem = `
    <div class="order-item">
      <span>${item.name}</span>
      <span>$${item.price} x ${item.quantity}</span>
    </div>
  `;
  orderDetails.innerHTML += orderItem;
});

orderDetails.innerHTML += `<h3>Total: $${total.toFixed(2)}</h3>`;

// Proceed to payment button
document.getElementById('proceed-to-payment').onclick = function() {
  window.location.href = 'payment.html';
};
