"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _definition = require("graphql/type/definition");

var _Author = require("../types/Author");

var _FakeDB = require("../../FakeDB");

var _scalars = require("graphql/type/scalars");

exports.default = {
  author: {
    type: _Author.Author,
    description: 'Gets an author',
    args: {
      id: { type: new _definition.GraphQLNonNull(_scalars.GraphQLInt) }
    },
    resolve: function resolve(parent, _ref) {
      var id = _ref.id;
      return _FakeDB.FakeDB.getAuthor(id);
    }
  }
};