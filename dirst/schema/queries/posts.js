"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _definition = require("graphql/type/definition");

var _Post = require("../types/Post");

var _FakeDB = require("../../FakeDB");

exports.default = {
  posts: {
    type: new _definition.GraphQLList(_Post.Post),
    description: 'List of all blog posts',
    resolve: function resolve() {
      return _FakeDB.FakeDB.getBlogPosts();
    }
  }
};