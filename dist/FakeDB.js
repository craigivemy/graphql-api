'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FakeDatabase = function () {
  function FakeDatabase() {
    _classCallCheck(this, FakeDatabase);

    this.authors = [{ id: 1, name: 'Craig Ivemy', email: 'craig@gmail.com' }, { id: 2, name: 'Tony Yeboah', email: 'tony@gmail.com' }, { id: 3, name: 'Francis Thompson', email: 'francis@yahoo.com' }];
    this.blogPosts = [{ id: 1,
      title: 'How to build and api',
      content: 'Content of api post here',
      author: 2
    }, { id: 2,
      title: 'Graphql for dummies',
      content: 'Graphql is really great, better than REST apis apparently',
      author: 1
    }, { id: 3,
      title: 'Graphql vs REST',
      content: 'Here is a comparison of Graphql vs REST',
      author: 3
    }];
    this.comments = [{ id: 1, postId: 1, name: 'Anonymous', content: 'Not sure i like this post' }, { id: 2, postId: 1, name: 'Jethro', content: 'Great post, I am a dummy afterall' }, { id: 3, postId: 3, name: 'Gayle', content: 'Great comparison!' }];
  }

  _createClass(FakeDatabase, [{
    key: 'getBlogPosts',
    value: function getBlogPosts() {
      return this.blogPosts;
    }
  }, {
    key: 'getBlogPost',
    value: function getBlogPost(id) {
      return this.blogPosts.filter(function (post) {
        return post.id === id;
      })[0];
    }
  }, {
    key: 'getCommentsForPost',
    value: function getCommentsForPost(postId) {
      return this.comments.filter(function (comment) {
        return postId === comment.postId;
      });
    }
  }, {
    key: 'getAuthor',
    value: function getAuthor(id) {
      return this.authors.filter(function (author) {
        return author.id === id;
      })[0];
    }
  }, {
    key: 'getPostsOfAuthor',
    value: function getPostsOfAuthor(authorId) {
      return this.blogPosts.filter(function (post) {
        return post.author === authorId;
      });
    }
  }, {
    key: 'addBlogPost',
    value: function addBlogPost(blogPost) {
      blogPost.id = this.blogPosts.length + 1;
      this.blogPosts.push(blogPost);
      return blogPost;
    }
  }, {
    key: 'addComment',
    value: function addComment(comment) {
      comment.id = this.comments.length + 1;
      this.comments.push(comment);
      return comment;
    }
  }]);

  return FakeDatabase;
}();

var FakeDB = exports.FakeDB = new FakeDatabase();