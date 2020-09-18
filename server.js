const express = require("express")

const server = express()

//server.listen(7000, () => {console.log("server running on http://localhost:7000")})

server.use(logger)
server.use(express.json())

const gadgets = require("./db")

function logger(req, res, next) {
  const { method, url } = req
  const time = new Date().toString().slice(15, 25)
  console.log(`a ${method} request was made to ${url} at ${time}`)
  next()
}

server.get("/", (req, res) => {
  res.status(200).json({message: 'testing'})
})

server.get("/gadgets", (req, res) => {
    gadgets.get().then(gadgets => {
        res.status(200).json(gadgets)
    })
})
server.get("/gadgets/:id", (req, res) => {
    gadgets.getById(req.params.id).then(gadgets => {
        res.status(200).json(gadgets)
    })
})

server.post("/gadgets", (req, res) => {
    gadgets.insert(req.body).then(gadget => {
        res.status(201).json(gadget)
    })
})

server.delete("/gadgets/:id", (req, res) => {
    gadgets.delete(req.params.id).then(id => {
        res.status(201).send(id)
    })
})

module.exports = server