'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var PhotoSchema = new Schema({
  name: {
    type: String,
    trim: true,
    default: ''
  },
  profileImage: {
    type: String,
    trim: true
  },
  store: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    trim: true
  },
  upvote: {
    type: Number,
    default: 0
  },
  downvote: {
    type: Number,
    default: 0
  }


});

mongoose.model('Photo', PhotoSchema);
