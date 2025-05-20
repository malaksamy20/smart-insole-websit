// Example product added to cart
let product = {
  id: 1,
  name: "Nike Air Max",
  price: 120,
  quantity: 1,
  image: "airmax.jpg"
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));

