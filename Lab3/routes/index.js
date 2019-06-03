var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // test
  res.render('index', { title: 'Foobar' });
});

const persons = [
  {
    route: 'Daaman',
    name: 'Daaman Kaushal',
    age: 20,
    cityBorn: 'Ludhiana',
    cityResiding: 'Barrie',
    hobby: 'listening to music'
  },
  {
    route: 'Piyush',
    name: 'Piyush Kaushal',
    age: 20,
    cityBorn: 'Ludhiana',
    cityResiding: 'Ludhiana',
    hobby: 'hanging with friends'
  },
  {
    route: 'rama',
    name: 'Raman singh',
    age: 24,
    cityBorn: 'Ludhiana',
    cityResiding: 'Dugri',
    hobby: 'playing cricket'
  }
];

router.get('/:route', (req, res, next) => {
  // Find the person where their route string equals the route parameter
  const person = persons.find(per => per.route === req.params.route);

  // if no person - render the error page
  if (!person) return next(new Error('Cannot find person'));

  // Res.render - renders a view from our views folder.
  // Pass the person we found in the array above
  return res.render('person', person);
});

// router.get('/para', (req, res) => {
//   // Res.render - renders a view from our views folder.
//   res.render('person', {
//      route: 'Daaman',
//      name: 'Daaman Kaushal',
//      age: 20,
//      cityBorn: 'Ludhiana',
//      cityResiding: 'Barrie',
//      hobby: 'listening to music'
//   });
// });

// router.get('/Daaman', (req, res) => {
//   // Res.render - renders a view from our views folder.
//   res.render('person', {
//    route: 'Piyush',
//    name: 'Piyush Kaushal',
//    age: 20,
//    cityBorn: 'Ludhiana',
//    cityResiding: 'Ludhiana',
//    hobby: 'hanging with friends'
//   });
// });

module.exports = router;
