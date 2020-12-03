const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const proveedor = new Schema({
    area: { type: String, required: [true, 'El área es requerida.'] },
    name: { type: String, required: [true, 'El nombre es requerido.'] },
    company: { type: String, required: [true, 'El nombre de la empresa es requerido.'] },
    address: { type: String, required: [true, 'La dirección es requerida'] },
    phoneNumber: { type: Number, required: [true, 'El número de teléfono es requerido'] },
    email: { type: String, required: [true, 'El correo electrónico es requerido.'], unique: true }
});

proveedor.plugin(uniqueValidator, { message: 'El {PATH} ya existe, ingrese uno diferente' });

module.exports = mongoose.model('Proveedor', proveedor);