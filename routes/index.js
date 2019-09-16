var express = require('express');
var router = express.Router();
const authentication=require("../functions/authentication");
const registered_citizen=require("../functions/registeredCitizen");
var transactionCount=require("../functions/familyDetails");
// const authenticateSSOID = require('../functions/AuthenticateSSOID');
const dashboardAPIs = require('../functions/transactionCount');
var cors= require('cors')

/* GET home page. */
router.get('/',cors(),function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/SsoAuthentication',cors(),function(req,res){
  authentication.authenticateSSOID(req,function(err,result){
    if(err){
     res.status(err.status).json({
            message:err
        }) 
    }else{
    
        res.status(result.status).json({
            result:result.result
        })
    }
  })
});
router.get("/registeredCitizen",cors(),(req,res)=>{

  registered_citizen.get_registered_citizen(req,function(err,result){
    if(err){
     res.status(err.status).json({
            message:err
        }) 
    }else{
    
        res.status(result.status).json({
            result:result.result
        })
    }
  })
})
router.post("/getHistory", cors(), (req, res, next) => {
  var bhamashah_ID = req.body.bhamashah_ID
  transactionCount.familyHistory(bhamashah_ID).then(function (result) {
   return res.status(result.status).json({
        "DATA": response
    })
})
.catch(err => res.status(err.status).json({
          message: err.message
      }));
});

router.post("/Authenticate", cors(), (req, res) => {

  authenticateSSOID.authenticateSSOID(req, function (err, result) {

      if (err) {
          if (err.hasOwnProperty('msg')) {
              res.status(200).json({
                  message: err.msg
              });
          } else {
              res.status(err.status).json({
                  message: err.message
              });
          }
      } else {
          res.status(200).json({
              message: result
          });
      }


  })
})

router.post("/getTotalTransCount", cors(), (request, response) => {
dashboardAPIs.getTotalTransCount().then(function (result) {
response.send(result)
})
})

router.post("/getDistrictCount", cors(), (request, response) => {
dashboardAPIs.getTotalDistricts().then(function (result) {
response.send(JSON.stringify(result))
})
})

router.post("/getBlockCount", cors(), (request, response) => {
dashboardAPIs.getTotalBlocks().then(function (result) {
    response.send(result)
})
});

router.post("/totalGenderCount", cors(), (request, response) => {
    dashboardAPIs.genderCount().then(function (result) {
    response.send({"status":200,"Male":result,"Female":Male})
    })
    })

router.post("/getHistory", cors(), (req, res, next) => {
  var bhamashah_ID = req.body.bhamashah_ID
  transactionCount.familyHistory(bhamashah_ID).then(function (result) {
   return res.status(result.status).json({
        "DATA": response
    })
})
.catch(err => res.status(err.status).json({
          message: err.message
      }));
});

module.exports = router;
