// Hoop Store Premium Application Logic
// Encapsulated inside IIFE for front-end security to prevent DevTools variable hacking
(() => {
    // --- EXPANDED SHOE DATABASE ---
    const PRODUCTS_DATABASE = [
        {
            id: "nike-lebron-21",
            name: "LeBron 21 'Conchiolin'",
            brand: "Nike",
            player: "James",
            price: 7200,
            image: "images/lebron21.png",
            cushion: "Air Zoom Strobel & Cushlon 2.0",
            traction: "Radial Multi-directional Traction",
            positions: ["Forward", "Center"],
            styles: ["Post-Up", "All-Round"],
            surface: ["Wood"],
            rating: 4.8,
            reviews: 142,
            description: "เลอบรอน เจมส์ คอลเลกชันพิเศษ 21 ออกแบบมาเพื่อซับพอร์ตแรงกระแทกขั้นสูงและการลงพื้นเท้าที่นุ่มนวล มั่นคงที่สุดสำหรับการลุยแป้นและหมุนสปินในสนาม",
            featured: true,
            colorways: [
                { name: "Conchiolin (White/Silver)", hex: "#dcdad6", image: "images/lebron21.png" },
                { name: "Lakers Gold (Purple/Gold)", hex: "#f0b323", image: "images/james_gold.png" },
                { name: "Red/Black Fusion", hex: "#d90429", image: "images/james_red.png" }
            ]
        },
        {
            id: "nike-lebron-20",
            name: "LeBron 20 'Trinity'",
            brand: "Nike",
            player: "James",
            price: 6800,
            image: "images/james_red.png",
            cushion: "Zoom Air & Cushlon Foam Midsole",
            traction: "High-traction Herringbone Grid",
            positions: ["Guard", "Forward"],
            styles: ["Slasher", "All-Round"],
            surface: ["Concrete", "Wood"],
            rating: 4.9,
            reviews: 184,
            description: "รุ่นยอดนิยมที่ผสมผสานความเบาสุดขีดแต่ยังคงระบบซับแรงระดับตำนาน เหมาะสำหรับปีกสายลุยและพอยต์การ์ดที่ต้องการความเร็วควบคู่การดีดตัวที่ดี",
            featured: false,
            colorways: [
                { name: "Trinity Red/Black", hex: "#b7094c", image: "images/james_red.png" },
                { name: "Lakers Edition", hex: "#7209b7", image: "images/james_gold.png" }
            ]
        },
        {
            id: "jordan-luka-3",
            name: "Luka 3 'Midnight'",
            brand: "Jordan",
            player: "Luka",
            price: 5000,
            image: "images/luka_blue.png",
            cushion: "Cushlon 3.0 & Iso-Plate Support",
            traction: "Dynamic Multi-directional Rubber",
            positions: ["Guard"],
            styles: ["Shooter", "All-Round"],
            surface: ["Wood"],
            rating: 4.8,
            reviews: 95,
            description: "ลูก้า ดอนชิช คอลเลกชันที่ 3 ออกแบบมาเป็นพิเศษสำหรับการเปลี่ยนสเต็ป ลากก้าวสไลด์ และความมั่นคงด้านข้างสำหรับการทำสเต็ปแบ็กยิงสามแต้ม",
            featured: true,
            colorways: [
                { name: "Midnight Navy", hex: "#1d3557", image: "images/luka_blue.png" },
                { name: "Electric Volt Green", hex: "#adff2f", image: "images/luka_neon.png" }
            ]
        },
        {
            id: "jordan-luka-2",
            name: "Luka 2 'Trick Shot'",
            brand: "Jordan",
            player: "Luka",
            price: 4700,
            image: "images/luka_blue.png",
            cushion: "Formula 23 & Wedge Foam System",
            traction: "Radial Herringbone Pattern",
            positions: ["Guard", "Forward"],
            styles: ["All-Round", "Shooter"],
            surface: ["Concrete", "Wood"],
            rating: 4.7,
            reviews: 112,
            description: "เน้นการโอบรับและล็อกเท้าด้านข้างอย่างแน่นหนา รองรับการเคลื่อนไหวที่อาศัยการชะลอตัวกระทันหันและดึงสเต็ปแบบลูก้า",
            featured: false,
            colorways: [
                { name: "Trick Shot Blue", hex: "#457b9d", image: "images/luka_blue.png" },
                { name: "Neon Matrix Glow", hex: "#52b788", image: "images/luka_neon.png" }
            ]
        },
        {
            id: "anta-kai-1",
            name: "ANTA Kai 1 'Artist Purple'",
            brand: "Anta",
            player: "Kyrie",
            price: 4500,
            image: "images/kyrie_purple.png",
            cushion: "Nitro-edge Super Critical Foam",
            traction: "Radial Curved Wave Traction",
            positions: ["Guard"],
            styles: ["Slasher", "Shooter"],
            surface: ["Concrete", "Wood"],
            rating: 4.9,
            reviews: 243,
            description: "ไครี เออร์วิง คอลเลกชันแรกกับ ANTA ชูจุดเด่นด้านแรงส่งดีดตัวที่เบาหวิวและพื้นโค้งที่ขยับทิศทางด้านข้างได้เร็วอย่างเหลือเชื่อตามสไตล์ครอสโอเวอร์ระเบิดแผงหน้า",
            featured: true,
            colorways: [
                { name: "Artist Purple", hex: "#c77dff", image: "images/kyrie_purple.png" },
                { name: "Sacred White & Gold", hex: "#eae2b7", image: "images/kyrie_white.png" }
            ]
        },
        {
            id: "nike-kyrie-7",
            name: "Kyrie 7 'Creator'",
            brand: "Nike",
            player: "Kyrie",
            price: 4700,
            image: "images/kyrie_purple.png",
            cushion: "Zoom Air Turbo Cushioning",
            traction: "360-degree Computer Data Grip",
            positions: ["Guard"],
            styles: ["Slasher"],
            surface: ["Wood"],
            rating: 4.8,
            reviews: 310,
            description: "พื้นโค้งโอบรอบข้างเท้าที่ออกแบบโดยระบบคอมพิวเตอร์ หนึบ เกาะทุกทิศทาง เหมาะกับการสไลด์ครอสโอเวอร์หักข้อเท้าสายพริ้ว",
            featured: false,
            colorways: [
                { name: "Creator Pink", hex: "#f15bb5", image: "images/kyrie_purple.png" },
                { name: "Gold Medal Special", hex: "#ffd166", image: "images/kyrie_white.png" }
            ]
        },
        {
            id: "way-of-wade-10",
            name: "Way of Wade 10 'Blossom'",
            brand: "Li-Ning",
            player: "Wade",
            price: 8000,
            image: "images/wade_pink.png",
            cushion: "Boom Midsole & Carbon Fiber Plate",
            traction: "Water-ripple Parametric Grip",
            positions: ["Guard", "Forward"],
            styles: ["Slasher", "All-Round"],
            surface: ["Concrete", "Wood"],
            rating: 4.9,
            reviews: 215,
            description: "ดีเวย์น เวด ซิกเนเจอร์รุ่นที่ 10 สุดยอดรองเท้าบาสที่ถูกยกย่องว่าดีที่สุดในโลก มาพร้อมคาร์บอนไฟเบอร์เต็มนิ้วเท้า ดีดแรง ดีดเร็ว และซัพพอร์ตระดับเทพ",
            featured: true,
            colorways: [
                { name: "Blossom Pink", hex: "#ffb3c1", image: "images/wade_pink.png" },
                { name: "Stealth Black Carbon", hex: "#212529", image: "images/wade_black.png" }
            ]
        },
        {
            id: "way-of-wade-11",
            name: "Way of Wade 11 'White Hot'",
            brand: "Li-Ning",
            player: "Wade",
            price: 8600,
            image: "images/wade_pink.png",
            cushion: "Boom Tech & TPU Containment Frame",
            traction: "Premium Multidirectional Radial",
            positions: ["Guard", "Forward"],
            styles: ["Slasher", "All-Round"],
            surface: ["Concrete", "Wood"],
            rating: 4.8,
            reviews: 74,
            description: "การพัฒนาสู่จุดสูงสุดของเทคโนโลยีรองเท้าบาสเวย์ ออฟ เวด ให้การโอบกระชับที่เหนือชั้นกว่าเดิม พร้อมระบบกระจายน้ำหนักที่สมบูรณ์แบบ",
            featured: false,
            colorways: [
                { name: "White Hot Pure", hex: "#f8f9fa", image: "images/wade_pink.png" },
                { name: "Night Shadow Carbon", hex: "#343a40", image: "images/wade_black.png" }
            ]
        },
        {
            id: "nike-kobe-8-protro",
            name: "Kobe 8 Protro 'Halo'",
            brand: "Nike",
            price: 6500,
            image: "images/kobe8.png",
            cushion: "React Drop-in Midsole",
            traction: "Herringbone Scale Pattern",
            positions: ["Guard"],
            styles: ["Slasher", "Shooter"],
            surface: ["Wood"],
            rating: 4.9,
            reviews: 218,
            description: "จุดต่ำสุดของส้นเท้าติดพื้น ตอบสนองสัมผัสคอร์ทได้รวดเร็วทันใจ เหมาะอย่างยิ่งสำหรับการคัทหักตัวอย่างว่องไวระดับสายฟ้าแลบ",
            featured: true,
            colorways: [
                { name: "Halo All-White", hex: "#fbfcfc", image: "images/kobe8.png" },
                { name: "Black Mamba Edition", hex: "#1c1d1f", image: "images/wade_black.png" }
            ]
        },
        {
            id: "adidas-ae-1",
            name: "AE 1 'Velocity Blue'",
            brand: "Adidas",
            price: 4300,
            image: "images/ae1.png",
            cushion: "Jet Boost & Lightstrike Midsole",
            traction: "Generative Herringbone Grid",
            positions: ["Guard", "Forward"],
            styles: ["Slasher", "All-Round"],
            surface: ["Concrete", "Wood"],
            rating: 4.7,
            reviews: 195,
            description: "แอนโธนี่ เอ็ดเวิร์ด ซิกเนเจอร์รุ่นแรก โครง TPU ครอบข้างช่วยล็อกกระชับส้นเท้าและแกนกลางให้แน่นเป็นพิเศษเมื่อเปลี่ยนสปีดพุ่งทะยาน",
            featured: true,
            colorways: [
                { name: "Velocity Blue", hex: "#1e3d59", image: "images/ae1.png" },
                { name: "Electric Neon Grid", hex: "#ccff33", image: "images/luka_neon.png" }
            ]
        },
        {
            id: "curry-11-future",
            name: "Curry 11 'Future'",
            brand: "Curry",
            price: 5800,
            image: "images/curry11.png",
            cushion: "Dual-Density UA Flow Cushioning",
            traction: "Flow Foam Textured Outsole",
            positions: ["Guard"],
            styles: ["Shooter", "Slasher"],
            surface: ["Wood"],
            rating: 4.8,
            reviews: 104,
            description: "ซิกเนเจอร์สเต็ปห่วงขอบยางของ สเตฟเฟน เคอร์รี่ มอบสัมผัสที่หนึบกับพื้นสนามฝุ่นน้อยได้อย่างไร้ที่ติ ยิงสลัดตัวไวและเบาสบายข้อเท้า",
            featured: true,
            colorways: [
                { name: "Future Spark Blue", hex: "#0077b6", image: "images/curry11.png" },
                { name: "White Gold Special", hex: "#ffd700", image: "images/kyrie_white.png" }
            ]
        },
        {
            id: "puma-mb-03",
            name: "MB.03 'La France'",
            brand: "Puma",
            price: 4700,
            image: "images/ae1.png",
            cushion: "NITRO Infused Gas Foam Midsole",
            traction: "Scratch-cut Rubber Outsole",
            positions: ["Guard"],
            styles: ["Slasher", "All-Round"],
            surface: ["Concrete", "Wood"],
            rating: 4.7,
            reviews: 138,
            description: "ลาเมโล บอล ซิกเนเจอร์รุ่นที่ 3 โดดเด่นด้วยดีไซน์แปลกตากล้าหาญ และเทคโนโลยีโฟมฉีดแก๊สไนโตรเจนที่ตอบสนองการดีดได้รวดเร็วมาก",
            featured: false,
            colorways: [
                { name: "La France Green", hex: "#38b000", image: "images/ae1.png" },
                { name: "Carbon Eclipse Black", hex: "#1a1a1a", image: "images/wade_black.png" }
            ]
        }
    ];

    // Deep Freeze target databases and objects to prevent runtime property modification attacks
    PRODUCTS_DATABASE.forEach(shoe => {
        if (shoe.colorways) {
            shoe.colorways.forEach(cw => Object.freeze(cw));
            Object.freeze(shoe.colorways);
        }
        if (shoe.positions) Object.freeze(shoe.positions);
        if (shoe.styles) Object.freeze(shoe.styles);
        Object.freeze(shoe);
    });
    Object.freeze(PRODUCTS_DATABASE);

    // --- APP STATE ---
    let cart = [];
    let activeBrandFilter = "all";
    let activePlayerFilter = null;
    let activeSearchQuery = "";
    let activeSortOption = "default";
    let selectedSize = "US 9";
    let selectedColorway = null; // Holds the currently active colorway object in modal
    let paymentTimerInterval = null;

    // --- DOM ELEMENTS ---
    const elements = {
        brandsGrid: document.getElementById("brands-grid"),
        productsGrid: document.getElementById("products-catalog-grid"),
        featuredGrid: document.getElementById("featured-products-grid"),
        searchField: document.getElementById("shop-search"),
        sortSelector: document.getElementById("shop-sort"),
        activeFiltersBar: document.getElementById("active-filters-bar"),
        filterBrandText: document.getElementById("filter-brand-text"),
        clearFilterBtn: document.getElementById("clear-filter-btn"),

        // Recommendations (Shoe Finder)
        recomForm: document.getElementById("recommendation-form"),
        finderStep1: document.getElementById("finder-step-1"),
        finderStep2: document.getElementById("finder-step-2"),
        finderStep3: document.getElementById("finder-step-3"),
        recomResultsContainer: document.getElementById("recommendation-results-container"),
        recomMatchBadge: document.getElementById("recom-match-badge"),
        recomShoesList: document.getElementById("recom-shoes-list"),

        // Modals
        productDetailModal: document.getElementById("product-detail-modal"),
        modalCloseBtn: document.getElementById("modal-close-btn"),
        modalShoeImg: document.getElementById("modal-shoe-img"),
        modalShoeBrand: document.getElementById("modal-shoe-brand"),
        modalShoeName: document.getElementById("modal-shoe-name"),
        modalShoeStars: document.getElementById("modal-shoe-stars"),
        modalShoeRatingText: document.getElementById("modal-shoe-rating-text"),
        modalShoePrice: document.getElementById("modal-shoe-price"),
        modalSpecCushion: document.getElementById("modal-spec-cushion"),
        modalSpecTraction: document.getElementById("modal-spec-traction"),
        modalSpecPositions: document.getElementById("modal-spec-positions"),
        modalSpecStyles: document.getElementById("modal-spec-styles"),
        modalShoeDesc: document.getElementById("modal-shoe-desc"),
        modalSizeGrid: document.getElementById("modal-size-grid"),
        modalColorSwatches: document.getElementById("modal-color-swatches"),
        modalAddToCartBtn: document.getElementById("modal-add-to-cart-btn"),

        // Cart
        cartTrigger: document.getElementById("cart-toggle-btn"),
        cartBadgeCount: document.getElementById("cart-badge-count"),
        cartDrawerOverlay: document.getElementById("cart-drawer-overlay"),
        cartDrawer: document.getElementById("cart-drawer"),
        cartCloseBtn: document.getElementById("cart-close-btn"),
        cartItemsContainer: document.getElementById("cart-items-container"),
        cartEmptyState: document.getElementById("cart-empty-state"),
        cartSubtotal: document.getElementById("cart-subtotal"),
        cartTotal: document.getElementById("cart-total"),
        checkoutBtn: document.getElementById("checkout-btn"),
        cartCountText: document.getElementById("cart-drawer-count"),
        cartSummarySection: document.getElementById("cart-summary-section"),

        // QR Payment Modal
        checkoutPaymentModal: document.getElementById("checkout-payment-modal"),
        paymentCloseBtn: document.getElementById("payment-close-btn"),
        confirmPaymentBtn: document.getElementById("confirm-payment-btn"),
        cancelPaymentBtn: document.getElementById("cancel-payment-btn"),
        paymentAmountVal: document.getElementById("payment-amount-val"),
        paymentCountdown: document.getElementById("payment-countdown"),

        // Checkout Success
        checkoutSuccessModal: document.getElementById("checkout-success-modal"),
        successCloseBtn: document.getElementById("success-close-btn"),
        successOrderId: document.getElementById("success-order-id")
    };

    // --- INITIALIZATION ---
    document.addEventListener("DOMContentLoaded", () => {
        renderFeatured();
        renderCatalog();
        setupEventListeners();
        updateCartUI();
        initScrollReveal();
    });

    // --- SCROLL REVEAL OBSERVER ---
    function initScrollReveal() {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target); // Trigger once
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll(".scroll-reveal");
        revealElements.forEach(el => observer.observe(el));
    }

    // --- RENDER FEATURED PRODUCTS (สินค้าแนะนำ) ---
    function renderFeatured() {
        if (!elements.featuredGrid) return;
        elements.featuredGrid.innerHTML = "";

        const featuredShoes = PRODUCTS_DATABASE.filter(shoe => shoe.featured);
        featuredShoes.forEach(shoe => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <div class="product-card-img-wrapper" onclick="openShoeDetails('${shoe.id}')">
                    <img src="${shoe.image}" alt="${shoe.name}">
                    <span class="product-card-badge">${shoe.rating} <i class="fa-solid fa-star" style="font-size: 0.65rem;"></i></span>
                </div>
                <div class="product-card-body">
                    <span class="product-card-brand">${shoe.brand.toUpperCase()}</span>
                    <h3 class="product-card-title" onclick="openShoeDetails('${shoe.id}')">${shoe.name}</h3>
                    <p class="product-card-tech">${shoe.cushion}</p>
                    <div class="product-card-footer">
                        <span class="product-card-price">${shoe.price.toLocaleString()} ฿</span>
                        <div class="product-card-actions">
                            <button class="btn-icon-outline" onclick="openShoeDetails('${shoe.id}')" title="Quick View">
                                <i class="fa-solid fa-eye"></i>
                            </button>
                            <button class="btn-icon-outline" onclick="addProductToCartDirectly('${shoe.id}')" title="Add to Bag">
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            elements.featuredGrid.appendChild(card);
        });
    }

    // --- CATALOG RENDERING & FILTERING ---
    function renderCatalog() {
        if (!elements.productsGrid) return;

        // 1. Filter products by Brand, Player and Search Query
        let filteredProducts = PRODUCTS_DATABASE.filter(shoe => {
            const matchesBrand = activeBrandFilter === "all" || shoe.brand.toLowerCase() === activeBrandFilter.toLowerCase();
            const matchesPlayer = !activePlayerFilter || shoe.player === activePlayerFilter;

            const q = activeSearchQuery.trim().toLowerCase();
            const matchesSearch = q === "" ||
                shoe.name.toLowerCase().includes(q) ||
                shoe.brand.toLowerCase().includes(q) ||
                shoe.cushion.toLowerCase().includes(q) ||
                shoe.description.toLowerCase().includes(q);

            return matchesBrand && matchesPlayer && matchesSearch;
        });

        // 2. Sort filtered products
        if (activeSortOption === "price-asc") {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (activeSortOption === "price-desc") {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (activeSortOption === "rating-desc") {
            filteredProducts.sort((a, b) => b.rating - a.rating);
        }

        // 3. Render
        elements.productsGrid.innerHTML = "";

        if (filteredProducts.length === 0) {
            elements.productsGrid.innerHTML = `
                <div class="shop-empty-state" style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-secondary);">
                    <i class="fa-solid fa-face-frown" style="font-size: 2.5rem; margin-bottom: 1.25rem; color: var(--text-muted);"></i>
                    <p style="font-size: 1rem; font-weight: 300;">ไม่พบรองเท้าบาสเกตบอลที่ตรงกับตัวเลือกของคุณ</p>
                </div>
            `;
            return;
        }

        filteredProducts.forEach(shoe => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <div class="product-card-img-wrapper" onclick="openShoeDetails('${shoe.id}')">
                    <img src="${shoe.image}" alt="${shoe.name}">
                    <span class="product-card-badge">${shoe.rating} <i class="fa-solid fa-star" style="font-size: 0.65rem;"></i></span>
                </div>
                <div class="product-card-body">
                    <span class="product-card-brand">${shoe.brand.toUpperCase()}</span>
                    <h3 class="product-card-title" onclick="openShoeDetails('${shoe.id}')">${shoe.name}</h3>
                    <p class="product-card-tech">${shoe.cushion}</p>
                    <div class="product-card-footer">
                        <span class="product-card-price">${shoe.price.toLocaleString()} ฿</span>
                        <div class="product-card-actions">
                            <button class="btn-icon-outline" onclick="openShoeDetails('${shoe.id}')" title="Quick View">
                                <i class="fa-solid fa-eye"></i>
                            </button>
                            <button class="btn-icon-outline" onclick="addProductToCartDirectly('${shoe.id}')" title="Add to Bag">
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            elements.productsGrid.appendChild(card);
        });

        // Update active filter badge bar
        if (activeBrandFilter !== "all" || activePlayerFilter || activeSearchQuery !== "") {
            elements.activeFiltersBar.classList.remove("hidden");
            let filterLabels = [];
            if (activeBrandFilter !== "all") filterLabels.push(`Brand: ${activeBrandFilter.toUpperCase()}`);
            if (activePlayerFilter) filterLabels.push(`Player: ${getPlayerFullName(activePlayerFilter)}`);
            if (activeSearchQuery !== "") filterLabels.push(`Search: "${activeSearchQuery}"`);
            elements.filterBrandText.textContent = filterLabels.join(" | ");
        } else {
            elements.activeFiltersBar.classList.add("hidden");
        }
    }

    function getPlayerFullName(playerKey) {
        switch (playerKey) {
            case "James": return "LeBron James";
            case "Luka": return "Luka Dončić";
            case "Kyrie": return "Kyrie Irving";
            case "Wade": return "Dwyane Wade";
            default: return playerKey;
        }
    }

    // --- RECOMMENDATION ENGINE (SHOE FINDER) ---
    function handleRecommendationSubmit() {
        const positionEl = document.querySelector('input[name="court-position"]:checked');
        const styleEl = document.querySelector('input[name="play-style"]:checked');
        const surfaceEl = document.querySelector('input[name="court-surface"]:checked');
        
        if (!positionEl || !styleEl || !surfaceEl) return;

        const position = positionEl.value;
        const style = styleEl.value;
        const surface = surfaceEl.value;

        // Score calculation against database
        let scoredShoes = PRODUCTS_DATABASE.map(shoe => {
            let score = 0;

            if (shoe.positions.includes(position)) {
                score += 40;
            }
            if (shoe.styles.includes(style)) {
                score += 30;
            }
            if (shoe.surface && shoe.surface.includes(surface)) {
                score += 30;
            }

            let percentage = 60; // Base match
            if (score === 100) percentage = 98;
            else if (score === 70) percentage = 88;
            else if (score === 60) percentage = 78;
            else if (score === 40) percentage = 68;

            return {
                ...shoe,
                matchPercent: percentage,
                score: score
            };
        });

        scoredShoes.sort((a, b) => b.score - a.score);
        const topMatches = scoredShoes.slice(0, 3);

        elements.recomShoesList.innerHTML = "";
        topMatches.forEach(shoe => {
            const item = document.createElement("div");
            item.className = "recom-shoe-card";
            item.innerHTML = `
                <img src="${shoe.image}" alt="${shoe.name}" class="recom-shoe-img" onclick="openShoeDetails('${shoe.id}')" style="cursor:pointer;">
                <div class="recom-shoe-info">
                    <h4 onclick="openShoeDetails('${shoe.id}')" style="cursor:pointer;">${shoe.name}</h4>
                    <p class="recom-shoe-desc">${shoe.description.substring(0, 90)}...</p>
                    <span class="match-score"><i class="fa-solid fa-bolt"></i> ${shoe.matchPercent}% MECHANICAL MATCH</span>
                </div>
                <div class="recom-shoe-action">
                    <span class="recom-shoe-price">${shoe.price.toLocaleString()} ฿</span>
                    <button class="btn btn-primary btn-mini" onclick="openShoeDetails('${shoe.id}')">View Details</button>
                </div>
            `;
            elements.recomShoesList.appendChild(item);
        });

        elements.recomMatchBadge.textContent = `${position.toUpperCase()} / ${style.toUpperCase()} / ${surface.toUpperCase()}`;
        elements.recomResultsContainer.classList.remove("hidden");

        // Scroll smoothly to results
        setTimeout(() => {
            elements.recomResultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }

    // --- MODAL HANDLING ---
    let currentActiveShoeId = null;

    function openShoeDetails(shoeId) {
        const shoe = PRODUCTS_DATABASE.find(s => s.id === shoeId);
        if (!shoe) return;

        currentActiveShoeId = shoeId;
        selectedSize = "US 9"; // Reset to default
        
        // Load default colorway (first in colorways list or default property)
        if (shoe.colorways && shoe.colorways.length > 0) {
            selectedColorway = shoe.colorways[0];
        } else {
            selectedColorway = { name: "Default Color", hex: "#888888", image: shoe.image };
        }

        // Populating elements
        elements.modalShoeImg.src = selectedColorway.image;
        elements.modalShoeImg.alt = shoe.name;
        elements.modalShoeBrand.textContent = shoe.brand.toUpperCase();
        elements.modalShoeName.textContent = shoe.name;
        elements.modalShoePrice.textContent = `${shoe.price.toLocaleString()} ฿`;
        elements.modalSpecCushion.textContent = shoe.cushion;
        elements.modalSpecTraction.textContent = shoe.traction;
        elements.modalSpecPositions.textContent = shoe.positions.join(" / ");
        elements.modalSpecStyles.textContent = shoe.styles.join(" / ");
        elements.modalShoeDesc.textContent = shoe.description;

        // Rating Stars builder
        const fullStars = Math.floor(shoe.rating);
        const halfStar = shoe.rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        let starsHtml = "";
        for (let i = 0; i < fullStars; i++) starsHtml += '<i class="fa-solid fa-star"></i> ';
        if (halfStar) starsHtml += '<i class="fa-solid fa-star-half-stroke"></i> ';
        for (let i = 0; i < emptyStars; i++) starsHtml += '<i class="fa-regular fa-star"></i> ';

        elements.modalShoeStars.innerHTML = starsHtml;
        elements.modalShoeRatingText.textContent = `${shoe.rating} (${shoe.reviews} reviews)`;

        // Color swatches builder
        elements.modalColorSwatches.innerHTML = "";
        if (shoe.colorways && shoe.colorways.length > 0) {
            shoe.colorways.forEach((cw, idx) => {
                const swatch = document.createElement("button");
                swatch.className = `color-swatch ${cw.name === selectedColorway.name ? 'active' : ''}`;
                swatch.style.backgroundColor = cw.hex;
                swatch.innerHTML = `<span class="color-swatch-tooltip">${cw.name}</span>`;
                swatch.addEventListener("click", () => {
                    // Switch color
                    selectedColorway = cw;
                    elements.modalShoeImg.src = cw.image;
                    
                    // Update active classes
                    elements.modalColorSwatches.querySelectorAll(".color-swatch").forEach(btn => {
                        btn.classList.remove("active");
                    });
                    swatch.classList.add("active");
                });
                elements.modalColorSwatches.appendChild(swatch);
            });
        }

        // Sizes grid visual state reset
        const sizeBtns = elements.modalSizeGrid.querySelectorAll(".size-btn");
        sizeBtns.forEach(btn => {
            btn.classList.remove("active");
            if (btn.textContent === selectedSize) {
                btn.classList.add("active");
            }
        });

        // Display Modal
        elements.productDetailModal.classList.remove("hidden");
        document.body.style.overflow = "hidden"; // Disable background scroll
    }

    function closeShoeDetails() {
        elements.productDetailModal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }

    // --- CART DRAWER FUNCTIONALITY ---
    function toggleCartDrawer(open) {
        if (open) {
            elements.cartDrawerOverlay.classList.remove("hidden");
            document.body.style.overflow = "hidden";
        } else {
            elements.cartDrawerOverlay.classList.add("hidden");
            document.body.style.overflow = "auto";
        }
    }

    function addProductToCartDirectly(shoeId) {
        // Direct addition uses first colorway and US 9
        const shoe = PRODUCTS_DATABASE.find(s => s.id === shoeId);
        if (!shoe) return;
        const color = shoe.colorways && shoe.colorways.length > 0 ? shoe.colorways[0] : { name: "Standard Color", image: shoe.image };
        addShoeToCart(shoeId, "US 9", color);
    }

    // Secure item insertion - reads specifications strictly from local PRODUCTS_DATABASE
    function addShoeToCart(shoeId, size, colorwayObj) {
        // Validation: Verify existence of shoe model in frozen DB
        const shoe = PRODUCTS_DATABASE.find(s => s.id === shoeId);
        if (!shoe) return;

        // Check duplicate items matching size AND colorway name
        const duplicate = cart.find(item => item.id === shoeId && item.size === size && item.colorway === colorwayObj.name);

        if (duplicate) {
            duplicate.qty++;
        } else {
            // Prevent hacker field overriding by strictly reading properties from frozen DB
            const cartItem = {
                id: shoe.id,
                name: shoe.name,
                brand: shoe.brand,
                price: Number(shoe.price), // Strict number casting
                image: colorwayObj.image,
                size: size,
                colorway: colorwayObj.name,
                qty: 1
            };
            
            // Seal the item to prevent runtime injection attacks on cart item details
            Object.seal(cartItem);
            cart.push(cartItem);
        }

        updateCartUI();

        // Bounce notification animation on trigger
        elements.cartTrigger.classList.add("bounce-animation");
        setTimeout(() => {
            elements.cartTrigger.classList.remove("bounce-animation");
        }, 400);

        toggleCartDrawer(true);
    }

    function updateCartUI() {
        const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
        elements.cartBadgeCount.textContent = totalItems;
        elements.cartCountText.textContent = totalItems;

        // Render drawer list
        const itemNodes = elements.cartItemsContainer.querySelectorAll(".cart-item");
        itemNodes.forEach(n => n.remove());

        if (cart.length === 0) {
            elements.cartEmptyState.classList.remove("hidden");
            elements.cartSummarySection.style.display = "none";
        } else {
            elements.cartEmptyState.classList.add("hidden");
            elements.cartSummarySection.style.display = "block";

            // Render from latest to oldest
            for (let i = cart.length - 1; i >= 0; i--) {
                const item = cart[i];
                const itemEl = document.createElement("div");
                itemEl.className = "cart-item";
                itemEl.id = `cart-node-${item.id}-${item.size.replace(' ', '-')}-${item.colorway.replace(/\s+/g, '-')}`;
                itemEl.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-detail">
                        <span class="cart-item-brand">${item.brand.toUpperCase()}</span>
                        <h4>${item.name}</h4>
                        <div class="cart-item-meta">
                            <span class="cart-item-price">${item.price.toLocaleString()} ฿</span>
                            <div style="font-size: 0.75rem; color: var(--text-secondary); display: flex; align-items: center; gap: 0.25rem;">
                                <span>${item.colorway} | Size:</span>
                                <select class="cart-item-size-select" onchange="changeCartItemSize('${item.id}', '${item.size}', '${item.colorway}', this.value)">
                                    ${['US 8', 'US 9', 'US 10', 'US 11', 'US 12'].map(sz => `
                                        <option value="${sz}" ${sz === item.size ? 'selected' : ''}>${sz}</option>
                                    `).join('')}
                                </select>
                            </div>
                        </div>
                        <div class="cart-item-meta">
                            <div class="quantity-controller">
                                <button class="qty-btn" onclick="adjustCartQty('${item.id}', '${item.size}', '${item.colorway}', -1)">-</button>
                                <span class="qty-val">${item.qty}</span>
                                <button class="qty-btn" onclick="adjustCartQty('${item.id}', '${item.size}', '${item.colorway}', 1)">+</button>
                            </div>
                        </div>
                    </div>
                    <button class="cart-item-remove-btn" onclick="removeCartItem('${item.id}', '${item.size}', '${item.colorway}')">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                `;
                elements.cartItemsContainer.insertBefore(itemEl, elements.cartEmptyState);
            }
        }

        // Recalculate based on prices fetched from cart array directly
        const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
        elements.cartSubtotal.textContent = `${subtotal.toLocaleString()} ฿`;
        elements.cartTotal.textContent = `${subtotal.toLocaleString()} ฿`;
    }

    // Secure quantity modifier with integer validation
    function adjustCartQty(shoeId, size, colorName, diff) {
        const item = cart.find(item => item.id === shoeId && item.size === size && item.colorway === colorName);
        if (!item) return;

        // Strict validation
        const verifiedDiff = parseInt(diff, 10);
        if (isNaN(verifiedDiff)) return;

        item.qty += verifiedDiff;

        if (item.qty <= 0) {
            cart = cart.filter(i => !(i.id === shoeId && i.size === size && i.colorway === colorName));
        }

        updateCartUI();
    }

    // Deletion animation sequence (TikTok style slide-out transition)
    function removeCartItem(shoeId, size, colorName) {
        // Generate valid selector matching DOM item ID
        const targetId = `cart-node-${shoeId}-${size.replace(' ', '-')}-${colorName.replace(/\s+/g, '-')}`;
        const itemNode = document.getElementById(targetId);

        if (itemNode) {
            itemNode.classList.add("removing");
            
            // Wait for slide-out CSS transition before state change and re-render
            setTimeout(() => {
                cart = cart.filter(item => !(item.id === shoeId && item.size === size && item.colorway === colorName));
                updateCartUI();
            }, 350);
        } else {
            cart = cart.filter(item => !(item.id === shoeId && item.size === size && item.colorway === colorName));
            updateCartUI();
        }
    }

    // --- CHECKOUT & QR PAYMENT Drawer ---
    function triggerCheckout() {
        if (cart.length === 0) return;

        // Compute total amount
        const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
        
        // Close cart drawer
        toggleCartDrawer(false);

        // Update payment modal amount
        elements.paymentAmountVal.textContent = `${subtotal.toLocaleString()} ฿`;

        // Open QR Payment modal
        elements.checkoutPaymentModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";

        // Start countdown timer
        startPaymentTimer();
    }

    function startPaymentTimer() {
        clearInterval(paymentTimerInterval);
        
        let secondsLeft = 300; // 5 Minutes countdown timer
        updateTimerDisplay(secondsLeft);

        paymentTimerInterval = setInterval(() => {
            secondsLeft--;
            if (secondsLeft <= 0) {
                clearInterval(paymentTimerInterval);
                closePaymentModal();
            } else {
                updateTimerDisplay(secondsLeft);
            }
        }, 1000);
    }

    function updateTimerDisplay(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const displayMin = minutes < 10 ? "0" + minutes : minutes;
        const displaySec = seconds < 10 ? "0" + seconds : seconds;
        elements.paymentCountdown.textContent = `${displayMin}:${displaySec}`;
    }

    function closePaymentModal() {
        clearInterval(paymentTimerInterval);
        elements.checkoutPaymentModal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }

    function processPaymentVerification() {
        clearInterval(paymentTimerInterval);
        elements.checkoutPaymentModal.classList.add("hidden");

        // Trigger Success Modal
        const orderIdNum = Math.floor(100000 + Math.random() * 900000);
        elements.successOrderId.textContent = `#HP-${orderIdNum}`;

        elements.checkoutSuccessModal.classList.remove("hidden");
        document.body.style.overflow = "hidden";

        // Clear state
        cart = [];
        updateCartUI();
    }

    // Dynamic cart item size switching and duplicate merging
    function changeCartItemSize(shoeId, oldSize, colorName, newSize) {
        const itemIdx = cart.findIndex(i => i.id === shoeId && i.size === oldSize && i.colorway === colorName);
        if (itemIdx === -1) return;

        if (oldSize === newSize) return;

        const duplicateIdx = cart.findIndex(i => i.id === shoeId && i.size === newSize && i.colorway === colorName);
        if (duplicateIdx !== -1) {
            cart[duplicateIdx].qty += cart[itemIdx].qty;
            cart.splice(itemIdx, 1);
        } else {
            const oldItem = cart[itemIdx];
            const updatedItem = {
                id: oldItem.id,
                name: oldItem.name,
                brand: oldItem.brand,
                price: oldItem.price,
                image: oldItem.image,
                size: newSize,
                colorway: oldItem.colorway,
                qty: oldItem.qty
            };
            Object.seal(updatedItem);
            cart[itemIdx] = updatedItem;
        }

        updateCartUI();
    }

    // --- EVENT LISTENERS BINDER ---
    function setupEventListeners() {
        // 1. Brands filtering
        const brandCards = document.querySelectorAll(".brand-card");
        brandCards.forEach(card => {
            card.addEventListener("click", () => {
                brandCards.forEach(c => c.classList.remove("active"));
                card.classList.add("active");

                activeBrandFilter = card.dataset.brand;
                
                // Clear player filter if brand selected
                activePlayerFilter = null;
                document.querySelectorAll(".player-card").forEach(c => c.classList.remove("active"));

                renderCatalog();

                // Warp/scroll to Baseline Collection shop section smoothly
                document.getElementById("shop-section").scrollIntoView({ behavior: 'smooth' });
            });
        });

        // 2. NBA Player cards filter triggers
        const playerCards = document.querySelectorAll(".player-card");
        playerCards.forEach(card => {
            card.addEventListener("click", () => {
                const playerKey = card.dataset.player;
                
                // Toggle active state
                playerCards.forEach(c => c.classList.remove("active"));
                
                if (activePlayerFilter === playerKey) {
                    // Deselect player filtering
                    activePlayerFilter = null;
                } else {
                    activePlayerFilter = playerKey;
                    card.classList.add("active");
                }

                // Clear brand selection back to all
                activeBrandFilter = "all";
                brandCards.forEach(c => c.classList.remove("active"));
                document.getElementById("brand-all-btn").classList.add("active");

                renderCatalog();

                // Scroll to Baseline collection shop section smoothly
                document.getElementById("shop-section").scrollIntoView({ behavior: 'smooth' });
            });
        });

        // 3. Search input
        elements.searchField.addEventListener("input", (e) => {
            activeSearchQuery = e.target.value;
            renderCatalog();
        });

        // 4. Sort select box
        elements.sortSelector.addEventListener("change", (e) => {
            activeSortOption = e.target.value;
            renderCatalog();
        });

        // 5. Clear filter badge action
        elements.clearFilterBtn.addEventListener("click", () => {
            activeBrandFilter = "all";
            activePlayerFilter = null;
            activeSearchQuery = "";
            elements.searchField.value = "";

            brandCards.forEach(c => c.classList.remove("active"));
            document.getElementById("brand-all-btn").classList.add("active");
            playerCards.forEach(c => c.classList.remove("active"));

            renderCatalog();
        });

        // 6. Progressive Shoe Finder toggles and stepwise change handling
        const radios = document.querySelectorAll('#recommendation-form input[type="radio"]');
        radios.forEach(radio => {
            radio.addEventListener('click', function(e) {
                if (this.wasChecked) {
                    this.checked = false;
                    this.wasChecked = false;
                    handleStepChange(this.name);
                } else {
                    const group = document.querySelectorAll(`input[name="${this.name}"]`);
                    group.forEach(r => r.wasChecked = false);
                    
                    this.wasChecked = true;
                    handleStepChange(this.name);
                }
            });
        });

        function handleStepChange(groupName) {
            const positionChecked = document.querySelector('input[name="court-position"]:checked');
            const styleChecked = document.querySelector('input[name="play-style"]:checked');
            const surfaceChecked = document.querySelector('input[name="court-surface"]:checked');

            if (groupName === "court-position") {
                if (positionChecked) {
                    elements.finderStep2.classList.remove("hidden");
                } else {
                    elements.finderStep2.classList.add("hidden");
                    elements.finderStep3.classList.add("hidden");
                    elements.recomResultsContainer.classList.add("hidden");
                    clearGroupSelection("play-style");
                    clearGroupSelection("court-surface");
                }
            } else if (groupName === "play-style") {
                if (styleChecked) {
                    elements.finderStep3.classList.remove("hidden");
                } else {
                    elements.finderStep3.classList.add("hidden");
                    elements.recomResultsContainer.classList.add("hidden");
                    clearGroupSelection("court-surface");
                }
            } else if (groupName === "court-surface") {
                if (surfaceChecked) {
                    handleRecommendationSubmit();
                } else {
                    elements.recomResultsContainer.classList.add("hidden");
                }
            }
        }

        function clearGroupSelection(groupName) {
            const group = document.querySelectorAll(`input[name="${groupName}"]`);
            group.forEach(r => {
                r.checked = false;
                r.wasChecked = false;
            });
        }

        // 7. Details modal sizes toggler
        elements.modalSizeGrid.addEventListener("click", (e) => {
            if (e.target.classList.contains("size-btn")) {
                elements.modalSizeGrid.querySelectorAll(".size-btn").forEach(btn => {
                    btn.classList.remove("active");
                });
                e.target.classList.add("active");
                selectedSize = e.target.textContent;
            }
        });

        // 8. Add to cart modal action
        elements.modalAddToCartBtn.addEventListener("click", () => {
            if (currentActiveShoeId && selectedColorway) {
                addShoeToCart(currentActiveShoeId, selectedSize, selectedColorway);
                closeShoeDetails();
            }
        });

        // 9. Modal closing bindings
        elements.modalCloseBtn.addEventListener("click", closeShoeDetails);
        elements.productDetailModal.addEventListener("click", (e) => {
            if (e.target === elements.productDetailModal) closeShoeDetails();
        });

        // 10. Cart drawers toggling
        elements.cartTrigger.addEventListener("click", () => toggleCartDrawer(true));
        elements.cartCloseBtn.addEventListener("click", () => toggleCartDrawer(false));
        elements.cartDrawerOverlay.addEventListener("click", (e) => {
            if (e.target === elements.cartDrawerOverlay) toggleCartDrawer(false);
        });
        document.getElementById("cart-continue-shopping").addEventListener("click", () => {
            toggleCartDrawer(false);
        });

        // 11. Checkout drawer triggers
        elements.checkoutBtn.addEventListener("click", triggerCheckout);

        // 12. QR Payment closures
        elements.paymentCloseBtn.addEventListener("click", closePaymentModal);
        elements.cancelPaymentBtn.addEventListener("click", closePaymentModal);
        elements.confirmPaymentBtn.addEventListener("click", processPaymentVerification);

        // 13. Checkout success modal closure
        elements.successCloseBtn.addEventListener("click", () => {
            elements.checkoutSuccessModal.classList.add("hidden");
            document.body.style.overflow = "auto";
        });
    }

    // --- GLOBALLY EXPOSE REQUISITE ROUTINES ---
    // Safely export only click handler routines required by DOM elements
    window.openShoeDetails = openShoeDetails;
    window.addProductToCartDirectly = addProductToCartDirectly;
    window.adjustCartQty = adjustCartQty;
    window.removeCartItem = removeCartItem;
    window.changeCartItemSize = changeCartItemSize;
})();
