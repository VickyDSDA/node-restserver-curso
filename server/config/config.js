//=======================
// Puerto
//=======================

process.env.PORT = process.env.PORT || 3000;


//=======================
// Entorno
//=======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=======================
// Vencimiento del token
//=======================

//60seg*60min*24h*30d=30dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//=======================
// SEED de autenticación
//=======================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'

//=======================
// Base de Datos
//=======================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//=======================
// Google Client Id
//=======================
process.env.CLIENT_ID = process.env.CLIENT_ID || '370450679382-gbde5s9etefgt35tthcde7s454hkjuri.apps.googleusercontent.com';