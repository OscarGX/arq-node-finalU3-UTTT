// Puerto http
process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// DB Connection

let urlDB = process.env.NODE_ENV === 'dev' ? 'mongodb://localhost:27017/tortilleria-arq-oscar' : process.env.MONGO_URI;
process.env.DBURI = urlDB;