const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const users = require('../sample.json');

router.get('/', (req, res) => {
      res.json(users);
});


router.post('/', (req, res) => {
      const {name, lastName, birthday, DNI} = req.body;
      if(name && lastName && birthday && DNI) {
            const id = users.length + 1;
            const newUser = {...req.body, id};
            console.log(newUser);
            users.push(newUser);
            res.json(users);
      } else { 
            res.status(500).json({error: 'There was an error.'}); 
      }
});

router.put('/:id', (req, res) => {
      const { id } = req.params;
      const {name, lastName, birthday, DNI} = req.body;
      if(name && lastName && birthday && DNI) {
            _.each(users, (user, i) => {
                  if(user.id == id) {
                        user.name = name;
                        user.lastName = lastName;
                        user.birthday = birthday;
                        user.DNI = DNI;
                  }  
          });
          res.json(users);         
      } else { 
            res.status(500).json({error: 'There was an error.'}); 
      }
});

router.delete('/:id', (req, res) => {
      const { id } = req.params;
      _.each(users, (user, i) => {
            if(user.id == id) {
                  users.splice(i, 1);
            }
      });
      res.send(users);
});

module.exports = router;