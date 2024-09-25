const mongoose = require('mongoose')
const autosSchema = mongoose.Schema({
        nombre: {
            type: String, 
            required: true
            },
        precio: {
            type: Number
        },
        imagen: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)
const Autos = mongoose.model('Autos', autosSchema)

module.exports = Autos