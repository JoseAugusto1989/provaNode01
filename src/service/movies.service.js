const myDatabase = []

const getAll = () => myDatabase

const create = movies => {
    myDatabase.push(movies)
}

const getById = moviesId => myDatabase.find(mov => mov.id == moviesId)

const update = (moviesId, movies) => {
    const index = myDatabase.findIndex(mov => mov.id == moviesId)
    myDatabase[index] = movies
}

const remove = moviesId => {
    const index = myDatabase.findIndex(mov => mov.id == moviesId)
    myDatabase.splice(index, 1)
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}