"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentInputType = exports.Comment = undefined;

var _definition = require("graphql/type/definition");

var _scalars = require("graphql/type/scalars");

var Comment = exports.Comment = new _definition.GraphQLObjectType({
  name: "Comment",
  description: "Comments attached to posts",
  fields: function fields() {
    return {
      id: { type: _scalars.GraphQLInt },
      postId: { type: _scalars.GraphQLInt },
      name: { type: _scalars.GraphQLString },
      content: { type: _scalars.GraphQLString }
    };
  }
});

var CommentInputType = exports.CommentInputType = new _definition.GraphQLInputObjectType({
  name: 'CommentInput',
  fields: {
    postID: { type: (0, _definition.GraphQLNonNull)(_scalars.GraphQLInt) },
    name: { type: _scalars.GraphQLString },
    content: { type: _scalars.GraphQLString }
  }
});