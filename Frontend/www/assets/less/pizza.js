//масив з купленими піцами
var h4Elements = document.querySelectorAll('.list .mainLine h4');
var boughtPizzas = Array.from(h4Elements).map(function(h4Element) {
  return h4Element.textContent.trim();
});
document.querySelector('.shoppingСart').innerHTML = boughtPizzas.length

//купити малу піцу
var buySmallButton = document.querySelectorAll('.buyS');
buySmallButton.forEach(function(buySmallButton) {
    buySmallButton.addEventListener('click', buySmallPizza);
});

function buySmallPizza(){
    var pizzaCard = this.closest('.pizza-card');
    var name = pizzaCard.querySelector('.caption h3').textContent;
    var photo = pizzaCard.querySelector('.images').getAttribute('src');
    var substringToRemove = ".jpg";
    var smallPhoto = photo.replace(substringToRemove, "-removebg-preview.png");
    var conclusion = document.querySelector('.totalPrice');
    var pay = parseInt(conclusion.textContent)

    var smallPrice = pizzaCard.querySelector('.smallPrice').textContent;
    var smallWeight = pizzaCard.querySelector('.smallWeight').textContent;

    if(!boughtPizzas.includes(name+" (Мала)")){
    var newLine = document.createElement("div");
    newLine.classList.add("mainLine");
    newLine.innerHTML = 
      `<section class="line">

      <h4>${name} (Мала)</h4>

      <div class="buyIcons">
          <p> <img src="assets/images/size-icon.svg" alt="Size Icon"> 30 </p>
          <p> <img src="assets/images/weight.svg" alt="Size Icon"> ${smallWeight} </p>
      </div>

      <div class="block"> 
          <b class="price">${smallPrice}грн</b>
          <span class="canRemove"><b>–</b></span>
          <span class="goods">1</span>
          <span class="addGoods"><b>+</b></span>
          <span class="cross"><h3><b>⨯</b></h3></span>
      </div>

      <img src="${smallPhoto}" class="smallImages">

      </section>`;

    var firstPart = document.querySelector('.list');
    firstPart.appendChild(newLine);
    boughtPizzas.push(name+" (Мала)");
    document.querySelector('.shoppingСart').innerHTML = boughtPizzas.length
    conclusion.innerHTML = (pay + parseInt(smallPrice))+" грн";
    }else{
        var lines = document.querySelectorAll('.line h4');
        var goods = document.querySelectorAll('.goods');
        var price = document.querySelectorAll('.price');
        var totalName = name + " (Мала)";
        for (var i = 0; i < lines.length; i++) {
          var nameBought = lines[i].textContent;
          var amount = parseInt(goods[i].textContent);
          var totalPrice = parseInt(price[i].textContent);
          if (nameBought.includes(totalName)) {
            amount++
            goods[i].innerHTML = amount;
            price[i].innerHTML = (totalPrice + parseInt(smallPrice))+"грн";
            conclusion.innerHTML = (pay + parseInt(smallPrice))+" грн"
          }
        }
    }
}

//купити велику піцу
var buyBigButton = document.querySelectorAll('.buyB');
buyBigButton.forEach(function(buyBigButton) {
    buyBigButton.addEventListener('click', buyBigPizza);
});

function buyBigPizza(){
    var pizzaCard = this.closest('.pizza-card');
    var name = pizzaCard.querySelector('.caption h3').textContent;
    var photo = pizzaCard.querySelector('.images').getAttribute('src');
    var substringToRemove = ".jpg";
    var smallPhoto = photo.replace(substringToRemove, "-removebg-preview.png");
    var conclusion = document.querySelector('.totalPrice');
    var pay = parseInt(conclusion.textContent)

    var bigPrice = pizzaCard.querySelector('.bigPrice').textContent;
    var bigWeight = pizzaCard.querySelector('.bigWeight').textContent;

    if(!boughtPizzas.includes(name+" (Велика)")){
    var newLine = document.createElement("div");
    newLine.classList.add("mainLine");
    newLine.innerHTML = 
      `<section class="line">

      <h4>${name} (Велика)</h4>

      <div class="buyIcons">
          <p> <img src="assets/images/size-icon.svg" alt="Size Icon"> 40 </p>
          <p> <img src="assets/images/weight.svg" alt="Size Icon"> ${bigWeight} </p>
      </div>

      <div class="block"> 
          <b class="price">${bigPrice}грн</b>
          <span class="canRemove"><b>–</b></span>
          <span class="goods">1</span>
          <span class="addGoods"><b>+</b></span>
          <span class="cross"><h3><b>⨯</b></h3></span>
      </div>

      <img src="${smallPhoto}" class="smallImages">

      </section>`;

    var firstPart = document.querySelector('.list');
    firstPart.appendChild(newLine);
    boughtPizzas.push(name+" (Велика)");
    document.querySelector('.shoppingСart').innerHTML = boughtPizzas.length
    conclusion.innerHTML = (pay + parseInt(bigPrice))+" грн";
    }else{
        var lines = document.querySelectorAll('.line h4');
        var goods = document.querySelectorAll('.goods');
        var price = document.querySelectorAll('.price');
        var totalName = name + " (Велика)";
        for (var i = 0; i < lines.length; i++) {
          var nameBought = lines[i].textContent;
          var amount = parseInt(goods[i].textContent);
          var totalPrice = parseInt(price[i].textContent);
          if (nameBought.includes(totalName)) {
            amount++
            goods[i].innerHTML = amount;
            price[i].innerHTML = (totalPrice + parseInt(bigPrice))+"грн";
            conclusion.innerHTML = (pay + parseInt(bigPrice))+" грн"
          }
        }
    }
}


//очищення кошика
var clearOrder = document.querySelectorAll('.clearOrder');
clearOrder.forEach(function(clearOrder) {
    clearOrder.addEventListener('click', clearTheOrder);
});

function clearTheOrder(){
    var list = document.querySelector('.list');
    boughtPizzas.splice(0, boughtPizzas.length);
    document.querySelector('.shoppingСart').innerHTML = boughtPizzas.length
    list.innerHTML = 
    `<div class="conclusion">
    <h5><b>Сума замовлення</b></h5>
    <h4><b class="totalPrice">0 грн</b></h4>
    </div>
    <a href="#" class="orderButton"><h3>Замовити</h3></a>`;
}

