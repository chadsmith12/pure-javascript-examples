/**
 * Example of using ajax to load up a JSON file.
 * Examples shows working with json files
 */

document.getElementById("getSingleProductBtn").addEventListener('click', loadProduct);
document.getElementById("getProductsBtn").addEventListener('click', loadProducts);

// load a single product
function loadProduct(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "testFiles/product.json", true);

    xhr.onload = function () {
        if(this.status === 200) {
            const product = JSON.parse(this.responseText);
            const output = 
            `<ul>
                <li>Id: ${product.id}</li>
                <li>SKU: ${product.sku}</li>
                <li>Product Name: ${product.productName}</li>
            </ul>
            `
            document.querySelector("#product").innerHTML = output;
        }
    }

    xhr.send();
}

// load an array of products
function loadProducts(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "testFiles/products.json", true);

    xhr.onload = function () {
        if(this.status === 200) {
            const products = JSON.parse(this.responseText);
            let output = '';
            products.forEach(product => {
                output += 
                    `<ul>
                        <li>Id: ${product.id}</li>
                        <li>SKU: ${product.sku}</li>
                        <li>Product Name: ${product.productName}</li>
                    </ul>
                    `
            });
            
            document.querySelector("#products").innerHTML = output;
        }
    }

    xhr.send();
}