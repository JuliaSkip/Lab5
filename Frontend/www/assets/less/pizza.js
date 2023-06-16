
//масив з купленими піцами
var h4Elements = document.querySelectorAll('.list .mainLine h4');
var boughtPizzas = Array.from(h4Elements).map(function(h4Element) {
  return h4Element.textContent.trim();
});
document.querySelector('.shoppingСart').innerHTML = boughtPizzas.length

function addEventListener(){

var buyElement = document.querySelector('.list');
var buyData = {
  innerHTML: buyElement.innerHTML,
};
localStorage.setItem('pizza', JSON.stringify(buyData));

var removeButton = document.querySelectorAll('.canRemove');
removeButton.forEach(function(removeButton) {
    removeButton.removeEventListener('click', decreaseAmount);
    removeButton.addEventListener('click', decreaseAmount);
});

var buySmallButton = document.querySelectorAll('.buyS');
buySmallButton.forEach(function(buySmallButton) {
    buySmallButton.removeEventListener('click', buySmallPizza);
    buySmallButton.addEventListener('click', buySmallPizza);
});

var buyBigButton = document.querySelectorAll('.buyB');
buyBigButton.forEach(function(buyBigButton) {
    buyBigButton.removeEventListener('click', buyBigPizza);
    buyBigButton.addEventListener('click', buyBigPizza);
});

var addButton = document.querySelectorAll('.addGoods');
addButton.forEach(function(addButton) {
    addButton.removeEventListener('click', increaseAmount);
    addButton.addEventListener('click', increaseAmount);
});

var clearOrder = document.querySelectorAll('.clearOrder');
clearOrder.forEach(function(clearOrder) {
    clearOrder.removeEventListener('click', clearTheOrder);
    clearOrder.addEventListener('click', clearTheOrder);
});

var deletePizza = document.querySelectorAll('.cross');
deletePizza.forEach(function(deletePizza) {
    deletePizza.removeEventListener('click', removePizza);
    deletePizza.addEventListener('click', removePizza);
});
}

//фільтри
var typesSpan = document.querySelector('.types');
typesSpan.addEventListener('click', function(event) {

  var types = typesSpan.querySelectorAll('p');
  types.forEach(function(f){
       f.classList.remove('active')
   });

  var target = event.target;
  var all = document.querySelectorAll('.col-sm-6');


  if (target.classList.contains('allTypes')) {
    all.forEach(function(element) {
        element.style.display = 'inline-block';
        target.classList.add('active')
    });

  } else if (target.classList.contains('meatType')) {
    all.forEach(function(element) {
        if(!element.classList.contains('meat')){
        element.style.display = 'none';
        target.classList.add('active')
        }else{
            element.style.display = 'inline-block';
        }
    });

  } else if (target.classList.contains('pineaplesType')) {
    all.forEach(function(element) {
        if(!element.classList.contains('pineaples')){
        element.style.display = 'none';
        target.classList.add('active')
        }else{
            element.style.display = 'inline-block';
        }
    });

  } else if (target.classList.contains('mushroomsType')) {
    all.forEach(function(element) {
        if(!element.classList.contains('mushrooms')){
        element.style.display = 'none';
        target.classList.add('active')
        }else{
            element.style.display = 'inline-block';
        }
    });

  } else if (target.classList.contains('seafoodType')) {
    all.forEach(function(element) {
        if(!element.classList.contains('seafood')){
        element.style.display = 'none';
        target.classList.add('active')
        }else{
            element.style.display = 'inline-block';
        }
    });

  } else if (target.classList.contains('vegaType')) {
    all.forEach(function(element) {
        if(!element.classList.contains('vega')){
        element.style.display = 'none';
        target.classList.add('active');
        }else{
            element.style.display = 'inline-block';
        }
    });
  }
});


//купити малу піцу
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
    addEventListener();
    
}

//купити велику піцу
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
    window.localStorage.setItem('pizzas', document.querySelectorAll('.mainLine'));
    addEventListener();
}


//очищення кошика
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

// збільшення кількості піци
function increaseAmount(){
    var line = this.closest('.line');
    var goods = line.querySelector('.goods');
    var amount = parseInt(goods.textContent);

    var price = line.querySelector('.price');
    var factPrice = parseInt(price.textContent)/amount;

    var conclusion = document.querySelector('.totalPrice');
    var pay = parseInt(conclusion.textContent)

    price.innerHTML = parseInt(price.textContent) + factPrice + "грн"
    conclusion.innerHTML = (pay + factPrice) + " грн"
    amount++
    goods.innerHTML = amount;
}

//зменшення кількості піци
function decreaseAmount(){
    var list = document.querySelector('.list');
    var line = this.closest('.line');
    var name = line.querySelector('h4').textContent;
    var goods = line.querySelector('.goods');
    var amount = parseInt(goods.textContent);

    var price = line.querySelector('.price');
    var factPrice = parseInt(price.textContent)/amount;

    var conclusion = document.querySelector('.totalPrice');
    var pay = parseInt(conclusion.textContent)

    conclusion.innerHTML = (pay - factPrice) + " грн"
    if(amount>1){
        price.innerHTML = parseInt(price.textContent) - factPrice + "грн"
        amount--
        goods.innerHTML = amount;
    }else{
        list.removeChild(line.parentNode);
        boughtPizzas.splice(boughtPizzas.indexOf(name), 1);
    }
    document.querySelector('.shoppingСart').innerHTML = boughtPizzas.length
}


//видалення піци
function removePizza(){
    var list = document.querySelector('.list');
    var line = this.closest('.line');
    var name = line.querySelector('h4').textContent;

    var price = line.querySelector('.price');
    var factPrice = parseInt(price.textContent);

    var conclusion = document.querySelector('.totalPrice');
    var pay = parseInt(conclusion.textContent)

    conclusion.innerHTML = (pay - factPrice) + " грн"
    list.removeChild(line.parentNode);
    boughtPizzas.splice(boughtPizzas.indexOf(name), 1);
    document.querySelector('.shoppingСart').innerHTML = boughtPizzas.length
}

addEventListener();