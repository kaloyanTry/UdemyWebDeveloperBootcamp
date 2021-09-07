// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const listContainer = document.querySelector("#list")

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const product = document.querySelector("#product");
    const qty = document.querySelector("#qty");

    addProduct(product.value, qty.value);
    product.value = '';
    qty.value = '';
});

const addProduct = (product, qty) => {
    const newList = document.createElement("li");
    newList.innerHTML = `${qty} ${product}`;
    listContainer.appendChild(newList);
}