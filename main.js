// masala 1

function man() {
    let erkak = products.filter((product) => {
        return product.category == ("men's clothing")
    })
    console.log(erkak);

}

function woman() {
    let erkak = products.filter((product) => {
        return product.category == ("women's clothing")
    })
    console.log(erkak);

}

// masala 2

let purchasedProducts = [];
let totalSum = 0;

function buyButton() {
    const name = prompt("Mahsulot nomini kiriting:");
    const count = parseInt(prompt("Nechta sotib olishni xohlaysiz?"));

    const productToBuy = products.find(product => product.title === name);

    if (productToBuy) {
        purchasedProducts.push({ ...productToBuy, count });
        totalSum += productToBuy.price * count; 
        console.log(`Sotib olindi: ${count} ta ${name}`);
    } else {
        console.log("Bunday mahsulot topilmadi.");
    }
}


function totalSumButton() {
    console.log("Umumiy Sotib Olingan Mahsulotlar:", purchasedProducts);
    console.log("Umumiy Summa:", totalSum);
}


// masala 3

function Top_mahsulotlar() {
    products.forEach((product) => {
        if (product.rating.rate >= 3.5 && product.rating.rate <= 5) {
            console.log(`reytingi 3.5 dan baland va 5 dan kichik mahsulotlar:  ${product.title}`);
        }

    })

}


// masala 4

function sortByCountButton() {
    const sort = products.filter(product => product.rating.count).sort((a, b) => b.rating.count - a.rating.count)

    console.log("count bo'yicha saralangan mahsulotlar: ");

    sort.forEach(product => {
        console.log(`Mahsulot: ${product.title}, Count: ${product.rating.count}`);
    });
    
}

// masala 5

function categoryListButton() {
    const categories = [...new Set(products.map(product => product.category))];

    console.log("Barcha Kategoriyalar:");
    categories.forEach(category => {
        console.log(category);
    });
}
