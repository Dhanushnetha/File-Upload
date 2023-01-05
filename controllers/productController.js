
const {StatusCodes} = require('http-status-codes');
const Product = require('../models/Product');

const createProduct = async (req,res)=>{
    const product = await Product.create(req.body);
    res.status(StatusCodes.OK).json({product}) 
}

const getAllProducts = async (req,res)=>{
    const products = await Product.find({})
    res.status(StatusCodes.OK).json({products})
}

const deleteProduct = async (req,res)=>{
    const { id: taskID } = req.params
    const products = await Product.findOneAndDelete({ _id: taskID })
    if (!products) {
        return
    }
    res.status(StatusCodes.OK).json({products})
}

module.exports = {
    createProduct,
    getAllProducts,
    deleteProduct
}