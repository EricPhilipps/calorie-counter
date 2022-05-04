const router = require('express').Router();
require('dotenv').config();
var query = '3lb carrots and a chicken sandwich';
const axios = require('axios').default;

// router.get('/', {
//   url: 'https://api.calorieninjas.com/v1/nutrition?query='+query,
//   headers: {
//     'X-Api-Key': process.env.CUMAR_API_KEY
//   },
// }, function(error, response, body) {
//   if(error) return console.error('Request failed:', error);
//   else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//   else console.log(body)
// });

router.get('/',(req,res)=>{
  // Make a request for a user with a given ID
  // try {
  //   const userCal = await Calorie.create(req.body);
  // } catch (err) {
  //   res.status(400).json(err);
  // }

  console.log(req.body);
  
  axios.get('https://api.calorieninjas.com/v1/nutrition?query='+query,{
    headers: {
      'X-Api-Key': process.env.API_KEY
    }
  }
  )
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
})

module.exports = router;