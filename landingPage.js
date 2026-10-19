const products = [
  {
    id: 1,
    name: "Elegant Ethnic Saree",
    category: "Women Indian",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Floral Western Dress",
    category: "Women Western",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Classic Blue Formal Suit",
    category: "Men Indian",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Casual Men's Shirt",
    category: "Men Western",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Everyday Western Outfit",
    category: "Women Western",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Silk Saree",
    category: "Women Indian",
    price: 1699,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMM9h-r0YQZbRWfsDk3au35AhUhKWRrGKFJ92s86zmKlpCLAN5BaIbT8&s=10",
  },
  {
    id: 7,
    name: "Banarasi Saree",
    category: "Women Indian",
    price: 1999,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k_ro2JvryiuUAETQiqrI3CphgVlg22p3HTy6v-qLV4LOpX_Eo34wtBQx&s=10",
  },
  {
    id: 8,
    name: "Elegant Mauve Saree",
    category: "Women Indian",
    price: 1799,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcuTuHuTAPqUhUd-bLfszsdUdKx-gOGvGn8GRgsdWieOsMYmE9BJWg_SXt&s=10",
  },
  {
    id: 9,
    name: "Modern Men Dress",
    category: "Indian  Dress",
    price: 1299,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3KJG512m3Ueos5nn1KVkObALixiGtzhaRI_Jx0Kicg&s=10",
  },
  {
    id: 10,
    name: "Wedding Sherwani",
    category: "Men Indian",
    price: 2499,
    image:
      "https://www.manyavar.com/dw/image/v2/BJZV_PRD/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/default/dw0ec1b846/wedding%20blogs/Indian%20Attire%20for%20Men%20A%20Complete%20Guide_blog%202%20copy.jpg",
  },
  {
    id: 11,
    name: "Men's Ethnic Fashion",
    category: "Men Indian",
    price: 1899,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFiSnFjPKkcc7GoFnUIroldbIyAeTEusN5IfksONIDvlFSYDg0EaHUofY&s=10",
  },
  {
    id: 12,
    name: "Men's Outfit",
    category: "Indian Dress",
    price: 1399,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkGwGN3hdGDf2NQy7jf4HkQAoHclTn8i2GxJUJ-G0vOw&s",
  },
  {
    id: 13,
    name: "Elegant Men's Collection",
    category: "Men Indian",
    price: 1599,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2yd8iv5309JlyAoDwNsE2BJqcX-9PznXkQtrXd5J2z7lZzyv9D7sv1vU&s=10",
  },
  {
    id: 14,
    name: "Premium White Kurta ",
    category: "Men Indian",
    price: 1899,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjipebozmplTHEDmHX4ynWarLA6Vwl5lktuosiD4nrw&s=10",
  },
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");
const emptyMessage = document.getElementById("emptyMessage");
const cartCount = document.getElementById("cartCount");
const cartBtn = document.getElementById("cartBtn");
const cartMessage = document.getElementById("cartMessage");
const loginBtn = document.getElementById("loginBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

let selectedCategory = "All";
let cart = [];

function displayProducts(items) {
  productGrid.innerHTML = "";

  emptyMessage.hidden = items.length > 0;

  items.forEach(function (product) {
    const productCard = document.createElement("article");
    productCard.className = "product-card";

    productCard.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >
            <h3>${product.name}</h3>
            <p>${product.category.replace(" ", " · ")}</p>
            <p class="price">₹${product.price.toLocaleString("en-IN")}</p>
            <button
                type="button"
                class="add-to-cart"
                data-id="${product.id}"
            >
                Add to Bag
            </button>
        `;

    productGrid.appendChild(productCard);
  });
}

function filterProducts() {
  const searchText = searchInput.value.trim().toLowerCase();

  const filteredProducts = products.filter(function (product) {
    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText);

    let matchesCategory = false;

    if (selectedCategory === "All") {
      matchesCategory = true;
    } else if (selectedCategory === "Women") {
      matchesCategory = product.category.startsWith("Women ");
    } else if (selectedCategory === "Men") {
      matchesCategory = product.category.startsWith("Men ");
    } else if (selectedCategory === "Women Indian") {
      matchesCategory = product.category === "Women Indian";
    } else if (selectedCategory === "Women Western") {
      matchesCategory = product.category === "Women Western";
    } else if (selectedCategory === "Men Indian") {
      matchesCategory = product.category === "Men Indian";
    } else if (selectedCategory === "Men Western") {
      matchesCategory = product.category === "Men Western";
    }

    return matchesSearch && matchesCategory;
  });

  displayProducts(filteredProducts);
}

categoryFilters.addEventListener("click", function (event) {
  const clickedButton = event.target.closest(".filter-btn");

  if (!clickedButton) {
    return;
  }

  selectedCategory = clickedButton.dataset.category || "All";

  document.querySelectorAll(".filter-btn").forEach(function (button) {
    button.classList.toggle("active", button === clickedButton);
  });

  filterProducts();
});

searchInput.addEventListener("input", filterProducts);

productGrid.addEventListener("click", function (event) {
  const addButton = event.target.closest(".add-to-cart");

  if (!addButton) {
    return;
  }

  const productId = Number(addButton.dataset.id);

  const selectedProduct = products.find(function (product) {
    return product.id === productId;
  });

  if (selectedProduct) {
    cart.push(selectedProduct);
    cartCount.textContent = cart.length;

    cartMessage.textContent = selectedProduct.name + " added to your bag.";

    addButton.textContent = "Added!";
  }
});

cartBtn.addEventListener("click", function () {
  if (cart.length === 0) {
    cartMessage.textContent = "Your bag is empty.";
    return;
  }

  const totalPrice = cart.reduce(function (total, product) {
    return total + product.price;
  }, 0);

  const itemNames = cart.map(function (product) {
    return product.name;
  });

  alert(
    "Your Bag\n\n" +
      itemNames.join("\n") +
      "\n\nTotal Items: " +
      cart.length +
      "\nTotal: ₹" +
      totalPrice.toLocaleString("en-IN"),
  );
});

loginBtn.addEventListener("click", function () {
  alert("Welcome to VELORA!\nLogin feature is coming soon.");
});

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

navLinks.addEventListener("click", function (event) {
  if (event.target.closest("a")) {
    navLinks.classList.remove("show");
  }
});

document.querySelectorAll(".category-card").forEach(function (card) {
  card.addEventListener("click", function () {
    selectedCategory = card.dataset.category || "All";

    document.querySelectorAll(".filter-btn").forEach(function (button) {
      button.classList.toggle(
        "active",
        button.dataset.category === selectedCategory,
      );
    });

    filterProducts();
  });
});

displayProducts(products);
