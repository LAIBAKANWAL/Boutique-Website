
(function ($) {
    "use strict";
    
    // $('.small-images img').click(function(){
    //     var image = $(this).attr('src');
    //     $('.img-zoom-container img').attr('src' , image);
    //       });
        
    //     $('#myimage').imagezoomsl({
    //       zoomrange:[3,1],
        
    //     });






    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
});



// navbar

var sidenav = document.getElementById("sidenav");
var menubar = document.getElementById("menubar");
var closemenu = document.getElementById("close");
sidenav.style.width = "0px";
menubar.onclick=function(){

document.getElementById("sidenav").style.width = "270px";
   
}
closemenu.onclick=function(){
    document.getElementById("sidenav").style.width = "0";
}













// cart



let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};


// cart working js

if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

// making function

function ready(){
    //remove items from cart

    var removeCartButtons = document.getElementsByClassName('cart-remove')
    // console.log(removeCartButtons);
    for(var i = 0; i< removeCartButtons.length; i++){
    var button = removeCartButtons[i]
    button.addEventListener('click', removeCartItem)
    }

    //Quantity changes
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    //Add to cart
    var addCart = document.getElementsByClassName('add-cart');
    // console.log(addCart)
    for(var i = 0; i < addCart.length; i++){
var button = addCart[i]
button.addEventListener('click', addCartClicked);
    }

    //Buy button work
    document.getElementsByClassName('btn-buy1')[0].addEventListener('click', buyButtonClicked);
}

// Buy button
function buyButtonClicked(){
// alert("Your order is placed")
var cartContent = document.getElementsByClassName('cart-content')[0];
while (cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
}
updateTotal();
}

//remove items from cart

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// quantity Changes

function quantityChanged(event){
var input = event.target
if(isNaN(input.value) || input.value <= 0){
    input.value = 1;
}
updateTotal();
}

//Add to cart

function addCartClicked(event){
var button = event.target
// var shopProducts = button.parentElement
// console.log(shopProducts)

var title = document.getElementsByClassName('product-title')[0].innerText;
// console.log(title)
// console.log(document.getElementsByClassName('product-title')[0].innerText)
// title.innerText;
var price = document.getElementsByClassName('price')[0].innerText;
var productImg = document.getElementsByClassName('product-img')[0].src;

addProductToCart(title, price, productImg);
updateTotal();
}


function addProductToCart(title, price, productImg){
  var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box')
   var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    // for(var i = 0; i< cartItemsNames.length; i++){
    //       alert("You have already add this item to cart");
    //       return;
    // }

 
    var cartBoxContent = `

    <img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" min="1" value="1" class="cart-quantity">
    </div>
    
    <!-- remove cart -->
    
    <i class="fas fa-trash cart-remove"></i>`;
    
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);

   
}
// var cartBoxContent = `

// <img src="img/ballgown-12.jpg" alt="" class="car-img">
// <div class="detail-box">
//     <div class="cart-product-title">Ball Grown</div>
//     <div class="cart-price">Rs 2000.04</div>
//     <input type="number" value="1" class="cart-quantity">
// </div>

// <!-- remove cart -->

// <i class="fas fa-trash cart-remove"></i>`;

// cartShopBox.innerHTML = cartBoxContent;
// cartItems.append(cartShopBox);
// cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
// cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);







// update total
function updateTotal(){
    var  cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');

    var total = 0;

    for(var i = 0; i < cartBoxes.length; i++){
var cartBox = cartBoxes[i];
var priceElement = cartBox.getElementsByClassName('cart-price')[0];
var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];

var price = parseFloat(priceElement.innerText.replace('Rs.', ''));
var quantity = quantityElement.value

total = total + (price * quantity);
console.log(total)
}

//if price contain some cents value
total = (Math.round(total * 100) / 100).toFixed(2);
document.getElementsByClassName('total-price')[0].innerText = 'Rs. ' + total;

}




