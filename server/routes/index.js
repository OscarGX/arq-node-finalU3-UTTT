const express = require('express');
const app = express();
app.use(require('./pedidos'));
app.use(require('./proveedores'));
app.use(require('./pagos'));
module.exports = app;