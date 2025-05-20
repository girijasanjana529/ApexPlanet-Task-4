const products = [
  { name: "T-Shirt", category: "clothing", price: 499, rating: 4.2 },
  { name: "Laptop", category: "electronics", price: 45999, rating: 4.7 },
  { name: "Jeans", category: "clothing", price: 999, rating: 4.0 },
  { name: "Smartphone", category: "electronics", price: 19999, rating: 4.5 },
  { name: "Book: JS Basics", category: "books", price: 299, rating: 3.8 },
  { name: "Book: Python Guide", category: "books", price: 499, rating: 4.4 },
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortRating = document.getElementById("sortRating");

// Render products
function renderProducts(items) {
  productList.innerHTML = "";
  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Category: ${item.category}</p>
      <p>Price: ₹${item.price}</p>
      <p>Rating: ⭐ ${item.rating}</p>
    `;
    productList.appendChild(div);
  });
}

function filterAndSort() {
  let filtered = [...products];

  // Filter by category
  const selectedCategory = categoryFilter.value;
  if (selectedCategory !== "all") {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  // Filter by price
  const maxPrice = parseFloat(priceFilter.value);
  if (!isNaN(maxPrice)) {
    filtered = filtered.filter(p => p.price <= maxPrice);
  }

  // Sort by rating
  if (sortRating.value === "ratingHigh") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

// Event listeners
categoryFilter.addEventListener("change", filterAndSort);
priceFilter.addEventListener("input", filterAndSort);
sortRating.addEventListener("change", filterAndSort);

// Initial render
renderProducts(products);
