document.querySelectorAll('.edit').forEach(item => {
    item.addEventListener('click', function() {
        window.location.href = `detalle.html?id=${this.id}`;
    });
});