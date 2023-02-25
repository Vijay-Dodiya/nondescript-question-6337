let Container = document.getElementById("wishlist-container");

let wishlistarray = JSON.parse(localStorage.getItem("wishlist"));

function DisplayData() {
  Container.innerHTML = "";
  wishlistarray.forEach((product) => {
    let Card = document.createElement("div");
    let Image = document.createElement("img");
    let Brand = document.createElement("h2");
    let Price = document.createElement("h3");
    let Remove = document.createElement("button");
    Image.src = product.image;
    Brand.textContent = product.brand;
    Price.textContent = `₹${product.price}`;
    Remove.textContent = "Remove";

    Remove.addEventListener("click", () => {
      wishlistarray = wishlistarray.filter((ele) => {
        return ele.id !== product.id;
      });
      localStorage.setItem("wishlist", JSON.stringify(wishlistarray));
      DisplayData();
    });

    Card.append(Image, Brand, Price, Remove);
    Container.append(Card);
  });
}
DisplayData();
