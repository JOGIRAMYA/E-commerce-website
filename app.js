// Product data
const products = [
    {
      name: "Samsung Galaxy Z Fold6 5G",
      price: 200998,
      imgSrc: "https://m.media-amazon.com/images/I/61BgEfmZC8L._SX679_.jpg",
    },
    {
      name: "Samsung Galaxy in Ear Buds 3 Pro",
      price: 17899,
      imgSrc: "https://m.media-amazon.com/images/I/71+BBZBBT2L._AC_SX296_SY426_FMwebp_QL65_.jpg",
    },
    {
      name: "Samsung Galaxy Book4 ",
      price: 65999,
      imgSrc: "https://m.media-amazon.com/images/I/71LPoR+xsgL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      name: "Samsung Galaxy Watch 7",
      price: 28999,
      imgSrc: "https://m.media-amazon.com/images/I/71WvrXbXIcL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      name: "Nikon D7500 Camera ",
      price: 79850,
      imgSrc: "https://m.media-amazon.com/images/I/81bVHWevmyL._AC_UY327_FMwebp_QL65_.jpg",
    }
  ];
  
  // Cart data
  let cart = [];
  
  // Load products into the product grid
  const productGrid = document.getElementById('product-grid');
  products.forEach(product => {
    const productCard = `
      <div class="product-card">
        <img src="${product.imgSrc}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
      </div>
    `;
    productGrid.innerHTML += productCard;
  });
  
  // Add to cart function
  function addToCart(name, price) {
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
    updateCartCount();
  }
  
  // Update cart count
  function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
  }
  
  // Show cart modal
  document.getElementById('cart-btn').addEventListener('click', () => {
    showCart();
  });
  
  function showCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
  
    cartItems.innerHTML = '';
    let total = 0;
  
    cart.forEach(item => {
      total += item.price * item.quantity;
      const cartItem = `
        <div class="cart-item">
          <span>${item.name}</span>
          <span>$${item.price} x ${item.quantity}</span>
          <button onclick="removeFromCart('${item.name}')">Remove</button>
        </div>
      `;
      cartItems.innerHTML += cartItem;
    });
  
    totalPrice.textContent = total.toFixed(2);
    cartModal.style.display = 'block';
  
    // Add event listener for proceed to order
    document.getElementById('proceed-to-order').onclick = function() {
      proceedToOrder();
    };
  }
  
  // Proceed to Order Page
  function proceedToOrder() {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'order.html';
  }
  
  // Remove item from cart
  function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCartCount();
    showCart();
  }
  
  // Close modal functionality
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
  });
  
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  