const service = require('../service/movies.service')

const create = (req, res) => {
    const movies = req.body
    service.create(movies)
    res.status(201).send('movies criado com sucesso')
}

const getAll = (req, res) => {
    res.status(200).send(service.getAll())
}

const getById = (req, res) => {
    const movies = service.getById(req,params.id)
    if (movies) {
        res.status(200).send(movies)
    } else {
        res.status(404).send('movies não encontrado')
    }
}

const update = (req, res) => {
    const movies = service.getById(req.params.id)
    if (movies) {
        service.update(req.params.id, req.body)
        res.status(204).send('movies atualizado com sucesso')
        
    } else if (!movies) {
        res.status(400).send('Invalid data supplied')

    } else {
        res.status(404).send('movies não encontrado')
    }
}

const remove = (req, res) => {
    const movies = service.getById(req.params.id)
    if (movies) {
        service.remove(req.params.id)
        res.status(204).send('movies removido com sucesso')
    } else {
        res.status(404).send('movies não encontrado')
    }
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}