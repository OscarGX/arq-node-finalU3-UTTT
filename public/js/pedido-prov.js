const queryParams = new URLSearchParams(window.location.search);
const producto = document.querySelector('#exampleFormControlInput0');
const cantidad = document.querySelector('#exampleFormControlSelect1');
const total = document.querySelector('#exampleFormControlInput2');
const pedidoTitle = document.querySelector('.pedidoTitle');
if (queryParams.has('prov')) {
    pedidoTitle.innerText = `Nuevo pedido a ${queryParams.get('prov')}`;
    producto.value = queryParams.get('prod');
    cantidad.value = queryParams.get('cant');
    total.value = queryParams.get('tot');
} else {
    pedidoTitle.innerText = 'Nuevo pedido'
}