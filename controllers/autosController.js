const Autos = require('../models/Autos');

exports.getAllAutos = async (req, res) => {
    try {
        const autos = await Autos.find({});
        res.json({autos}) 
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error al intentar obtener los autos",
            error
        })
    }
}

exports.createAutos = async(req, res) => {
    const { nombre, precio, imagen } = req.body
    try {
        const nuevoAuto = await autos.create({ nombre, precio, imagen })
        res.json(nuevoAuto)
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error creando el nuevo auto",
            error: error.message
        })
    }
}

exports. updateAutosById = async (req, res) => {
    const { id, nombre, precio } = req.body
    try {
        const actualizacionAutos = 
	        await autos.findByIdAndUpdate(id, { nombre, precio }, { new: true })
        res.json(actualizacionAutos)
    } catch (error) {       
        res.status(500).json({
            msg: "Hubo un error actualizando los autos",
            error
        })
    }
}

exports.deleteAutosById = async (req, res) => {
    const { id } = req.body
    try {
        const autosBorrada = await autos.findByIdAndDelete({_id: id })
        res.json(autosBorrada)
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error eliminando los autos",
            error
        })
    }
}