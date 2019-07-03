"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostInputType = exports.Post = undefined;

var _definition = require("graphql/type/definition");

var _scalars = require("graphql/type/scalars");

var _Author = require("./Author");

var _FakeDB = require("../../FakeDB");

var _Comment = require("./Comment");

var Post = exports.Post = new _definition.GraphQLObjectType({
  name: "BlogPost",
  description: "Blog posts on the site",
  fields: function fields() {
    return {
      id: { type: _scalars.GraphQLInt },
      title: { type: _scalars.GraphQLString },
      content: { type: _scalars.GraphQLString },
      author: {
        type: _Author.Author,
        resolve: function resolve(post) {
          return _FakeDB.FakeDB.getAuthor(post.author);
        }
      },
      comments: {
        type: new _definition.GraphQLList(_Comment.Comment),
        resolve: function resolve(post) {
          return _FakeDB.FakeDB.getCommentsForPost(post.id);
        }
      }
    };
  }
});

var PostInputType = exports.PostInputType = new _definition.GraphQLInputObjectType({
  name: 'PostInput',
  fields: {
    title: { type: _scalars.GraphQLString },
    content: { type: _scalars.GraphQLString },
    author: { type: (0, _definition.GraphQLNonNull)(_scalars.GraphQLInt) }
  }
});