"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Author = undefined;

var _definition = require("graphql/type/definition");

var _scalars = require("graphql/type/scalars");

var _Post = require("./Post");

var _FakeDB = require("../../FakeDB");

var Author = exports.Author = new _definition.GraphQLObjectType({
  name: "Author",
  description: "Author details",
  fields: function fields() {
    return {
      id: { type: _scalars.GraphQLInt },
      name: { type: _scalars.GraphQLString },
      email: { type: _scalars.GraphQLString },
      posts: {
        type: new _definition.GraphQLList(_Post.Post),
        resolve: function resolve(author) {
          return _FakeDB.FakeDB.getPostsOfAuthor(author.id);
        }
      }
    };
  }
});