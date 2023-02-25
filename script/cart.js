let Container = document.getElementById("cart-container");

let Cart = JSON.parse(localStorage.getItem("cart"));

function DisplayData() {
  Container.innerHTML = "";
  Cart.forEach((product) => {
    let Card = document.createElement("div");
    let Image = document.createElement("img");
    let Name = document.createElement("h2");
    let Price = document.createElement("h3");
    let Remove = document.createElement("button");
    let Increase = document.createElement("button");
    let Decrease = document.createElement("button");
    let Quantity = document.createElement("span");
    Image.src = product.image_link;
    Name.textContent = product.brand;
    Price.textContent = `₹${product.price}`;
    Quantity.textContent = product.quantity;
    Increase.textContent = "+";
    Decrease.textContent = "-";
    Remove.textContent = "Remove";

    Remove.addEventListener("click", () => {
      Cart = Cart.filter((ele) => {
        return ele.id !== product.id;
      });
      localStorage.setItem("cart", JSON.stringify(Cart));
      DisplayData();
    });
    Increase.addEventListener("click", () => {
      product = product.quantity++;

      localStorage.setItem("cart", JSON.stringify(Cart));
      DisplayData();
    });
    Decrease.addEventListener("click", () => {
      if (product.quantity > 1) {
        product = product.quantity--;
        localStorage.setItem("cart", JSON.stringify(Cart));
        DisplayData();
      }
    });

    let sum = 0;
    for (let i = 0; i < Cart.length; i++) {
      sum += Cart[i].price * Cart[i].quantity;
    }

    document.getElementById("cart-total").textContent = sum;
    Card.append(Image, Name, Price, Increase, Quantity, Decrease, Remove);
    Container.append(Card);
  });
}
DisplayData();
