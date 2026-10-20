
const products = [
    {
        id: 1,
        name: "NEXORA Pro Smartphone",
        category: "Smartphones",
        price: 24999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
        tag: "BESTSELLER"
    },
    {
        id: 2,
        name: "Wireless Headphones",
        category: "Audio",
        price: 3999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        tag: "POPULAR"
    },
    {
        id: 3,
        name: "Smart Watch Ultra",
        category: "Wearables",
        price: 5999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
        tag: "TRENDING"
    },
    {
        id: 4,
        name: "Pro Laptop",
        category: "Computers",
        price: 65999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
        tag: "PREMIUM"
    },
    {
        id: 5,
        name: "Studio Headphones",
        category: "Audio",
        price: 4999,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
        tag: "NEW"
    },
    {
        id: 6,
        name: "Mirrorless Camera",
        category: "Cameras",
        price: 42999,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
        tag: "PREMIUM"
    },
    {
        id: 7,
        name: "Gaming Controller",
        category: "Gaming",
        price: 3499,
        image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=600&q=80",
        tag: "GAMING"
    },
    {
        id: 8,
        name: "Wireless Earbuds",
        category: "Audio",
        price: 1999,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=600&q=80",
        tag: "BESTSELLER"
    },
    {
        id: 9,
        name: "Tablet Pro",
        category: "Computers",
        price: 28999,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
        tag: "POPULAR"
    },
    {
        id: 10,
        name: "Fitness Smart Band",
        category: "Wearables",
        price: 2499,
        image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=600&q=80",
        tag: "DAILY ESSENTIAL"
    },
    {
        id: 11,
        name: "Mechanical Keyboard",
        category: "Gaming",
        price: 4599,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
        tag: "GAMING"
    },
    {
        id: 12,
        name: "Portable Camera",
        category: "Cameras",
        price: 18999,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=600&q=80",
        tag: "CREATOR PICK"
    },
    {
        id: 13,
        name: "Premium Phone Case",
        category: "Accessories",
        price: 799,
        image: "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=600&q=80",
        tag: "ESSENTIAL"
    },
    {
        id: 14,
        name: "USB-C Charging Cable",
        category: "Accessories",
        price: 499,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
        tag: "ESSENTIAL"
    },
    {
        id: 15,
        name: "Portable Bluetooth Speaker",
        category: "Speakers",
        price: 2499,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
        tag: "POPULAR"
    },
    {
        id: 16,
        name: "Premium Wireless Speaker",
        category: "Speakers",
        price: 3999,
        image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80",
        tag: "PREMIUM"
    }
];

const productGrid = document.getElementById("productGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const categoryCards = document.querySelectorAll(".category-card");
const searchInput = document.getElementById("searchInput");
const searchBox = document.getElementById("searchBox");
const emptyMessage = document.getElementById("emptyMessage");
const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");

let selectedCategory = "All";
let cart = [];
let toastTimer;

function formatPrice(price) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(price);
}


function displayProducts() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    const filteredProducts = products.filter(function(product) {
        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    productGrid.innerHTML = filteredProducts.map(function(product) {
        return `
            <article class="product-card">
                <div class="product-image">
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >
                    <span class="product-tag">${product.tag}</span>
                </div>

                <div class="product-info">
                    <p class="product-category">${product.category}</p>
                    <h3>${product.name}</h3>

                    <div class="product-bottom">
                        <span class="product-price">
                            ${formatPrice(product.price)}
                        </span>

                        <button
                            class="add-btn"
                            data-id="${product.id}"
                        >
                            + Add to Bag
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    emptyMessage.style.display =
        filteredProducts.length === 0 ? "block" : "none";
}


function selectCategory(category) {
    selectedCategory = category;

    filterButtons.forEach(function(button) {
        button.classList.toggle(
            "active",
            button.dataset.category === category
        );
    });

    displayProducts();
}


filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        selectCategory(button.dataset.category);
    });
});


categoryCards.forEach(function(card) {
    card.addEventListener("click", function() {
        selectCategory(card.dataset.category);
        document.getElementById("products").scrollIntoView({
            behavior: "smooth"
        });
    });
});

searchInput.addEventListener("input", displayProducts);


document.getElementById("searchBtn").addEventListener("click", function() {
    searchBox.classList.toggle("show");

    if (searchBox.classList.contains("show")) {
        searchInput.focus();
        document.getElementById("products").scrollIntoView({
            behavior: "smooth"
        });
    }
});

document.getElementById("closeSearch").addEventListener("click", function() {
    searchInput.value = "";
    searchBox.classList.remove("show");
    displayProducts();
});


productGrid.addEventListener("click", function(event) {
    const button = event.target.closest(".add-btn");

    if (!button) return;

    const productId = Number(button.dataset.id);
    const product = products.find(function(item) {
        return item.id === productId;
    });

    if (product) {
        cart.push(product);
        updateCart();
        showToast(product.name + " added to your bag!");
    }
});


function updateCart() {
    cartCount.textContent = cart.length;
}


document.getElementById("cartBtn").addEventListener("click", function() {
    if (cart.length === 0) {
        showToast("Your bag is empty. Explore our collection!");
        return;
    }

    const total = cart.reduce(function(sum, product) {
        return sum + product.price;
    }, 0);

    const itemNames = cart.map(function(product) {
        return product.name;
    });

    alert(
        "YOUR NEXORA BAG\n\n" +
        itemNames.map(function(name, index) {
            return (index + 1) + ". " + name;
        }).join("\n") +
        "\n\nTotal items: " + cart.length +
        "\nTotal amount: " + formatPrice(total) +
        "\n\nThis is a demo cart. Checkout is not connected yet."
    );
});

document.getElementById("loginBtn").addEventListener("click", function() {
    showToast("Login functionality can be connected next!");
});


const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function() {
    navbar.classList.toggle("show");
});

navbar.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
        navbar.classList.remove("show");
    });
});


function showToast(message) {
    clearTimeout(toastTimer);

    toast.textContent = message;
    toast.classList.add("show");

    toastTimer = setTimeout(function() {
        toast.classList.remove("show");
    }, 2500);
}


displayProducts();
