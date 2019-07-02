export class FakeDB {
  constructor() {
    this.authors = [
      { id: 1, name: 'Craig Ivemy', email: 'craig@gmail.com' },
      { id: 2, name: 'Tony Yeboah', email: 'tony@gmail.com' },
      { id: 3, name: 'Francis Thompson', email: 'francis@yahoo.com' },
    ];
    this.blogPosts = [
      { id: 1,
        title: 'How to build and api',
        content: 'Content of api post here',
        author: 2
      },
      { id: 2,
        title: 'Graphql for dummies',
        content: 'Graphql is really great, better than REST apis apparently',
        author: 1
      },
      { id: 3,
        title: 'Graphql vs REST',
        content: 'Here is a comparison of Graphql vs REST',
        author: 3
      }
    ];
    this.comments = [
      { id: 1, postId: 1, name: 'Anonymous', content: 'Not sure i like this post' },
      { id: 2, postId: 1, name: 'Jethro', content: 'Great post, I am a dummy afterall' },
      { id: 3, postId: 3, name: 'Gayle', content: 'Great comparison!' },
    ]
  }
  getBlogPosts() {
    return this.blogPosts;
  }
  getBlogPost(id) {
    return this.blogPosts
      .filter(post => {
        return post.id === id;
      })[0];
  }
  getCommentsForPost(postId) {
    return this.comments
      .filter(comment => {
          return postId === comment.postId;
        }
      )
  }
  getAuthor(id) {
    return this.authors
      .filter(author => {
        return author.id === id;
      })[0];
  }
  getPostsOfAuthor(authorId) {
    return this.blogPosts
      .filter(post => {
        return post.author === authorId
      })
  }
}
