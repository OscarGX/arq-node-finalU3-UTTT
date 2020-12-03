const express = require('express');
const { io } = require('../server');
const app = express();
const Proveedor = require('../models/proveedor');

app.get('/proveedores', (req, res) => {
    Proveedor.find((err, proveedores) => {
        if (err) {
            res.status(500).json({
                ok: false,
                error: err
            });
        } else {
            res.json({
                ok: true,
                proveedores
            });
        }
    });
});

app.get('/proveedor/:id', (req, res) => {
    const id = req.params.id;
    Proveedor.findById({ _id: id }, (err, proveedor) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        } else if (proveedor) {
            res.json({
                ok: true,
                proveedor
            });
        } else {
            res.status(400).json({
                ok: false,
                message: 'ID inválido, bad request.'
            });
        }
    });
});

app.post('/proveedor', (req, res) => {
    const body = req.body;
    const proveedor = new Proveedor({
        area: body.area,
        name: body.name,
        company: body.company,
        address: body.address,
        phoneNumber: Number(body.phoneNumber),
        email: body.email
    });
    proveedor.save((err, proveedorDB) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        } else {
            res.json({
                ok: true,
                message: 'El registro fue dado de alta correctamente.',
                proveedor: proveedorDB
            });
            notifyArray();
        }
    });
});

app.put('/proveedor/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const proveedor = {
        area: body.area,
        name: body.name,
        company: body.company,
        address: body.address,
        phoneNumber: Number(body.phoneNumber),
        email: body.email
    };
    Proveedor.findByIdAndUpdate(id, proveedor, { new: true, runValidators: true, context: 'query' }, (err, updatedProv) => {
        if (err) {
            res.status(500).json({
                ok: false,
                error: err
            });
        } else if (updatedProv) {
            res.json({
                ok: true,
                message: 'El registro se actualizó correctamente.',
                proveedor: updatedProv
            });
            notifyArray();
        } else {
            res.status(400).json({
                ok: false,
                message: 'El ID es inválido.'
            });
        }
    });
});

app.delete('/proveedor/:id', (req, res) => {
    const id = req.params.id;
    Proveedor.findByIdAndRemove({ _id: id }, (err, deletedProv) => {
        if (err) {
            res.status(500).json({
                ok: false,
                error: err
            });
        } else if (deletedProv) {
            res.json({
                ok: true,
                message: 'El registro fue eliminado exitosamente.',
                proveedor: deletedProv
            });
            notifyArray();
        } else {
            res.status(400).json({
                ok: false,
                message: 'ID del proveedor inválido'
            });
        }
    });
});

app.get('/prov/test', (req, res) => {
    res.json({
        ok: true
    });
    notifyArray();
});

const notifyArray = () => {
    Proveedor.find((err, providers) => {
        if (err) throw new Error(err);
        io.emit('all', providers);
    });
}

module.exports = app;