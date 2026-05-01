export interface Product {
    description : string,
    price : number,
}

// const phone : Product = {
//     description : 'Nokia A1',
//     price : 150.0
// };

// const tablet : Product = {
//     description : 'tablet',
//     price: 330.15
// };

// const shoppingCart = [phone, tablet];

// const tax = 0.15;

interface TaxCalculationOptions {
    tax : number,
    products : Product[]
};

// function taxCalculation( options : TaxCalculationOptions ) : number[] {
//     let total = 0;
//     options.products.forEach (product  => {
//         total += product.price;
//     });
//     return [total, total * options.tax];
// }

// const result = taxCalculation({
//     products : shoppingCart,
//     tax
// });

// const [total, taxShopping] = result;

function taxCalculation( options : TaxCalculationOptions ) : [number, number] {
    let total = 0;
    const {products, tax} = options;
    products.forEach(({price}) => {
        total += price;
    });
    return [total, total * tax];
}

// const [total, taxShopping] = taxCalculation({
//     products : shoppingCart,
//     tax
// });


// console.log('total: ', total);
// console.log('tax: ', taxShopping);



export {taxCalculation};