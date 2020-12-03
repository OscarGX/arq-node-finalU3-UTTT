const pedidoTitle = document.querySelector('.pedidoTitle');
const productInput = document.querySelector('#exampleFormControlInput0');
const cantidadInput = document.querySelector('#exampleFormControlSelect1');
const totalInput = document.querySelector('#exampleFormControlInput2');
const acceptedCheck = document.querySelector('#companyAccepted');
const provStateInput = document.querySelector('#provState');
const reasonTA = document.querySelector('#reason');
const dateEstInput = document.querySelector('#dateEst');
const accountNumberInput = document.querySelector('#accountNumber');
const bankInput = document.querySelector('#bank');
const sendToPayButton = document.querySelector('.sendToPay');
let detalleObj = {};

const pedidoRechazadoUI = (detalleObj) => {
    provStateInput.parentElement.classList.toggle('display-none');
    reasonTA.parentElement.classList.toggle('display-none');
    provStateInput.value = detalleObj.provState;
    reasonTA.value = 'No puedo cubrir el pedido por falta de tiempo y material.';
}

const pedidoAceptadoUI = () => {
    dateEstInput.parentElement.classList.toggle('display-none');
    accountNumberInput.parentElement.classList.toggle('display-none');
    bankInput.parentElement.classList.toggle('display-none');
    dateEstInput.value = '2020-11-17';
    accountNumberInput.value = 'XXDMCKD90192MLCL1';
    bankInput.value = 'BBVA Bancomer';
}
if (localStorage.getItem('detalleObj')) {
    detalleObj = JSON.parse(localStorage.getItem('detalleObj'));
    pedidoTitle.innerText = `Detalle de pedido a ${detalleObj.prov}`;
    productInput.value = detalleObj.product;
    cantidadInput.value = detalleObj.cant;
    totalInput.value = detalleObj.total;
    acceptedCheck.checked = detalleObj.companyAccepted === 'false' ? false : true;
    if (detalleObj.provState === 'Rechazado') {
        pedidoRechazadoUI(detalleObj);
    } else if (detalleObj.provState === 'Aceptado') {
        pedidoAceptadoUI();
    }
}

acceptedCheck.addEventListener('change', () => {
    if (acceptedCheck.checked && detalleObj.provState === 'Aceptado') {
        sendToPayButton.classList.toggle('display-none');
    } else {
        sendToPayButton.classList.toggle('display-none');
    }
});

sendToPayButton.addEventListener('click', (e) => {
    e.preventDefault();
    setNewPedidoObj();
});

const setNewPedidoObj = () => {
    const nuevoPedidoWe = {
        ...detalleObj,
        aproxDate: dateEstInput.value,
        paymentInfo: {
            accountNumber: accountNumberInput.value,
            bank: bankInput.value
        }
    }
    nuevoPedidoWe.companyAccepted = true;
    localStorage.setItem('detalleObj', JSON.stringify(nuevoPedidoWe));
    Swal.fire({
        title: 'Enviado',
        text: 'El pedido fue enviado a pagos con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        willClose: () => {
            window.location.href = 'pagos.html';
        }
    });

}