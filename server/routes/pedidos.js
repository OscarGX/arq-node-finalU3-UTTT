const express = require('express');
const app = express();
app.get('/pedidos/:area', (req, res) => {
    const area = req.params.area;
    /* Proceso en Base de Datos... */
    res.json({
        ok: true,
        area,
        pedidos: [{
            nombre: 'Computadora de escritorio HP',
            cantidad: 1,
            prioridad: 'Media',
            mensaje: 'Lorem ipsum blah blah blah...',
            estado: 'Rechazado',
        }]
    });
});

app.get('/pedidos', (req, res) => {
    res.json({
        ok: true,
        pedidos: [{
                area: 'almacen',
                nombre: 'Costal de Maíz',
                cantidad: 5,
                prioridad: 'Media',
                mensaje: 'Lorem ipsum blah blah blah...',
                estado: 'Aprobado'
            },
            {
                area: 'cocimiento',
                nombre: 'Encendedor de cocina',
                cantidad: 5,
                prioridad: 'Media',
                mensaje: 'Lorem ipsum blah blah blah...',
                estado: 'Pendiente de aprobación'
            },
            {
                area: 'elaboracion_masa',
                nombre: 'Carretilla',
                cantidad: 1,
                prioridad: 'Baja',
                mensaje: 'Lorem ipsum blah blah blah...',
                estado: 'Rechazado'
            },
            {
                area: 'tortillas',
                nombre: 'Papel para tortillas (Paquete 5k)',
                cantidad: 5,
                prioridad: 'Alta',
                mensaje: 'Lorem ipsum blah blah blah...',
                estado: 'Aprobado'
            },
            {
                area: 'sistemas',
                nombre: 'Computadora de escritorio HP',
                cantidad: 1,
                prioridad: 'Media',
                mensaje: 'Lorem ipsum blah blah blah...',
                estado: 'Rechazado'
            },
            {
                area: 'mantenimiento',
                nombre: 'Anticongelante',
                cantidad: 5,
                prioridad: 'Alta',
                mensaje: 'Lorem ipsum blah blah blah...',
                estado: 'Pendiente de aprobación'
            }
        ]
    });
});

app.get('/pedido/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        pedido: {
            area: 'almacen',
            nombre: 'Costal de Maíz',
            cantidad: 5,
            prioridad: 'Media',
            mensaje: 'Lorem ipsum blah blah blah...',
            estado: 'Aprobado'
        }
    });
});

app.post('/pedido', (req, res) => {
    const body = req.body;
    res.json({
        ok: true,
        message: 'El pedido se realizó correctamente.',
        numeroPedido: new Date().getTime()
    });
});

app.put('/pedido/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json({
        ok: true,
        message: 'El pedido se actualizó correctamente'
    });
});

app.delete('/pedido/:id', (req, res) => {
    const id = req.params.id;
    res.json({
        ok: true,
        message: 'El pedido fue eliminado correctamente'
    });
});
module.exports = app;