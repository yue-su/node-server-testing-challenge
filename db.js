const knex = require("knex")
const knexConfig = require("./knexfile")
const db = knex(knexConfig.development)

module.exports = {
    get,
    getById,
    insert,
    remove,
}

function get() {
    return db('gadgets')
}

function getById(id) {
    return db('gadgets').where("id", id).first()
}

function insert(body) {
    return db('gadgets').insert(body,'id').then(id => {
        return getById(id)
    })
}

function remove(id) {
    return db('gadgets').where('id', id).del()
}
