// ============================================
// HONDROS RESTAURANT - COMPLETE JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  
  // ============================================
  // EMERGENCY LOADER FIX (TOP PRIORITY)
  // ============================================
  const loader = document.getElementById('loader');
  
  function hideLoader() {
    if (loader) {
      loader.classList.add('loader-hidden');
      setTimeout(() => {
        if (loader.parentNode) {
          loader.remove();
        }
      }, 500);
    }
  }
  
  // Normal page load
  window.addEventListener('load', () => {
    setTimeout(hideLoader, 800);
  });
  
  // Emergency fallback - 4 seconds max
  setTimeout(hideLoader, 4000);
  
  // Click to dismiss loader
  if (loader) {
    loader.addEventListener('click', hideLoader);
  }

  // ============================================
  // PRODUCT DATA (editable array)
  // ============================================
  const products = [
    { name: "Soup of the Day", category: "Freshly Made Soups", price: 9.50, desc: "Freshly prepared homemade soup using seasonal ingredients.", availability: "Available", rating: 4.8 },
    { name: "Grilled Vegetables", category: "Starters", price: 8.50, desc: "Fresh seasonal vegetables grilled with herbs and olive oil.", availability: "Available", rating: 4.6 },
    { name: "Spinach Pie", category: "Starters", price: 10.50, desc: "Traditional flaky pastry with spinach, herbs and cheese.", availability: "Chef's Special", rating: 4.9 },
    { name: "Grilled Mushrooms", category: "Starters", price: 9.50, desc: "Juicy mushrooms with garlic butter.", availability: "Available", rating: 4.7 },
    { name: "Grilled Feta & Tomato", category: "Starters", price: 10.50, desc: "Creamy feta baked with tomatoes.", availability: "Available", rating: 4.8 },
    { name: "Scordalia", category: "Dips", price: 4.90, desc: "Traditional garlic potato dip.", availability: "Available", rating: 4.5 },
    { name: "Tahini", category: "Dips", price: 4.90, desc: "Smooth sesame seed dip.", availability: "Available", rating: 4.4 },
    { name: "Houmous", category: "Dips", price: 5.50, desc: "Creamy chickpea dip with tahini.", availability: "Available", rating: 4.8 },
    { name: "Spaghetti Tomato & Basil", category: "Pasta", price: 12.50, desc: "Classic pasta with fresh tomato sauce.", availability: "Available", rating: 4.8 },
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

  // ============================================
  // CONFIGURATION
  // ============================================
  const currencySymbol = "€";
  const whatsappNumber = "+35726934256"; // Restaurant WhatsApp
  const restaurantName = "Hondros - The oldest traditional tavern";

  // ============================================
  // DOM ELEMENTS (with null checks)
  // ============================================
  const productGrid = document.getElementById('productGrid');
  const categoryContainer = document.querySelector('.category-filters');
  const searchInput = document.getElementById('searchInput');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const backToTop = document.getElementById('backToTop');
  const galleryGrid = document.getElementById('galleryGrid');
  const footerCategories = document.getElementById('footerCategories');
  const whatsappContact = document.getElementById('whatsappContact');
  const mapLink = document.getElementById('mapLink');

  // ============================================
  // HELPER FUNCTIONS
  // ============================================
  
  // Extract unique categories
  const categories = [...new Set(products.map(p => p.category))];

  // Image helper - clean filename
  function getProductImage(name) {
    const sanitizedName = name.replace(/[^a-zA-Z0-9\s-]/g, '').trim();
    return `assets/images/${sanitizedName}.jpg`;
  }

  // Debounce for search performance
  function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // ============================================
  // RENDER FUNCTIONS
  // ============================================
  
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
    
    // Footer categories
    if (footerCategories) {
      footerCategories.innerHTML = categories.slice(0, 5).map(c => `<li><a href="#menu">${c}</a></li>`).join('');
    }
  }

  // Render products
  function renderProducts(filteredProducts) {
    if (!productGrid) return;
    productGrid.innerHTML = '';
    
    if (filteredProducts.length === 0) {
      productGrid.innerHTML = '<p style="text-align:center; grid-column:1/-1; padding:40px; color:#888;">🍽️ No dishes found. Try a different search!</p>';
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
      
      // Quantity controls
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

      // WhatsApp order button
      const orderBtn = card.querySelector('.whatsapp-btn');
      orderBtn.addEventListener('click', () => {
        const total = (prod.price * quantity).toFixed(2);
        const message = `Hello,%20I%20would%20like%20to%20place%20a%20dine-in%20order.%0A%0A*Restaurant:*%20${encodeURIComponent(restaurantName)}%0A*Table%20Number:*%20______%0A%0A*Product:*%20${encodeURIComponent(prod.name)}%0A*Price:*%20${currencySymbol}${prod.price}%0A*Quantity:*%20${quantity}%0A*Total:*%20${currencySymbol}${total}%0A%0A*Customer%20Name:*%20______%0A*Special%20Instructions:*%20______%0A%0AThank%20you!%20🍽️`;
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
      });
      
      productGrid.appendChild(card);
    });
  }

  // Filter and search function
  function filterAndSearch() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
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

  // ============================================
  // EVENT LISTENERS
  // ============================================
  
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

  // Search with debounce
  if (searchInput) {
    searchInput.addEventListener('input', debounce(filterAndSearch, 300));
  }

  // Mobile menu
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', navMenu.classList.contains('open'));
    });
    
    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Back to top button
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
    });
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // WhatsApp contact link
  if (whatsappContact) {
    whatsappContact.href = `https://wa.me/${whatsappNumber}`;
  }

  // Google Maps link
  if (mapLink) {
    mapLink.href = `https://maps.google.com/?q=QC56+4Q4+Paphos+8040+Cyprus`;
  }

  // ============================================
  // GALLERY LOADER
  // ============================================
  function loadGallery() {
    if (!galleryGrid) return;
    const galleryImages = [
      'gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg', 'gallery4.jpg', 
      'gallery5.jpg', 'gallery6.jpg', 'gallery7.jpg', 'gallery8.jpg',
      'gallery9.jpg', 'gallery10.jpg'
    ];
    galleryGrid.innerHTML = galleryImages.map(img => 
      `<img src="assets/images/gallery/${img}" alt="Gallery" loading="lazy" onerror="this.style.display='none'">`
    ).join('');
  }

  // ============================================
  // ACTIVE NAV LINK HIGHLIGHT ON SCROLL
  // ============================================
  function highlightNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }

  // ============================================
  // INITIALIZATION
  // ============================================
  function init() {
    renderCategories();
    renderProducts(products);
    loadGallery();
    highlightNavOnScroll();
    console.log('🍽️ Hondros Restaurant Website Ready!');
    console.log('📱 WhatsApp:', whatsappNumber);
    console.log('📍 Products loaded:', products.length);
  }

  // Start the app
  init();
});
