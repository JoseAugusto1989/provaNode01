const myDatabase = []

const getAll = () => myDatabase

const create = prova => {
    myDatabase.push(prova)
}

const getById = provaId => myDatabase.find(prov => prov.id == provaId)

const update = (provaId, prova) => {
    const index = myDatabase.findIndex(prov => prov.id == provaId)
    myDatabase[index] = prova
}

const remove = provaId => {
    const index = myDatabase.findIndex(prov => prov.id == provaId)
    myDatabase.splice(index, 1)
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}