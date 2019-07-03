"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Comment = require("../types/Comment");

var _FakeDB = require("../../FakeDB");

exports.default = {
  addComment: {
    type: _Comment.Comment,
    description: 'Adds new comment',
    args: {
      comment: { type: _Comment.CommentInputType }
    },
    resolve: function resolve(parent, _ref) {
      var comment = _ref.comment;
      return _FakeDB.FakeDB.addComment(comment);
    }
  }
};