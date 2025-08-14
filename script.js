// Product Data
const products = {
  tracksuits: [
    {
      id: 1,
      name: "Premium Gold Tracksuit",
      price: "R1,299",
      category: "tracksuits",
      image: "IMAGES/Tracksuit 1.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Luxurious tracksuit with gold accents, perfect for both comfort and style. Made with premium materials for ultimate durability.",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 2,
      name: "Black Diamond Tracksuit",
      price: "R1,199",
      category: "tracksuits",
      image: "IMAGES/Tracksuit 2.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Sleek black tracksuit with diamond-pattern detailing. Designed for the modern urban athlete.",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 3,
      name: "Elite Performance Tracksuit",
      price: "R1,399",
      category: "tracksuits",
      image: "IMAGES/Tracksuit 3.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "High-performance tracksuit with moisture-wicking technology and ergonomic design.",
      sizes: ["S", "M", "L", "XL", "XXL"]
    }
  ],
  hoodies: [
    {
      id: 4,
      name: "Dice Logo Hoodie",
      price: "R799",
      category: "hoodies",
      image: "IMAGES/hoodie 1.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Comfortable hoodie featuring our signature dice logo. Perfect for casual wear and street style.",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 5,
      name: "Gold Rush Hoodie",
      price: "R899",
      category: "hoodies",
      image: "IMAGES/hoodie 2.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Premium hoodie with gold threading and embroidered details. A statement piece for any wardrobe.",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 6,
      name: "Urban Legend Hoodie",
      price: "R749",
      category: "hoodies",
      image: "IMAGES/hoodie 2.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Classic urban hoodie with modern fit and premium cotton blend fabric.",
      sizes: ["S", "M", "L", "XL", "XXL"]
    }
  ],
  tshirts: [
    {
      id: 7,
      name: "Rolling Dice Tee",
      price: "R399",
      category: "tshirts",
      image: "IMAGES/Tshirt 1.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Classic t-shirt with our iconic rolling dice graphic. Soft cotton blend for all-day comfort.",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 8,
      name: "Gold Standard Tee",
      price: "R449",
      category: "tshirts",
      image: "IMAGES/Tshirt 2.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Premium t-shirt with metallic gold print and superior fabric quality.",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      id: 9,
      name: "Street King Tee",
      price: "R379",
      category: "tshirts",
      image: "IMAGES/tshirt 3.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Bold street-style t-shirt with crown graphic and comfortable fit.",
      sizes: ["S", "M", "L", "XL", "XXL"]
    }
  ],
  beanies: [
    {
      id: 10,
      name: "Gold Thread Beanie",
      price: "R299",
      category: "beanies",
      image: "IMAGES/beanie 1.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Warm beanie with gold threading and embroidered logo. Perfect for cold weather styling.",
      sizes: ["One Size"]
    },
    {
      id: 11,
      name: "Classic Black Beanie",
      price: "R249",
      category: "beanies",
      image: "IMAGES/beanie 2.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Timeless black beanie with subtle branding. Essential for any streetwear collection.",
      sizes: ["One Size"]
    },
    {
      id: 12,
      name: "Dice Pattern Hat",
      price: "R329",
      category: "beanies",
      image: "IMAGES/beanie 3.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Unique hat featuring dice pattern design with premium wool blend material.",
      sizes: ["One Size"]
    }
  ],
  caps: [
    {
      id: 13,
      name: "Snapback Gold Edition",
      price: "R349",
      category: "caps",
      image: "IMAGES/Panel Cap 1.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Premium snapback cap with gold accents and adjustable fit. Perfect for any occasion.",
      sizes: ["One Size"]
    },
    {
      id: 14,
      name: "Dad Hat Classic",
      price: "R279",
      category: "caps",
      image: "IMAGES/Panel Cap 2.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Comfortable dad hat with curved brim and embroidered logo. Casual style at its finest.",
      sizes: ["One Size"]
    },
    {
      id: 15,
      name: "Trucker Cap Pro",
      price: "R319",
      category: "caps",
      image: "IMAGES/Trucker Cap.jpg?auto=compress&cs=tinysrgb&w=400",
      description: "Mesh trucker cap with foam front panel and adjustable snap closure.",
      sizes: ["One Size"]
    }
  ]
};

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const categoryButtons = document.querySelectorAll('.category-btn');
const productsGrid = document.getElementById('products-grid');
const modal = document.getElementById('product-modal');
const closeModal = document.querySelector('.close');
const navLinks = document.querySelectorAll('.nav-link');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  displayProducts('all');
  setupEventListeners();
});

// Event Listeners Setup
function setupEventListeners() {
  // Mobile menu toggle
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Category buttons
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      setActiveCategory(button);
      displayProducts(category);
    });
  });

  // Modal close
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
      setActiveNavLink(link);
      
      // Close mobile menu if open
      navMenu.classList.remove('active');
    });
  });

  // Smooth scroll for CTA button
  document.querySelector('.cta-button').addEventListener('click', () => {
    scrollToSection('catalogue');
  });
}

// Display products based on category
function displayProducts(category) {
  productsGrid.innerHTML = '';
  
  let productsToShow = [];
  
  if (category === 'all') {
    // Show all products
    Object.values(products).forEach(categoryProducts => {
      productsToShow = productsToShow.concat(categoryProducts);
    });
  } else {
    // Show specific category
    productsToShow = products[category] || [];
  }

  productsToShow.forEach(product => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
}

// Create product card element
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">${product.price}</p>
      <p class="product-category">${product.category}</p>
    </div>
  `;
  
  card.addEventListener('click', () => {
    showProductModal(product);
  });
  
  return card;
}

// Show product modal
function showProductModal(product) {
  document.getElementById('modal-img').src = product.image;
  document.getElementById('modal-img').alt = product.name;
  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-price').textContent = product.price;
  document.getElementById('modal-description').textContent = product.description;
  
  const sizesContainer = document.getElementById('modal-sizes-list');
  sizesContainer.innerHTML = '';
  product.sizes.forEach(size => {
    const sizeElement = document.createElement('span');
    sizeElement.className = 'size-option';
    sizeElement.textContent = size;
    sizesContainer.appendChild(sizeElement);
  });
  
  const orderButton = document.getElementById('order-btn');
  orderButton.onclick = () => orderViaEmail(product);
  
  modal.style.display = 'block';
}

// Order via email function
function orderViaEmail(product) {
  const subject = `Order Request - ${product.name}`;
  const body = `Hello Rolling Dice Apparel,

I would like to place an order for the following item:

Product: ${product.name}
Price: ${product.price}
Category: ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}

Please let me know about:
- Available sizes: ${product.sizes.join(', ')}
- Payment methods
- Delivery options
- Estimated delivery time

Thank you!

Best regards,
[Your Name]
[Your Phone Number]
[Your Address]`;

  const mailtoLink = `mailto:orders@rollingdiceapparel.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

// Set active category button
function setActiveCategory(activeButton) {
  categoryButtons.forEach(button => {
    button.classList.remove('active');
  });
  activeButton.classList.add('active');
}

// Set active navigation link
function setActiveNavLink(activeLink) {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  activeLink.classList.add('active');
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const sectionTop = section.offsetTop - headerHeight;
    
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }
}

// Update active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = ['home', 'about', 'catalogue', 'contact'];
  const headerHeight = document.querySelector('.header').offsetHeight;
  
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop - headerHeight - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        const correspondingNavLink = document.querySelector(`a[href="#${sectionId}"]`);
        if (correspondingNavLink) {
          setActiveNavLink(correspondingNavLink);
        }
      }
    }
  });
});

// Make scrollToSection globally available
window.scrollToSection = scrollToSection;