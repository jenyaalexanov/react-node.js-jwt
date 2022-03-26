const express = require("express");
const router = express.Router();
const Speciality = require("../models/speciality");

const {
  verifyUser,
} = require("../authenticate");

router.get("/all", verifyUser, (req, res, next) => {
    Speciality.find(function(err, result){
        if(err) return console.log(err);
        
        res.send(result);
    });
  });

router.get("/id", verifyUser, (req, res, next) => {
    Speciality.findById(req.body._id, function(err, result){
        if(err) return console.log(err);

        res.send(result);
    });
  });

router.post("/create", verifyUser, (req, res, next) => {
    Speciality.create({ Name: req.body.Name }, function(err, result){
        if(err) return console.log(err);
        
        res.send(result);
    });
  });

router.put("/update", verifyUser, (req, res, next) => {
    Speciality.updateOne({ Name: req.body.Name }, function(err, result){
        if(err) return console.log(err);
          
        res.send(result);
    });
});

router.delete("/delete", verifyUser, (req, res, next) => {
    Speciality.deleteOne(req.body._id, function(err, result){
        if(err) return console.log(err);
          
        res.send(result);
    });
});

module.exports = router;