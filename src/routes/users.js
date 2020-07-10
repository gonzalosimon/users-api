const { Router } = require('express');
const router = Router();

const users = require('../sample.json');

router.get('/', (req, res) => {
      res.json(users);
});



router.post('/', (req, res) => {
      const {id, name, lastName, birthday, DNI} = req.body;
      if(id && name && lastName && birthday && DNI) {
            res.json('saved');
      }
      else { res.send('Wrong Request'); }
})

module.exports = router;