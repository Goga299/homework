const discount = 10;
const CHARACTERISTIC = "CHARACTERISTIC"


const product = {
    name: "Ноутбук",
    price: 60000,
    discount,
    [CHARACTERISTIC]: {
        brand: "Apple",
        processor: "M1"
    },
};

const product2 = { ...product };
product2.name = "Планшет";


console.log(product2);
console.log(product);
// const users = {
//     0: "Bob",
//     1: "john",
//     2: "Alex",
// };
// // особенность то что она соортируетс я от меньшего к большому даже если они стоят не по порялку
// for (let i = 0; i < 3; i++) {
//     console.log(users[i]);
// }

// for (const productKey in product) {
//     if (productKey === "characteristic"){
//         for(const charKey in product[productKey]) {
//     console.log(`${charKey}:`, product[productKey][charKey]);
// }
//     } else {
//         console.log(`${productKey}:`, product[productKey]);
//     }
// }

