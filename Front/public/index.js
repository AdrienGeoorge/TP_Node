const deleteAdvert = id => {
    fetch(`http://localhost:3000/delete/${id}`, {
        method: 'delete',
    })
        .then(() => {
            window.location.assign('/')
        })
        .catch(err => {
            throw err
        })
}

const updateAdvert = id => {
    event.preventDefault()

    fetch(`http://localhost:3000/update/${id}`, {
        method: 'put',
        body: JSON.stringify({
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            address: document.getElementById('address').value,
            zipCode: document.getElementById('zipCode').value,
            city: document.getElementById('city').value,
            price: document.getElementById('price').value,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(() => {
            window.location.assign(`/show/${id}`)
        })
        .catch(err => {
            throw err
        })
}

const createAdvert = () => {
    event.preventDefault()
    fetch('http://localhost:3000/', {
        method: 'post',
        body: JSON.stringify({
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            address: document.getElementById('address').value,
            zipCode: document.getElementById('zipCode').value,
            city: document.getElementById('city').value,
            price: document.getElementById('price').value,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(() => {
            window.location.assign('/')
        })
        .catch(err => {
            throw err
        })
}