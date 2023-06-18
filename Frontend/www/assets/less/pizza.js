//метод запису у файл
function downloadJSON(data, filename) {
    const jsonContent = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    
    URL.revokeObjectURL(url);
}

// дані
const jsonData = [
    {
        icon:'assets/images/pizza_7.jpg',
        title: "Імпреза",
        type: 'М’ясна піца',
        content: {
            meat: ['балик', 'салямі'],
            chicken: ['курка'],
            cheese: ['сир моцарелла', 'сир рокфорд'],
            pineapple: ['ананаси'],
            additional: ['томатна паста', 'петрушка']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 99
        },
        big_size:{
            weight: 660,
            size: 40,
            price: 169
        },
        is_new:true,
        is_popular:true

    },
    {
        icon:'assets/images/pizza_2.jpg',
        title: "BBQ",
        type: 'М’ясна піца',
        content: {
            meat: ['мисливські ковбаски', 'ковбаски папероні', 'шинка'],
            cheese: ['сир домашній'],
            mushroom: ['шампінйони'],
            additional: ['петрушка', 'оливки']
        },
        small_size:{
            weight: 460,
            size: 30,
            price: 139
        },
        big_size:{
            weight: 840,
            size: 40,
            price: 199
        },
        is_popular:true
    },
    {
        icon:'assets/images/pizza_1.jpg',
        title: "Міксовий поло",
        type: 'М’ясна піца',
        content: {
            meat: ['шинка', 'курка копчена'],
            cheese: ['сир моцарелла'],
            pineapple: ['ананаси'],
            additional: ['кукурудза', 'петрушка', 'соус томатний']
        },
        small_size:{
            weight: 430,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 179
        }
    },
    {
        icon:'assets/images/pizza_5.jpg',
        title: "Сициліано",
        type: 'М’ясна піца',
        content: {
            meat: ['шинка', 'салямі'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            additional: ['перець болгарський',  'соус томатний']
        },
        small_size:{
            weight: 450,
            size: 30,
            price: 111
        },
        big_size:{
            weight: 790,
            size: 40,
            price: 169
        }
    },
    {
        icon:'assets/images/pizza_3.jpg',
        title: "Маргарита",
        type: 'Вега піца',
        content: {
            cheese: ['сир моцарелла', 'сир домашній'],
            tomato: ['помідори'],
            additional: ['базилік', 'оливкова олія', 'соус томатний']
        },
        small_size:{
            weight: 370,
            size: 30,
            price: 89
        }
    },
    {
        icon:'assets/images/pizza_6.jpg',
        title: "Мікс смаків",
        type: 'М’ясна піца',
        content: {
            meat: ['ковбаски'],
            cheese: ['сир моцарелла'],
            mushroom: ['шампінйони'],
            pineapple: ['ананаси'],
            additional: ['цибуля кримська', 'огірки квашені', 'соус гірчичний']
        },
        small_size:{
            weight: 470,
            size: 30,
            price: 115
        },
        big_size:{
            weight: 780,
            size: 40,
            price: 180
        }
    },
    {
        icon:'assets/images/pizza_8.jpg',
        title: "Дольче Маре",
        type: 'Морська піца',
        content: {
            ocean: ['криветки тигрові', 'мідії', 'ікра червона', 'філе червоної риби'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        big_size:{
            weight: 845,
            size: 40,
            price: 399
        }
    },
    {
        icon:'assets/images/pizza_4.jpg',
        title: "Россо Густо",
        type: 'Морська піца',
        content: {
            ocean: ['ікра червона', 'лосось копчений'],
            cheese: ['сир моцарелла'],
            additional: ['оливкова олія', 'вершки']
        },
        small_size:{
            weight: 400,
            size: 30,
            price: 189
        },
        big_size:{
            weight: 700,
            size: 40,
            price: 299
        }
    }
];

/*запис у файл
const filename = 'data.json';
downloadJSON(jsonData, filename);*/

//масив з купленими піцами
var h4Elements = document.querySelectorAll('.list .mainLine h4');
var boughtPizzas = Array.from(h4Elements).map(function(h4Element) {
  return h4Element.textContent.trim();
});
document.querySelector('.shoppingСart').innerHTML = boughtPizzas.length

var boughtPizzas = [];

function updateLocalStorage() {
    var buyElement = document.querySelector('.buy');
    var buyData = {
      innerHTML: buyElement.innerHTML,
    };
    localStorage.setItem('pizza', JSON.stringify(buyData));

    localStorage.setItem('boughtPizzas', JSON.stringify(boughtPizzas));
}

function loadBoughtPizzasFromLocalStorage() {
    var buyList = JSON.parse(localStorage.getItem('pizza'));
    var firstPart = document.querySelector('.buy');
    firstPart.innerHTML="";
    var newElement = document.createElement('div');
    newElement.innerHTML = buyList.innerHTML;
    firstPart.appendChild(newElement);

    var storedPizzas = localStorage.getItem('boughtPizzas');
    if (storedPizzas) {
    boughtPizzas = JSON.parse(storedPizzas);
    document.querySelector('.shoppingСart').innerHTML = boughtPizzas.length;
  }
}


function addEventListener(){

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
    updateLocalStorage();
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
    updateLocalStorage();
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
    updateLocalStorage();
    addEventListener();
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
    updateLocalStorage();
    addEventListener();
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
    updateLocalStorage();
    addEventListener();
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
    updateLocalStorage();
    addEventListener();
}

loadBoughtPizzasFromLocalStorage();
addEventListener();
