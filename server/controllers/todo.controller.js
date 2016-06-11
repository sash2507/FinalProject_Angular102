'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var ToDoModel = mongoose.model('ToDo');

/**
 * Signup
 */
exports.addTodo = function(req, res) {
  // Init Variables
  var todo = new ToDoModel(req.body);

  // Then save the todo
  todo.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      res.json({_id:todo._id});
    }
  });
};

exports.getTodos = function(req, res) {
    ToDoModel.find(null, {name: 1}).exec(function(err, todos) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        res.json(todos);
      }
    });
};

exports.getTodoDetails = function(req, res) {
  var id = req.params.id;
  ToDoModel.findOne({_id: id}).exec(function(err, todo) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      res.json(todo);
    }
  });
};

exports.updateTodo = function(req, res) {
  var todo = req.body;
  ToDoModel.findOne({_id: todo._id}).exec(function(err, match) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      match.name = todo.name;
      match.description = todo.description;
      match.save(function(err) {
        if (err) {
          return res.status(400).send({
            message: err
          });
        } else {
          res.json({_id:match._id});
        }
      });
    }
  });
};
