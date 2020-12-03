const express = require('express');
const app = express();

app.get('/pagos', (req, res) => {
    res.json({
        ok: true,
        pagos: [{
            id: '123bcds0912',
            area: 'Almacén',
            producto: 'Costal de Maíz',
            proveedor: 'Cargil',
            cantidad: 10,
            total: 11500,
            aprobadoEmpresa: true,
            estadoProveedor: 'Aceptado'
        }]
    });
});

app.post('/pago', (req, res) => {
    res.json({
        ok: true,
        message: 'Pedido enviado a pagos'
    });
});

app.put('/pago/pedido/:id', (req, res) => {
    res.json({
        ok: true,
        message: 'Se actualizó correctamente'
    });
});

module.exports = app;