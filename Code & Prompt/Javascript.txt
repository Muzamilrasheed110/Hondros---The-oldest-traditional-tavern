// script.js
document.addEventListener('DOMContentLoaded', () => {
  // --- PRODUCT DATA (editable array) ---
  const products = [
    { name: "Soup of the Day", category: "Freshly Made Soups", price: 9.50, desc: "Freshly prepared homemade soup using seasonal ingredients.", availability: "Available", rating: 4.8 },
    { name: "Grilled Vegetables", category: "Starters", price: 8.50, desc: "Fresh seasonal vegetables grilled with herbs and olive oil.", availability: "Available", rating: 4.6 },
    { name: "Spinach Pie", category: "Starters", price: 10.50, desc: "Traditional flaky pastry with spinach, herbs and cheese.", availability: "Chef's Special", rating: 4.9 },
    { name: "Grilled Mushrooms", category: "Starters", price: 9.50, desc: "Juicy mushrooms with garlic butter.", availability: "Available", rating: 4.7 },
    { name: "Grilled Feta and Tomato", category: "Starters", price: 10.50, desc: "Creamy feta baked with tomatoes.", availability: "Available", rating: 4.8 },
    { name: "Scordalia", category: "Dips", price: 4.90, desc: "Traditional garlic potato dip.", availability: "Available", rating: 4.5 },
    { name: "Tahini", category: "Dips", price: 4.90, desc: "Smooth sesame seed dip.", availability: "Available", rating: 4.4 },
    { name: "Houmous", category: "Dips", price: 5.50, desc: "Creamy chickpea dip with tahini.", availability: "Available", rating: 4.8 },
    { name: "Spaghetti Tomato and Basil", category: "Pasta", price: 12.50, desc: "Classic pasta with fresh tomato sauce.", availability: "Available", rating: 4.8 },
    { name: "Spaghetti Bolognaise", category: "Pasta", price: 13.50, desc: "Rich slow-cooked beef sauce.", availability: "Popular", rating: 4.9 },
    { name: "Greek Salad", category: "Salads", price: 9.50, desc: "Cucumber, tomato, olives, feta.", availability: "Available", rating: 4.7 },
    { name: "Large Greek Salad", category: "Salads", price: 12.50, desc: "Extra-large sharing portion.", availability: "Available", rating: 4.8 },
    { name: "Tuna Salad", category: "Salads", price: 11.50, desc: "Garden salad with premium tuna.", availability: "Available", rating: 4.6 },
    { name: "Mousaka", category: "Cypriot Traditional Home Made Dishes 🇨🇾", price: 16.50, desc: "Baked minced meat with béchamel.", availability: "Best Seller", rating: 5.0 },
    { name: "Kleftiko", category: "Cypriot Traditional Home Made Dishes 🇨🇾", price: 19.50, desc: "Slow-roasted lamb with herbs.", availability: "Signature Dish", rating: 5.0 },
    { name: "Stifado", category: "Cypriot Traditional Home Made Dishes 🇨🇾", price: 18.50, desc: "Tender beef stew with onions.", availability: "Available", rating: 4.9 },
    { name: "Pork Kebab", category: "Meat on Coal", price: 14.00, desc: "Tender grilled pork skewers.", availability: "Popular", rating: 4.8 },
    { name: "Pork Cutlet", category: "Meat on Coal", price: 14.50, desc: "Crispy golden cutlet with fries.", availability: "Available", rating: 4.7 },
    { name: "Calamari Squid Fried", category: "Fresh Fish", price: 18.00, desc: "Crispy fried calamari with lemon.", availability: "Fresh Today", rating: 4.9 },
    { name: "Grilled Sea Bass", category: "Fresh Fish", price: 22.00, desc: "Fresh sea bass with herbs.", availability: "Premium", rating: 5.0 },
    { name: "Meat Meze", category: "Meze", price: 23.50, desc: "Selection of grilled meats.", availability: "Signature Dish", rating: 5.0 },
    { name: "Vegetarian Meze", category: "Meze", price: 23.50, desc: "Mediterranean vegetarian specialties.", availability: "Available", rating: 4.8 },
    { name: "Chicken Nuggets", category: "Kids Corne", price: 9.50, desc: "Crispy nuggets with fries.", availability: "Kids Favorite", rating: 4.6 },
    { name: "Fish Fingers", category: "Kids Corne", price: 9.50, desc: "Crunchy fish fingers.", availability: "Available", rating: 4.5 },
    { name: "Cold Drink", category: "Refreshments", price: 3.50, desc: "Chilled soft drink.", availability: "Available", rating: 4.5 },
    { name: "Juices", category: "Refreshments", price: 3.50, desc: "Fresh fruit juice.", availability: "Available", rating: 4.6 },
    { name: "Mineral Water Small", category: "Refreshments", price: 1.90, desc: "Pure bottled water.", availability: "Available", rating: 4.4 },
    { name: "Sparkling Water", category: "Refreshments", price: 3.90, desc: "Sparkling mineral water.", availability: "Available", rating: 4.5 },
    { name: "Ice Tea", category: "Refreshments", price: 3.90, desc: "Sweet iced tea.", availability: "Available", rating: 4.6 },
    { name: "Small Beer", category: "Beers", price: 3.50, desc: "Chilled premium beer small.", availability: "Available", rating: 4.8 },
    { name: "Large Beer", category: "Beers", price: 4.50, desc: "Large premium beer.", availability: "Popular", rating: 4.9 },
    { name: "Brandy Sour", category: "Spirits", price: 7.50, desc: "Classic brandy cocktail.", availability: "Available", rating: 4.8 },
    { name: "Imported Spirits", category: "Spirits", price: 6.50, desc: "Premium imported spirits.", availability: "Premium", rating: 4.9 },
    { name: "Five Kings", category: "Spirits", price: 5.50, desc: "Smooth premium beverage.", availability: "Available", rating: 4.6 },
    { name: "Prosecco Brut R To", category: "Wines", price: 24.00, desc: "Premium sparkling wine.", availability: "Luxury Selection", rating: 5.0 },
    { name: "Thisbe", category: "Wines", price: 22.00, desc: "Premium house selection.", availability: "Premium", rating: 4.9 }
  ];

  const currencySymbol = "€";
  const whatsappNumber = "+923334751412"; // restaurant WhatsApp
  const restaurantName = "Hondros - The oldest traditional tavern";

  // DOM elements
  const productGrid = document.getElementById('productGrid');
  const categoryContainer = document.querySelector('.category-filters');
  const searchInput = document.getElementById('searchInput');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const backToTop = document.getElementById('backToTop');
  const loader = document.getElementById('loader');
  const galleryGrid = document.getElementById('galleryGrid');
  const footerCategories = document.getElementById('footerCategories');

  // Extract unique categories
  const categories = [...new Set(products.map(p => p.category))];

  // Build category buttons
  function renderCategories() {
    if (!categoryContainer) return;
    categoryContainer.innerHTML = '<button class="cat-btn active" data-category="all">All</button>';
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'cat-btn';
      btn.dataset.category = cat;
      btn.textContent = cat;
      categoryContainer.appendChild(btn);
    });
    // footer categories
    if (footerCategories) {
      footerCategories.innerHTML = categories.slice(0,5).map(c => `<li><a href="#">${c}</a></li>`).join('');
    }
  }

  // Image helper - FIXED: Added file extension logic
  function getProductImage(name) {
    // Sanitize the filename
    const sanitizedName = name.replace(/[^a-zA-Z0-9\s-]/g, '').trim();
    return `assets/images/${sanitizedName}.jpg`;
  }

  // Debounce function for search performance
  function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // Render products
  function renderProducts(filteredProducts) {
    if (!productGrid) return;
    productGrid.innerHTML = '';
    if (filteredProducts.length === 0) {
      productGrid.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No dishes found.</p>';
      return;
    }
    filteredProducts.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${getProductImage(prod.name)}" alt="${prod.name}" class="product-img" loading="lazy" onerror="this.src='assets/images/no-image.jpg'">
        <div class="card-body">
          <span class="badge">${prod.availability}</span>
          <h3 class="product-name">${prod.name}</h3>
          <p class="product-desc">${prod.desc}</p>
          <div class="rating">⭐ ${prod.rating}/5</div>
          <div class="price">${currencySymbol}${prod.price.toFixed(2)}</div>
          <div class="qty-control">
            <button class="qty-btn minus" aria-label="Decrease quantity">−</button>
            <span class="qty-value">1</span>
            <button class="qty-btn plus" aria-label="Increase quantity">+</button>
          </div>
          <button class="whatsapp-btn">ORDER VIA WHATSAPP</button>
        </div>
      `;
      const minusBtn = card.querySelector('.minus');
      const plusBtn = card.querySelector('.plus');
      const qtySpan = card.querySelector('.qty-value');
      let quantity = 1;

      minusBtn.addEventListener('click', () => { 
        if (quantity > 1) { 
          quantity--; 
          qtySpan.textContent = quantity; 
        } 
      });
      plusBtn.addEventListener('click', () => { 
        quantity++; 
        qtySpan.textContent = quantity; 
      });

      const orderBtn = card.querySelector('.whatsapp-btn');
      orderBtn.addEventListener('click', () => {
        const total = (prod.price * quantity).toFixed(2);
        const message = `Hello, I would like to place a dine-in order.%0A%0A*Restaurant:* ${restaurantName}%0A*Table Number:*%0A%0A*Product:* ${prod.name}%0A*Price:* ${currencySymbol}${prod.price}%0A*Quantity:* ${quantity}%0A*Total:* ${currencySymbol}${total}%0A%0A*Customer Name:*%0A*Special Instructions:* ___________%0AThank you.`;
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
      });
      productGrid.appendChild(card);
    });
  }

  function filterAndSearch() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const activeCat = document.querySelector('.cat-btn.active')?.dataset.category || 'all';
    let filtered = products;
    if (activeCat !== 'all') {
      filtered = filtered.filter(p => p.category === activeCat);
    }
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm) || 
        p.category.toLowerCase().includes(searchTerm) || 
        p.desc.toLowerCase().includes(searchTerm)
      );
    }
    renderProducts(filtered);
  }

  // Category click
  if (categoryContainer) {
    categoryContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('cat-btn')) {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        filterAndSearch();
      }
    });
  }

  // Search with debounce for better performance
  if (searchInput) {
    searchInput.addEventListener('input', debounce(filterAndSearch, 300));
  }

  // Gallery dynamic (load from assets/images/gallery/)
  function loadGallery() {
    if (!galleryGrid) return;
    // FIXED: Added missing quote before gallery5.jpg
    const galleryImages = ['gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg', 'gallery4.jpg', 'gallery5.jpg', 'gallery6.jpg', 'gallery7.jpg', 'gallery8.jpg', 'gallery9.jpg', 'gallery10.jpg'];
    galleryGrid.innerHTML = galleryImages.map(img => 
      `<img src="assets/images/gallery/${img}" alt="Gallery Image" loading="lazy" onerror="this.style.display='none'">`
    ).join('');
  }

  // Mobile menu
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', navMenu.classList.contains('open'));
    });
  }

  // Back to top
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Loader
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => { 
        loader.style.opacity = '0'; 
        setTimeout(() => loader.remove(), 500); 
      }, 600);
    });
  }

  // Set WhatsApp contact link
  const whatsappContact = document.getElementById('whatsappContact');
  if (whatsappContact) whatsappContact.href = `https://wa.me/${whatsappNumber}`;

  // Init
  renderCategories();
  renderProducts(products);
  loadGallery();
});