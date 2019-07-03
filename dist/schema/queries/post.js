"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Post = require("../types/Post");

var _definition = require("graphql/type/definition");

var _scalars = require("graphql/type/scalars");

var _FakeDB = require("../../FakeDB");

exports.default = {
  post: {
    type: _Post.Post,
    description: 'Gets a specific post',
    args: {
      id: { type: new _definition.GraphQLNonNull(_scalars.GraphQLInt) }
    },
    resolve: function resolve(parent, _ref) {
      var id = _ref.id;
      return _FakeDB.FakeDB.getBlogPost(id);
    }
  }
};