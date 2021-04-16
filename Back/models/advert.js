const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdvertSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    address: {
        type: String,
    },
    zipCode: {
        type: String,
    },
    city: {
        type: String,
    },
    price: {
        type: Number,
    }
})

const Advert = mongoose.model('advert', AdvertSchema)

module.exports = Advert