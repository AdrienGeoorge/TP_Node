const Advert = require('../models/advert')

const getAll = (request, response, next) => {
    Advert.find()
        .then(adverts => response.send(adverts))
        .catch(next)
}

const getByID = (request, response, next) => {
    Advert.findById(request.params.id)
        .then(advert => {
            response.send(advert)
        })
        .catch(next)
}

const updateByID = async (req, res) => {
    const update = await Advert.updateOne({_id: req.params.id}, req.body)
    if (update.ok) {
        const advert = await Advert.findById(req.params.id)
        res.send(advert)
        return
    }
    res.send('error')
}

const deleteByID = (req, res, next) => {
    Advert.findByIdAndDelete(req.params.id)
        .then(() => {
            res.send('deleted')
        })
        .catch(next)
}

const createAdvert = (request, response, next) => {
    Advert.create(request.body)
        .then(advert => {
            response.send(advert)
        })
        .catch(next)
}

module.exports = {
    getAll,
    getByID,
    updateByID,
    createAdvert,
    deleteByID,
}