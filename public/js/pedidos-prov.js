const editButtons = document.querySelectorAll('.edit');
editButtons.forEach(button => {
    button.addEventListener('click', function() {
        const detalleObj = {
            product: this.parentElement.parentElement.children[1].textContent.trim(),
            cant: this.parentElement.parentElement.children[3].textContent.trim(),
            total: this.parentElement.parentElement.children[4].textContent.trim(),
            companyAccepted: this.parentElement.parentElement.children[6].getAttribute('accepted'),
            prov: this.parentElement.parentElement.children[2].textContent.trim(),
            provState: this.parentElement.parentElement.children[7].textContent.trim()
        };
        saveData(detalleObj);
        window.location.href = 'pedido-detalle.html';
    });
});

const saveData = (dataObj) => {
    localStorage.setItem('detalleObj', JSON.stringify(dataObj));
}