const express = require('express')
const fetch = require('node-fetch')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    fetch('http://localhost:3000/', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json()
        })
        .then(json => {
            res.render('index', {adverts: json})
        })
        .catch(err => {
            throw err
        })
})

const getAdvert = id => {
    return fetch(`http://localhost:3000/get/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(advert => {
            return advert
        })
        .catch(err => {
            throw err
        })
}

app.get('/show/:id', async (req, res) => {
    const advert = await getAdvert(req.params.id)
    res.render('show', {advert: advert})
})

app.get('/update/:id', async (req, res) => {
    const advert = await getAdvert(req.params.id)
    res.render('update', { advert: advert })
})

app.get('/create', (req, res) => {
    res.render('create')
})

app.listen(4000, () => {
    console.log('Front working on port 4000')
})
