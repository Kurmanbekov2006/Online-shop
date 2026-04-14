const products = [
  { id: 1, name: "Телефон", price: 20000 },
  { id: 2, name: "Ноутбук", price: 50000 },
  { id: 3, name: "Наушники", price: 3000 }
];

const productsDiv = document.getElementById("products");
const cartUl = document.getElementById("cart");
const totalSpan = document.getElementById("total");

let cart = [];

renderProducts();

function renderProducts() {
  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.price} сом</p>
      <button onclick="addToCart(${product.id})">Купить</button>
    `;

    productsDiv.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  cartUl.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} сом`;
    cartUl.appendChild(li);
    total += item.price;
  });

  totalSpan.textContent = total;
}