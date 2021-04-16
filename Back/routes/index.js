const {getAll, getByID, createAdvert, updateByID, deleteByID} = require('../controllers/AdvertController')

const createRoutes = (app) => {
    app.get('/', getAll)
    app.post('/', createAdvert)
    app.get('/get/:id', getByID)
    app.put('/update/:id', updateByID)
    app.delete('/delete/:id', deleteByID)
}

module.exports = createRoutes