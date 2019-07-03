import {Post, PostInputType} from "../types/Post";
import {FakeDB} from "../../FakeDB";

export default {
  addPost: {
    type: Post,
    description: 'Creates a new blog post',
    args: {
      post: { type: PostInputType }
    },
    resolve: (parent, {post}) => FakeDB.addBlogPost(post)
  }
}
