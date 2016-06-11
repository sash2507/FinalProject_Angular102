'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var SuperheroModel = mongoose.model('Superhero');

exports.getSuperheros = function(req, res) {
  SuperheroModel.find().exec(function(err, superheros) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      res.json({
        data: superheros
      });
    }
  });
};

exports.addSuperhero = function(req, res) {
  var superhero = JSON.parse(req.body.content);

  // fileLocation was added to req.body by file-proecessor.utilty.js
  superhero.profileImage = req.body.fileLocation;

  var toAdd = new SuperheroModel(superhero);

  // Then save the object
  toAdd.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      res.json({_id:toAdd._id, 
        profileImage: superhero.profileImage
      });
    }
  });
};


exports.updateVote = function(req, res) {
 var superhero = JSON.parse(req.body.content);
 SuperheroModel.findOne({_id: superhero._id}).exec(function(err, match) {
   if (err) {
     return res.status(400).send({
       message: err
     });
   } else {
     match.upvote = superhero.upvote;
     match.downvote = superhero.downvote;
     match.save(function(err) {
       if (err) {
         return res.status(400).send({
           message: err
         });
       } else {
         res.json({_id:photo._id});
       }
     });
   }
 });
};


