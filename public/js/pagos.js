const editButtons = document.querySelectorAll('.edit');

editButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'pago-detalle.html';
    });
});