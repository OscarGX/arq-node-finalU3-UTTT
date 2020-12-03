const cotizacion = document.querySelectorAll('.cot');
const modalTitle = document.querySelector('.modal-title');
const area = window.area;
const payment = window.payment;
const nuevoPedido = document.querySelector('.newPedido');
const calcularCot = document.querySelector('.calcular');
const total = window.total;
let cotizacionObj = {};
cotizacion.forEach(button => {
    button.addEventListener('click', function() {
        cotizacionObj = {
            area: this.parentElement.parentElement.children[0].textContent.trim(),
            provName: this.parentElement.parentElement.children[1].textContent.trim(),
            company: this.parentElement.parentElement.children[2].textContent.trim(),
            paymentMethod: getPaymentMethod(this.parentElement.parentElement.children[2].textContent.trim())
        }
        setModalValues();
    });
});

calcularCot.addEventListener('click', (e) => {
    const cantidad = window.cantidad.value;
    total.value = getTotal(cantidad, cotizacionObj.company);
    const product = document.querySelector('#products').value;
    const queryParams = `prov=${cotizacionObj.company}&prod=${product}&cant=${cantidad}&tot=${total.value}`;
    nuevoPedido.href = `pedido-proveedor.html?${queryParams}`;
});

const getPaymentMethod = (company) => {
    if (company === 'Cargil') {
        return 'Pago inmediato'
    }
    return 'Pago a 12 meses sin intereses';
}

const getTotal = (cant, company) => {
    if (company === 'Cargil') {
        return parseInt(cant) * 1150;
    }
    return parseInt(cant) * 1000;
}

// $('#exampleModal').on('show.bs.modal', function(e) {
//     setModalValues();
// });

const setModalValues = () => {
    modalTitle.innerText = `Cotizando con ${cotizacionObj.company}`;
    area.value = cotizacionObj.area;
    payment.value = cotizacionObj.paymentMethod;
}