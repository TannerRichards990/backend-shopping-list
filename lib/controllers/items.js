const { Router } = require('express');
const Item = require('../models/Item');
const authorize = require('../middleware/authorize');
const authenticate = require('../middleware/authenticate');

module.exports = Router()
  .get('/', authenticate, async (req, res, next) => {
    try {
      const items = await Item.getAll(req.user.id);
      res.json(items);
    } catch (err) {
      next(err);
    }
  })
  .post ('/', authenticate, async (req, res, next) => {
    try {
      const newItem = await Item.insert({ ...req.body, user_id: req.user.id });
      res.json(newItem);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', [authenticate, authorize], async (req, res, next) => {
    try {
      const updatedItem = await Item.updateById(req.params.id, req.body);
      res.json(updatedItem);
    } catch (err) {
      next(err);
    }
  });




// TO DO - implement items CRUD


