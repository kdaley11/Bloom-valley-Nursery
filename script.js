document.addEventListener("DOMContentLoaded", () => {
  const subscribeBtn = document.getElementById("subscribeBtn");
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
      alert("Thank you for subscribing.");
    });
  }

  const addToCartBtn = document.getElementById("addToCartBtn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
      cart.push("Flower Item");
      sessionStorage.setItem("cart", JSON.stringify(cart));
      alert("Item added to the cart.");
    });
  }

  const viewCartBtn = document.getElementById("viewCartBtn");
  if (viewCartBtn) {
    viewCartBtn.addEventListener("click", () => {
      let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
      if (cart.length === 0) {
        alert("Your cart is empty.");
      } else {
        alert("Cart Items: " + cart.join(", "));
      }
    });
  }

  const clearCartBtn = document.getElementById("clearCartBtn");
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      sessionStorage.removeItem("cart");
      alert("Cart cleared.");
    });
  }

  const processOrderBtn = document.getElementById("processOrderBtn");
  if (processOrderBtn) {
    processOrderBtn.addEventListener("click", () => {
      alert("Thank you for your order.");
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const customOrder = {
        name: name,
        email: email,
        message: message
      };

      localStorage.setItem("customOrder", JSON.stringify(customOrder));
      alert("Thank you for your message.");
    });
  }
});