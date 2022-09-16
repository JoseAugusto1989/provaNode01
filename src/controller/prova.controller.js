const service = require('../service/prova.service')

const create = (req, res) => {
    const prova = req.body
    if (isValid(res, prova)) {
        service.create(prova)
        res.status(200).send('Prova criada com sucesso')
    }
}

const getAll = (req, res) => {
    res.status(200).send(service.getAll())
}

const getById = (req, res) => {
    const prova = service.getById(req,params.id)
    if (prova) {
        res.status(200).send(prova)
    } else {
        res.status(404).send('Prova não encontrada')
    }
}

const update = (req, res) => {
    const prova = service.getById(req.params.id)
    if (prova) {
        if (isValid(res, prova)) {
            service.update(req.params.id, req.body)
            res.status(200).send('Prova atualizada com sucesso')
        }
    } else {
        res.status(400).send('Prova não encontrada')
    }
}

const remove = (req, res) => {
    const prova = service.getById(req.params.id)
    if (prova) {
        service.remove(req.params.id)
        res.status(200).send('Prova removida com sucesso')
    } else {
        res.status(404).send('Prova não encrotada')
    }
}

const isValid = (res, prova) => {
    if (!prova.id) {
        res.status(400).send('Id é obrigatório')
        return false

    } else if (!prova.name || prova.name.trim() === '') {
        res.status(400).send('Nome é obrigatório')
        return false

    } else if (!prova.workload) {
        res.status(400).send('Workload é obrigatório')
        return false

    } else if (!prova.teacherName || prova.teacherName.trim() === '') {
        res.status(400).send('TeacherName é obrigatório')
        return false
    }
    return true
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}