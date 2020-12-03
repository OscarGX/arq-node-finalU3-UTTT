const pedidoTitle = document.querySelector('.pedidoTitle');
const productInput = document.querySelector('#exampleFormControlInput0');
const cantidadInput = document.querySelector('#exampleFormControlSelect1');
const totalInput = document.querySelector('#exampleFormControlInput2');
const acceptedCheck = document.querySelector('#companyAccepted');
const provStateInput = document.querySelector('#provState');
const dateEstInput = document.querySelector('#dateEst');
const accountNumberInput = document.querySelector('#accountNumber');
const bankInput = document.querySelector('#bank');
const pagadoCheck = document.querySelector('#pagado');
const compInputFile = document.querySelector('#comprobante');

if (localStorage.getItem('detalleObj')) {
    const detalleObj = JSON.parse(localStorage.getItem('detalleObj'));
    pedidoTitle.innerText = `Pagando a ${detalleObj.prov}`;
    productInput.value = detalleObj.product;
    cantidadInput.value = detalleObj.cant;
    totalInput.value = detalleObj.total;
    acceptedCheck.checked = detalleObj.companyAccepted;
    provStateInput.value = detalleObj.provState;
    dateEstInput.value = detalleObj.aproxDate;
    accountNumberInput.value = detalleObj.paymentInfo.accountNumber;
    bankInput.value = detalleObj.paymentInfo.bank;
}

pagadoCheck.addEventListener('change', function() {
    compInputFile.parentElement.classList.toggle('display-none');
});