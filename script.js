// ============================================================
// SHANON COLLECTIONS — script.js
// ============================================================
const WA_NUMBER = "256763889895";
// ── PRODUCT DATA ────────────────────────────────────────────
const menProducts = [
  {
    id: "m1",
    name: "Premium Leather Oxford",
    category: "Men's Formal Shoes",
    price: "UGX 180,000",
    badge: "Bestseller",
    description: "Classic leather oxford shoes with a sleek finish. Perfect for business meetings, formal events, and church services. Premium craftsmanship with comfort padding.",
    img: "WhatsApp Image 2026-04-23 at 10.35.48 AM (1).jpeg"
  },
  {
    id: "m2",
    name: "Casual office shoes",
    category: "Men's Casual Shoes",
    price: "UGX 95,000",
    badge: "New",
    description: "Lightweight  ideal for everyday wear. Comfortable and stylish, perfect for casual outings, shopping, or relaxing at home. Available in multiple colours.",
    img: "WhatsApp Image 2026-04-23 at 10.35.48 AM (2).jpeg"
  },
  {
    id: "m3",
    name: "Elegant Loafers",
    category: "Men's Smart Casual",
    price: "UGX 145,000",
    badge: null,
    description: "Sophisticated loafer shoes with superior comfort. Versatile enough for both casual and semi-formal occasions. Features quality leather and a modern silhouette.",
    img: "WhatsApp Image 2026-04-23 at 10.35.48 AM (3).jpeg"
  },
  {
    id: "m4",
    name: "suitables for parties",
    category: "Men's formal Shoes",
    price: "UGX 120,000",
    badge: "Popular",
    description: "Breathable  shoes designed for active lifestyle. With cushioned sole and ankle support, perfect for parties, church services,",
    img: "WhatsApp Image 2026-04-23 at 10.35.49 AM (1).jpeg"
  },
  {
    id: "m5",
    name: "Premium formal fits",
    category: "Men's Formal Boots",
    price: "UGX 175,000",
    badge: "Premium",
    description: "High-quality leather fits with refined craftsmanship. Ideal for formal events, weddings, and special occasions. Durable sole and elegant design.",
    img: "WhatsApp Image 2026-04-23 at 10.35.49 AM (2).jpeg"
  },
  {
    id: "m6",
    name: "Comfortable wear",
    category: "Men's Casual Footwear",
    price: "UGX 90,000",
    badge: null,
    description: "Breathable footwear perfect for warm Kampala weather. Easy-to-wear design with cushioned footbed. Great for casual outings and relaxation.",
    img: "WhatsApp Image 2026-04-23 at 10.35.49 AM (3).jpeg"
  },
  {
    id: "m7",
    name: "Italian Leather  Shoes",
    category: "Men's Formal Shoes",
    price: "UGX 165,000",
    badge: null,
    description: "Imported Italian leather shoes with superior quality. Elegant design perfect for weddings, corporate events, and formal dinners.",
    img: "WhatsApp Image 2026-04-23 at 10.35.49 AM (4).jpeg"
  },
  {
    id: "m8",
    name: "Khaki fits",
    category: "Men's Adventure Shoes",
    price: "UGX 155,000",
    badge: null,
    description: "Rugged shoes designed for outdoor adventures. Waterproof, durable, and comfortable for long treks and outdoor activities.",
    img: "WhatsApp Image 2026-04-23 at 10.35.50 AM (1).jpeg"
  },
  {
    id: "m9",
    name: "Classic brown Trainers",
    category: "Men's Casual fits",
    price: "UGX 105,000",
    badge: "New",
    description: "Timeless white trainers that go with any outfit. Premium canvas and rubber construction for everyday comfort and style.",
    img: "WhatsApp Image 2026-04-23 at 10.35.50 AM (2).jpeg"
  },
  {
    id: "m10",
    name: "Business Monk Strap",
    category: "Men's Formal Shoes",
    price: "UGX 158,000",
    badge: "Popular",
    description: "Sophisticated monk strap shoes with premium leather. Perfect for business meetings and professional events. Available in black and brown.",
    img: "WhatsApp Image 2026-04-23 at 10.35.50 AM (3).jpeg"
  },
  {
    id: "m11",
    name: "Casual Boat Shoes",
    category: "Men's Casual Shoes",
    price: "UGX 110,000",
    badge: null,
    description: "Relaxed boat shoes perfect for casual outings. Water-friendly design with non-slip sole, ideal for weekend trips and casual gatherings.",
    img: "WhatsApp Image 2026-04-23 at 10.35.50 AM (4).jpeg"
  },
  {
    id: "m12",
    name: "Modern  Shoes",
    category: "Men's casual Shoes",
    price: "UGX 130,000",
    badge: "Popular",
    description: "High-performance shoes with ankle support and cushioned sole. Perfect for active lifestyle.",
    img: "WhatsApp Image 2026-04-23 at 10.35.51 AM (1).jpeg"
  }
];

// Second page of Men's collection with additional styles
const menProducts2 = [
  {
    id: "m13",
    name: "Women's Style White Run Shoes",
    category: "Men's Sports Sneakers",
    price: "UGX 125,000",
    badge: "New",
    description: "Modern sports sneakers with cushioned soles and breathable design. Perfect for gym sessions and active wear.",
    img: "WhatsApp Image 2026-04-23 at 10.36.08 AM (1).jpeg"
  },
  {
    id: "m14",
    name: "Trendy Urban Sneakers",
    category: "Men's Fashion Sneakers",
    price: "UGX 112,000",
    badge: null,
    description: "Stylish urban sneakers perfect for casual walks and city exploration. Contemporary design with comfort focus.",
    img: "WhatsApp Image 2026-04-23 at 10.36.08 AM (2).jpeg"
  },
  {
    id: "m15",
    name: "Premium Tech Sneakers",
    category: "Men's Tech Shoes",
    price: "UGX 138,000",
    badge: "Premium",
    description: "Advanced technology sneakers with moisture-wicking and superior cushioning. Perfect for all-day comfort.",
    img: "WhatsApp Image 2026-04-23 at 10.36.08 AM (3).jpeg"
  },
  {
    id: "m16",
    name: "Bold Street Sneakers",
    category: "Men's Street Style",
    price: "UGX 118,000",
    badge: null,
    description: "Bold and vibrant street sneakers that make a fashion statement. Perfect for casual hangouts and events.",
    img: "WhatsApp Image 2026-04-23 at 10.36.08 AM (4).jpeg"
  },
  {
    id: "m17",
    name: "Professional Gym Shoes",
    category: "Men's Athletic",
    price: "UGX 135,000",
    badge: "Popular",
    description: "Professional-grade gym shoes with maximum ankle support. Designed for intense workouts and training.",
    img: "WhatsApp Image 2026-04-23 at 10.36.09 AM (1).jpeg"
  },
  {
    id: "m18",
    name: "Casual Weekend Sneakers",
    category: "Men's Casual Wear",
    price: "UGX 104,000",
    badge: null,
    description: "Comfortable weekend sneakers perfect for relaxed outings. Lightweight and stylish for any casual occasion.",
    img: "WhatsApp Image 2026-04-23 at 10.36.09 AM (2).jpeg"
  },
  {
    id: "m19",
    name: "Elite Performance Sneakers",
    category: "Men's Performance",
    price: "UGX 142,000",
    badge: "Premium",
    description: "Elite performance sneakers engineered for serious athletes. Enhanced support and durability for peak performance.",
    img: "WhatsApp Image 2026-04-23 at 10.36.09 AM (3).jpeg"
  },
  {
    id: "m20",
    name: "Versatile Daily Sneakers",
    category: "Men's Daily Wear",
    price: "UGX 108,000",
    badge: null,
    description: "Versatile sneakers perfect for everyday wear. Works with any outfit from casual to smart casual.",
    img: "WhatsApp Image 2026-04-23 at 10.36.09 AM (3).jpeg"
  }
];

const womenProducts = [
  {
    id: "w1",
    name: "Trail Running Shoes",
    category: "Elegant Sports Shoes",
    price: "UGX 135,000",
    badge: "Bestseller",
    description: "Trail running shoes with grip and stability for outdoor adventures. Perfect for hiking and outdoor activities.",
    img:"sports sneakers/WhatsApp Image 2026-04-27 at 7.04.26 PM (1).jpeg"
  },
  {
    id: "w2",
    name: "Premium Comfort Sneakers",
    category: "Best Casual Sneakers",
    price: "UGX 95,000",
    badge: "New",
    description: "Premium comfort sneakers with memory foam insoles. Lightweight and stylish for all-day wear.",
    img: "sports sneakers/WhatsApp Image 2026-04-27 at 7.04.26 PM.jpeg"
  },
  {
    id: "w3",
    name: "Fashion Athletic Sneakers",
    category: " Fashionable Sneakers",
    price: "UGX 115,000",
    badge: null,
    description: "Fashionable athletic sneakers combining style with performance. Perfect for gym and casual outings.",
    img: "sports sneakers/WhatsApp Image 2026-04-27 at 7.04.43 PM.jpeg"
  },
  {
    id: "w4",
    name: "Cross-Training Shoes",
    category: " Athletic Shoes",
    price: "UGX 100,000",
    badge: "Popular",
    description: "Cross-training shoes designed for diverse workouts. Superior support for all types of fitness activities.",
    img: "sports sneakers/WhatsApp Image 2026-04-27 at 7.04.49 PM.jpeg"
  },
  {
    id: "w5",
    name: "Elegant Casual Sneakers",
    category: "Women's Casual Shoes",
    price: "UGX 111,000",
    badge: "Premium",
    description: "Elegant casual sneakers perfect for sophisticated street style. Works great with dresses and casual outfits.",
    img: "sports sneakers/WhatsApp Image 2026-04-27 at 7.04.34 PM (1).jpeg"
  },
  {
    id: "w6",
    name: "Vibrant Color Sneakers",
    category: "Fashion Sneakers",
    price: "UGX 120,000",
    badge: null,
    description: "Vibrant colorful sneakers that brighten any outfit. Perfect for making a bold fashion statement.",
    img: "sports sneakers/WhatsApp Image 2026-04-27 at 7.04.32 PM (1).jpeg"
  },
  {
    id: "w7",
    name: " Lifestyle Sneakers",
    category: "Best Premium Sneakers",
    price: "UGX 160,000",
    badge: "Premium",
    description: "Premium lifestyle sneakers with superior craftsmanship. Perfect for casual and semi-formal occasions.",
    img: "sports sneakers/WhatsApp Image 2026-04-27 at 7.05.08 PM.jpeg"
  },
  {
    id: "w8",
    name: " Seasonal Sneakers",
    category: " Summer Shoes",
    price: "UGX 155,000",
    badge: "New",
    description: "Seasonal sneakers perfect for warm weather. Breathable and lightweight for maximum comfort.",
    img: "sports sneakers/WhatsApp Image 2026-04-27 at 7.05.31 PM.jpeg"
  },
  {
    id: "w9",
    name: "Urban Explorer Sneakers",
    category: " Retro Shoes",
    price: "UGX 135,000",
    badge: null,
    description: "Urban explorer sneakers perfect for city adventures. Durable and stylish for everyday exploration.",
    img: "sports sneakers/WhatsApp Image 2026-04-27 at 7.04.47 PM.jpeg"
  },
  {
    id: "w10",
    name: "Court Sneakers",
    category: " Sports Sneakers",
    price: "UGX 145,000",
    badge: "Popular",
    description: "Court sneakers with excellent traction and support. Perfect for basketball and court sports.",
    img: "sports sneakers/WhatsApp Image 2026-04-27 at 7.04.59 PM.jpeg"
  },
  {
    id: "w11",
    name: "Wawoo Heritage Sneakers",
    category: "Best Comfort Shoes",
    price: "UGX 125,000",
    badge: null,
    description: "Classic heritage sneakers with timeless design. Comfortable for all-day wear and long walks.",
    img: "sports sneakers/WhatsApp Image 2026-04-27 at 7.04.57 PM.jpeg"
  },
  {
    id: "w12",
    name: "All Season Sneakers",
    category: " All-Weather Shoes",
    price: "UGX 112,000",
    badge: "New",
    description: "All-season sneakers perfect for any weather. Durable construction for year-round adventures.",
    img: "sports sneakers/WhatsApp Image 2026-04-27 at 7.04.52 PM.jpeg"
  }
];
;

// ── RENDER PRODUCTS ─────────────────────────────────────────
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = products.map(p => `
    <div class="product-card" onclick="openModal('${p.id}')">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <div class="product-actions">
          <button class="action-btn" title="Quick view" onclick="event.stopPropagation(); openModal('${p.id}')">👁</button>
          <a class="action-btn" title="Inquire on WhatsApp"
             href="${waLink(p.name, p.price)}" target="_blank"
             onclick="event.stopPropagation()"></a>
        </div>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-category">${p.category}</div>
        <div class="product-price-row">
          <span class="product-price">${p.price}</span>
          <a class="product-wa-btn" href="${waLink(p.name, p.price)}" target="_blank"
             onclick="event.stopPropagation()"> Buy</a>
        </div>
      </div>
    </div>
  `).join('');
}

function waLink(productName, price) {
  const msg = encodeURIComponent(
    `Hello Shanon Collections! \nI'm interested in the *${productName}* (${price}).\nCould you give me more details?`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

// ── MODAL ───────────────────────────────────────────────────
let menCurrentPage = 1; // Track which page of men's products is displayed
const allProducts = [...menProducts, ...menProducts2, ...womenProducts];

function openModal(id) {
  const p = allProducts.find(x => x.id === id);
  if (!p) return;

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box">
      <div class="modal-img">
        <img src="${p.img}" alt="${p.name}" />
      </div>
      <div class="modal-body">
        <div class="modal-cat">${p.category}</div>
        <h2>${p.name}</h2>
        <p>${p.description}</p>
        <div class="modal-price">${p.price}</div>
        <div class="modal-actions">
          <a href="${waLink(p.name, p.price)}" target="_blank" class="btn btn-whatsapp">
             Buy on WhatsApp
          </a>
          <button class="modal-close-btn" onclick="closeModal()">Close</button>
        </div>
      </div>
    </div>
  `;
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  overlay.id = 'productModal';
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const m = document.getElementById('productModal');
  if (m) m.remove();
  document.body.style.overflow = '';
}

// ── NAV SCROLL EFFECT ───────────────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ── MOBILE MENU ─────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
}

// ── CHATBOT ─────────────────────────────────────────────────
const chatbotPanel = document.getElementById('chatbotPanel');
const chatMessages = document.getElementById('chatMessages');
const quickRepliesEl = document.getElementById('quickReplies');
const chatBadge = document.getElementById('chatBadge');
let chatbotOpen = false;
let chatbotInitialised = false;

const BOT_RESPONSES = [
  {
    match: ['price', 'prices', 'cost', 'how much', 'charge'],
    reply: "Our prices range from UGX 90,000 for tops to UGX 280,000 for quality products. Each product on the page shows its price — click any item for details. ",
    wa: "Yes! Let me chat on WhatsApp for exact pricing on a specific item."
  },
  {
    match: ['location', 'where', 'address', 'find you', 'pentagon city plaza', 'Nabugabo road kampala'],
    reply: "We're located at Pentagon city Plaza PC1-166 along Nabugabo road, Kampala. Easy to find! Look out for our signboard. ",
    wa: "Get directions on WhatsApp"
  },
  {
    match: ['hours', 'open', 'time', 'close', 'when'],
    reply: "We're open:\n Monday–Saturday: 8:00 AM – 8:00 PM\n Sunday: 10:00 AM – 6:00 PM",
    wa: null
  },
  {
    match: ['men', 'gents', 'male', 'youth', 'leather', 'formal', 'shoes'],
    reply: "We have a great formal shoes and sneakers hub from UGX 90,000, elegant, premium, leather, nike, and quality shoes. Scroll up to browse! ",
    wa: "Inquire about sneakers on WhatsApp"
  },
  {
    match: ['women', 'ladies', 'female', 'sneakers', 'nike', 'puma', 'premium'],
    reply: "Our women's collection features Ankara wrap dresses, Gomesi (Busuuti), evening dresses, office sets, blouses, and more! Prices start at UGX 32,000. 👗",
    wa: "Inquire about women's wear on WhatsApp"
  },
  {
    match: ['custom', 'tailor', 'made', 'order', 'dashed'],
    reply: "Yes! We accept custom orders and can tailor made  to your size. WhatsApp us to discuss your preference and we'll give you a quote. ",
    wa: "Place a custom order on WhatsApp"
  },
  {
    match: ['delivery', 'ship', 'bring', 'send'],
    reply: "We currently offer delivery within Kampala for an additional fee. Contact us on WhatsApp to arrange delivery to your location. 🚗",
    wa: "Arrange delivery on WhatsApp"
  },
  {
    match: ['hello', 'hi', 'hey', 'good', 'morning', 'afternoon', 'evening', 'ola', 'hola','mwiriwe'],
    reply: "Hello! 👋 Welcome to Shanon Collections — Kampala's premier shoe hub store on pentagon city plaza, nabugabo Road, Kampala. How can we help you today?",
    wa: null
  },
  {
    match: ['thank', 'thanks', 'nice', 'great', 'perfect', 'okay', 'ok'],
    reply: "You're very welcome! 😊 Feel free to ask us anything else or reach us directly on WhatsApp.",
    wa: "Chat with us on WhatsApp"
  }
];
const QUICK_REPLY_OPTIONS = [
  " Prices", " Location", " Hours",
  " Men's shoes", " Women's shoes", " Custom Orders"
];

function toggleChatbot() {
  chatbotOpen = !chatbotOpen;
  chatbotPanel.classList.toggle('open', chatbotOpen);

  if (chatbotOpen) {
    chatBadge.style.display = 'none';
    if (!chatbotInitialised) {
      initChatbot();
      chatbotInitialised = true;
    }
    setTimeout(() => {
      document.getElementById('chatInput')?.focus();
    }, 300);
  }
}

function initChatbot() {
  addBotMessage("Hello! 👋 Welcome to *Shanon Collections* — your fashion destination in Kampala. Ask me anything about our garments, prices, or location. I can also connect you directly to WhatsApp!", true);
  renderQuickReplies();
}

function addBotMessage(text, withWaBtn = false, waText = null) {
  const div = document.createElement('div');
  div.className = 'chat-msg bot';

  // Bold support via *text*
  const formatted = text.replace(/\*(.*?)\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  div.innerHTML = `<span>${formatted}</span>`;

  if (withWaBtn) {
    const waMsg = encodeURIComponent("Hello Shanon Collections! I found you via your website and would like to inquire about your products.");
    const btn = document.createElement('a');
    btn.href = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;
    btn.target = '_blank';
    btn.className = 'chat-wa-btn';
    btn.innerHTML = ' Chat on WhatsApp';
    div.appendChild(document.createElement('br'));
    div.appendChild(btn);
  }

  if (waText) {
    const waMsg = encodeURIComponent(`Hello Shanon Collections! ${waText}`);
    const btn = document.createElement('a');
    btn.href = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;
    btn.target = '_blank';
    btn.className = 'chat-wa-btn';
    btn.innerHTML = ` ${waText}`;
    div.appendChild(document.createElement('br'));
    div.appendChild(btn);
  }

  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addUserMessage(text) {
  const div = document.createElement('div');
  div.className = 'chat-msg user';
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function renderQuickReplies() {
  quickRepliesEl.innerHTML = '';
  QUICK_REPLY_OPTIONS.forEach(label => {
    const btn = document.createElement('button');
    btn.className = 'quick-reply-btn';
    btn.textContent = label;
    btn.onclick = () => {
      const clean = label.replace(/[^\w\s]/gi, '').trim();
      handleUserInput(clean);
    };
    quickRepliesEl.appendChild(btn);
  });
}

function getBotResponse(input) {
  const lower = input.toLowerCase();
  for (const entry of BOT_RESPONSES) {
    if (entry.match.some(word => lower.includes(word))) {
      return entry;
    }
  }
  return {
    reply: "I'm not quite sure about that — but our team on WhatsApp will give you the best answer! ",
    wa: "Ask us on WhatsApp"
  };
}

function handleUserInput(text) {
  if (!text.trim()) return;

  addUserMessage(text);

  setTimeout(() => {
    const response = getBotResponse(text);
    addBotMessage(response.reply, false, response.wa || null);
  }, 600);
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  handleUserInput(text);
}

function handleChatKey(event) {
  if (event.key === 'Enter') sendChatMessage();
}

// ── FAQ TOGGLE ───────────────────────────────────────────────
function toggleFAQ(button) {
  const faqItem = button.parentElement;
  const isOpen = faqItem.classList.contains('active');
  
  // Close all FAQ items
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
    item.querySelector('.faq-toggle').textContent = '+';
  });
  
  // Open clicked item if it wasn't open
  if (!isOpen) {
    faqItem.classList.add('active');
    button.querySelector('.faq-toggle').textContent = '−';
  }
}

// ── INTERACTIVE STAR RATING ─────────────────────────────────
let currentRating = 0;

function initStarRatings() {
  // Initialize all interactive star elements
  document.querySelectorAll('.interactive-stars').forEach(starsContainer => {
    const stars = starsContainer.querySelectorAll('.star');
    
    stars.forEach(star => {
      star.addEventListener('mouseenter', () => {
        const hoverValue = parseInt(star.dataset.value);
        highlightStars(starsContainer, hoverValue);
      });
      
      star.addEventListener('click', () => {
        const selectedValue = parseInt(star.dataset.value);
        setRating(starsContainer, selectedValue);
      });
    });
    
    // Reset on mouse leave (except for rate input which has its own behavior)
    if (!starsContainer.id || starsContainer.id !== 'ratingStars') {
      starsContainer.addEventListener('mouseleave', () => {
        const currentValue = parseInt(starsContainer.dataset.rating) || 0;
        highlightStars(starsContainer, currentValue);
      });
    }
  });

  // Special handling for rating input
  const ratingStars = document.getElementById('ratingStars');
  if (ratingStars) {
    ratingStars.addEventListener('mouseleave', () => {
      highlightStars(ratingStars, currentRating);
    });
  }
}

function highlightStars(container, value) {
  const stars = container.querySelectorAll('.star');
  stars.forEach((star, index) => {
    if (index < value) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

function setRating(container, value) {
  currentRating = value;
  container.dataset.rating = value;
  highlightStars(container, value);
  
  // Update feedback message
  const feedback = document.getElementById('ratingFeedback');
  if (feedback) {
    const messages = ['', 'Poor ✗', 'Fair', 'Good', 'Very Good', 'Excellent! ✓'];
    feedback.textContent = messages[value];
  }
}

function submitRating() {
  const comment = document.getElementById('ratingComment')?.value || '';
  
  if (currentRating === 0) {
    showRatingMessage('Please select a star rating first!', false);
    return;
  }
  
  // Show success message
  const messages = [
    '',
    'Thank you for your feedback!',
    'We appreciate your honest review!',
    'Thanks for rating us!',
    'We\'re glad you enjoyed our service!',
    'Excellent! Thank you for the 5-star review! '
  ];
  
  showRatingMessage(messages[currentRating], true);
  
  // Reset form after 2 seconds
  setTimeout(() => {
    document.getElementById('ratingComment').value = '';
    currentRating = 0;
    highlightStars(document.getElementById('ratingStars'), 0);
    document.getElementById('ratingFeedback').textContent = '';
    document.getElementById('ratingMessage').textContent = '';
  }, 2000);
}

function showRatingMessage(message, isSuccess) {
  const msgElement = document.getElementById('ratingMessage');
  msgElement.textContent = message;
  msgElement.style.color = isSuccess ? '#25D366' : '#e63946';
  msgElement.style.animation = 'fadeInUp 0.4s ease';
}

// ── EMAIL NOTIFICATION (FORMSPREE) ────────────────────────
function sendEmailNotification(name, phone, items, amount, notes) {
  const formspreeEndpoint = 'https://formspree.io/f/xjgjegwq';
  
  const emailData = {
    email: 'dusengeshan@gmail.com',
    message: `NEW PAYMENT ORDER FROM SHANON COLLECTIONS\n\n` +
             `Customer Name: ${name}\n` +
             `Phone: ${phone}\n` +
             `Items Ordered: ${items}\n` +
             `Amount: UGX ${parseInt(amount).toLocaleString()}\n` +
             `Customer Notes: ${notes || 'None'}\n` +
             `Order Date/Time: ${new Date().toLocaleString()}\n\n` +
             `---\nThis is an automated order notification from Shanon Collections website.`
  };
  
  fetch(formspreeEndpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(emailData)
  })
  .then(response => {
    if (response.ok) {
      console.log('✓ Order notification sent to dusengeshan@gmail.com via Formspree');
    } else {
      console.log('Email sent but received a response:', response.status);
    }
  })
  .catch(error => {
    console.log('Note: Email notification sending. Check Formspree dashboard.', error);
  });
}

// ── MTN MOBILE MONEY PAYMENT ────────────────────────────────
function submitPaymentRequest() {
  const name = document.getElementById('paymentName')?.value.trim() || '';
  const phone = document.getElementById('paymentPhone')?.value.trim() || '';
  const items = document.getElementById('paymentItems')?.value.trim() || '';
  const amount = document.getElementById('paymentAmount')?.value.trim() || '';
  const notes = document.getElementById('paymentNotes')?.value.trim() || '';
  
  // Validation
  if (!name || !phone || !items || !amount) {
    showPaymentMessage('Please fill in all required fields!', false);
    return;
  }
  
  if (isNaN(amount) || parseFloat(amount) <= 0) {
    showPaymentMessage('Please enter a valid amount!', false);
    return;
  }
  
  // Send email notification to admin
  sendEmailNotification(name, phone, items, amount, notes);
  
  // Format the message for WhatsApp
  const message = `Hello Shanon Collections! I want to make a payment:\n\nName: ${name}\nPhone: ${phone}\nItems: ${items}\nAmount: UGX ${parseInt(amount).toLocaleString()}\nNotes: ${notes || 'None'}\n\nPlease send me the payment instructions.`;
  
  // Encode and create WhatsApp link
  const whatsappLink = `https://wa.me/256763889895?text=${encodeURIComponent(message)}`;
  
  // Show success message
  showPaymentMessage('Processing payment... confirmation email sent!', true);
  
  // Open WhatsApp in new tab
  setTimeout(() => {
    window.open(whatsappLink, '_blank');
    
    // Reset form
    setTimeout(() => {
      document.getElementById('paymentName').value = '';
      document.getElementById('paymentPhone').value = '';

// ── MEN'S SHOE COLLECTION PAGE SWITCHING ───────────────────
function switchMenPage(pageNum) {
  let productsToShow;
  if (pageNum === 1) {
    productsToShow = menProducts;
    menCurrentPage = 1;
    document.querySelectorAll('.men-page-indicator').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === 0);
    });
  } else if (pageNum === 2) {
    productsToShow = menProducts2;
    menCurrentPage = 2;
    document.querySelectorAll('.men-page-indicator').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === 1);
    });
  }
  renderProducts(productsToShow, 'menGrid');
}

// ── BRAND NAVIGATION SCROLL ────────────────────────────────
function scrollBrands(gridId, direction) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  
  const scrollAmount = 250; // pixels to scroll
  grid.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}
      document.getElementById('paymentItems').value = '';
      document.getElementById('paymentAmount').value = '';
      document.getElementById('paymentNotes').value = '';
      document.getElementById('paymentMessage').textContent = '';
    }, 500);
  }, 300);
}

function showPaymentMessage(message, isSuccess) {
  const msgElement = document.getElementById('paymentMessage');
  msgElement.textContent = message;
  msgElement.style.color = isSuccess ? '#25D366' : '#e63946';
  msgElement.style.animation = 'fadeInUp 0.4s ease';
}
const observerOptions = { threshold: 0.12 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'heroFadeIn 0.7s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// ── CONTACT FORM (FORMSPREE) ────────────────────────────────
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const button = this.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      button.disabled = true;
      button.textContent = 'Sending...';
      
      const formData = new FormData(this);
      
      fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          showContactMessage('Message sent successfully! We\'ll get back to you soon. ✓', true);
          this.reset();
          setTimeout(() => {
            button.disabled = false;
            button.textContent = originalText;
            document.getElementById('formMessage').style.display = 'none';
          }, 3000);
        } else {
          showContactMessage('There was an error sending your message. Please try again.', false);
          button.disabled = false;
          button.textContent = originalText;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        showContactMessage('Connection error. Please try again or use WhatsApp.', false);
        button.disabled = false;
        button.textContent = originalText;
      });
    });
  }
}

function showContactMessage(message, isSuccess) {
  const msgElement = document.getElementById('formMessage');
  msgElement.textContent = message;
  msgElement.classList.remove('success', 'error');
  msgElement.classList.add(isSuccess ? 'success' : 'error');
  msgElement.style.display = 'block';
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(menProducts, 'menGrid');
  renderProducts(womenProducts, 'womenGrid');
  
  // Initialize interactive star ratings
  initStarRatings();
  
  // Initialize contact form
  setupContactForm();

  // Observe product cards
  setTimeout(() => {
    document.querySelectorAll('.product-card, .contact-card, .badge').forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }, 100);

  // Keyboard close modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});
