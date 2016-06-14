#!/usr/bin/env node

var cp = require('child_process');
var should = require('chai').should();

describe('swot-cli', function () {
  describe('basic operations', function () {
    it('should show the last used board when run with no options', function (done) {
      cp.execFile('./app.js', function(err, stdout) {
        // stuff
        done();
      });
    });
  describe('CRUD functions', function () {
    it('should make a new board', function (done) {
      cp.execFile('./app.js', ['new', 'pickles'], function(err, stdout) {
        // stuff
        done();
      });
    });
    it('should delete a board', function (done) {
      cp.execFile('./app.js', ['rm', 'pickles'], function(err, stdout) {
        // stuff
        done();
      });
    });
    it('should open a board', function (done) {
      cp.execFile('./app.js', ['pickles'], function(err, stdout) {
        // stuff
        done();
      });
    });
  });
  describe('working with boards', function () {
    it('should add a strength', function () {
      cp.execFile('./app.js', ['pickles', 'add', 's', '+strength'], function(err, stdout) {
        // stuff
        done();
      });
    });
    it('should add a weakness', function () {
      cp.execFile('./app.js', ['pickles', 'add', 'w', '+weakness'], function(err, stdout) {
        // stuff
        done();
      });
    });
    it('should add an opportunity', function () {
      cp.execFile('./app.js', ['pickles', 'add', 'o', '+opportunity'], function(err, stdout) {
        // stuff
        done();
      });
    });
    it('should add a threat', function () {
      cp.execFile('./app.js', ['pickles', 'add', 't', '+threat'], function(err, stdout) {
        // stuff
        done();
      });
    });
    it('should remove a strength', function () {
      cp.execFile('./app.js', ['pickles', 'rm', 's', '-strength'], function(err, stdout) {
        // stuff
        done();
      });
    });
    it('should remove a weakness', function () {
      cp.execFile('./app.js', ['pickles', 'rm', 'w', '-weakness'], function(err, stdout) {
        // stuff
        done();
      });
    });
    it('should remove a opportunity', function () {
      cp.execFile('./app.js', ['pickles', 'rm', 'o', '-opportunity'], function(err, stdout) {
        // stuff
        done();
      });
    });
    it('should remove a threat', function () {
      cp.execFile('./app.js', ['pickles', 'rm', 't', '-threat'], function(err, stdout) {
        // stuff
        done();
      });
    });
  });
});
