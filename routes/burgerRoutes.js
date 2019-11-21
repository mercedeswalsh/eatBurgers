const { Burger } = require(`../models`)

module.exports = app => {

  // Get all burgers
  app.get(`/burgers`, (req, res) => {
    Burger.findAll()
      .then(burgers => res.json(burgers))
      .catch(e => console.log(e))
  })
  // Get one burger
  app.get(`/burgers/:id`, (req, res) => {
    Burger.findOne({ where: { id: req.params.id } })
      .then(burger => res.json(burger))
      .catch(e => console.log(e))
  })
  // Add a burger
  app.post(`/burgers`, (req, res) => {
    Burger.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  // Update a burger
  app.put(`/burgers/:id`, (req, res) => {
    Burger.findOne({ where: { id: req.params.id } })
      .then(burger => burger.update(req.body))
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
  // Delete a burger
  app.delete(`/burgers/:id`, (req, res) => {
    Burger.findOne({ where: { id: req.params.id } })
      .then(burger => burger.destroy())
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}