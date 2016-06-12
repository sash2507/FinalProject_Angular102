'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var PhotoModel = mongoose.model('Photo');

exports.getPhotos = function(req, res) {
  PhotoModel.find().exec(function(err, photos) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      res.json({
        data: photos
      });
    }
  });
};

exports.addPhoto = function(req, res) {
  var photo = JSON.parse(req.body.content);

  // fileLocation was added to req.body by file-proecessor.utilty.js
  photo.profileImage = req.body.fileLocation;

  var toAdd = new PhotoModel(photo);

  // Then save the object
  toAdd.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      res.json({_id:toAdd._id, 
        profileImage: photo.profileImage
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
     // match.downvote = photo.downvote;
     match.save(function(err) {
       if (err) {
         return res.status(400).send({
           message: err
         });
       } else {
         res.json({_id:superhero._id});
       }
     });
   }
 });
};


