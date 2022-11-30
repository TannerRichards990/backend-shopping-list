const { Router } = require('express');
const Item = require('../models/Item');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const items = await Item.getAll(req.user.id);
      res.json(items);
    } catch (err) {
      next(err);
    }
  });




// TO DO - implement items CRUD


