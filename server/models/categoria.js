const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;


let categoriaSchema = new Schema({
    descripcion: {
        type: String,
        required: true,
        unique: true
    },
    usuario: {
        type: ObjectId,
        ref: 'Usuario'
    }
});

categoriaSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });
module.exports = mongoose.model('Categoria', categoriaSchema);