function filterProducts() {
  
  var price1 = document.getElementById("price1").checked;
  var price2 = document.getElementById("price2").checked;
  var price3 = document.getElementById("price3").checked;
  var price4 = document.getElementById("price4").checked;

 
  var products = document.getElementsByClassName("product-card__content");

  
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var price = product.getAttribute("data-price");

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
