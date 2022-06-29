const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
},
{
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
},
{
    productName: "TV",
    quantity: 10,
    description: "television"
},
{
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
},
{
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
}
];
function getUniqueProductCount(name) {
    var obj = {};
    name.map((e) => {
        if (obj[e.productName] == undefined) {
            obj[e.productName] = 1;
        }
        else {
            obj[e.productName] = obj[e.productName] + 1
        }
    });
    console.log(obj)

}
getUniqueProductCount(listOfProducts)



function getUniquePrducts(products) {
    let obj = {}
    let arr = []
    for (let i = 0; i < products.length; i++) {
        if (obj[products[i].productName] === undefined) {
            obj[products[i].productName] = arr.length;
            arr.push(products[i]);
        } else {
            arr[obj[products[i].productName]].quantity = arr[obj[products[i].productName]].quantity + products[i].quantity;
        }
    }
    console.log(arr)
}
getUniquePrducts(listOfProducts)
