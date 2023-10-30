var feProduct = [
    {
        feImg : "img/products/f1.jpg",
        feName : "addidas",
        feTitle : "Cartoon Astronout T-shirt",
        fePrice : "$78",
    },
    {
        feImg : "img/products/f2.jpg",
        feName : "addidas",
        feTitle : "Cartoon Astronout T-shirt",
        fePrice : "$78",
    },
    {
        feImg : "img/products/f3.jpg",
        feName : "addidas",
        feTitle : "Cartoon Astronout T-shirt",
        fePrice : "$78",
    },
    {
        feImg : "img/products/f4.jpg",
        feName : "addidas",
        feTitle : "Cartoon Astronout T-shirt",
        fePrice : "$78",
    },
    {
        feImg : "img/products/f5.jpg",
        feName : "addidas",
        feTitle : "Cartoon Astronout T-shirt",
        fePrice : "$78",
    },
    {
        feImg : "img/products/f6.jpg",
        feName : "addidas",
        feTitle : "Cartoon Astronout T-shirt",
        fePrice : "$78",
    },
    {
        feImg : "img/products/f7.jpg",
        feName : "addidas",
        feTitle : "Cartoon Astronout T-shirt",
        fePrice : "$78",
    },
    {
        feImg : "img/products/f8.jpg",
        feName : "addidas",
        feTitle : "Cartoon Astronout T-shirt",
        fePrice : "$78",
    },
    
]

for(i=0;i<feProduct.length;i++){
    document.querySelector('.pro-container').innerHTML+=`
    <div class="pro">
    <img src="${feProduct[i].feImg}" alt="">
    <div class="des">
        <span>${feProduct[i].feName}</span>
    <h5>${feProduct[i].feTitle}</h5>
    <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <h4>${feProduct[i].fePrice}</h4>
    </div>
    <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
</div>`
}

var newProduct = [
    {
        neImg : "img/products/n1.jpg",
        neName : "addidas",
        neTitle : "Cartoon Astronout T-shirt",
        nePrice : "$78",
    },
    {
        neImg : "img/products/n2.jpg",
        neName : "addidas",
        neTitle : "Cartoon Astronout T-shirt",
        nePrice : "$78",
    },
    {
        neImg : "img/products/n3.jpg",
        neName : "addidas",
        neTitle : "Cartoon Astronout T-shirt",
        nePrice : "$78",
    },
    {
        neImg : "img/products/n4.jpg",
        neName : "addidas",
        neTitle : "Cartoon Astronout T-shirt",
        nePrice : "$78",
    },
    {
        neImg : "img/products/n5.jpg",
        neName : "addidas",
        neTitle : "Cartoon Astronout T-shirt",
        nePrice : "$78",
    },
    {
        neImg : "img/products/n6.jpg",
        neName : "addidas",
        neTitle : "Cartoon Astronout T-shirt",
        nePrice : "$78",
    },
    {
        neImg : "img/products/n7.jpg",
        neName : "addidas",
        neTitle : "Cartoon Astronout T-shirt",
        nePrice : "$78",
    },
    {
        neImg : "img/products/n8.jpg",
        neName : "addidas",
        neTitle : "Cartoon Astronout T-shirt",
        nePrice : "$78",
    },
    
]

for(i=0;i<newProduct.length;i++){
    document.querySelector('.new-arrival').innerHTML+=`
    <div class="pro">
    <img src="${newProduct[i].neImg}" alt="">
    <div class="des">
        <span>${newProduct[i].neName}</span>
    <h5>${newProduct[i].neTitle}</h5>
    <div class="star">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <h4>${newProduct[i].nePrice}</h4>
    </div>
    <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
</div>`
}

// // Image Slider Detail Page

// function ImgSlider (anything) {
//     document.querySelector('#MainImg').src = anything;
// }