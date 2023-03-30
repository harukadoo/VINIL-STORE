function filterProducts() {
  
  let price1 = document.getElementById("price1").checked;
  let price2 = document.getElementById("price2").checked;
  let price3 = document.getElementById("price3").checked;
  let price4 = document.getElementById("price4").checked;

 
  let products = document.getElementsByClassName("product-card__content");

  
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let price = product.getAttribute("data-price");

    if ((price1 && price >= 350 && price <= 500) || 
        (price2 && price >= 250 && price < 350) ||
        (price3 && price >= 150 && price < 250) || 
        (price4 && price >= 100 && price < 150)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  }
}

document.getElementById("price1").addEventListener("click", filterProducts);
document.getElementById("price2").addEventListener("click", filterProducts);
document.getElementById("price3").addEventListener("click", filterProducts);
document.getElementById("price4").addEventListener("click", filterProducts);
