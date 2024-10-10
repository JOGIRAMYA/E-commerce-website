document.getElementById('payment-form').onsubmit = function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Simulate payment processing
    alert('Payment Successful! Thank you for your order.');
    
    // Optionally, clear cart data
    localStorage.removeItem('cart');
  
    // Redirect to homepage or order confirmation page
    window.location.href = 'index.html';
  };
  