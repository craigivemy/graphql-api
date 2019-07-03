import {GraphQLList} from "graphql/type/definition";
import {Post} from "../types/Post";
import {FakeDB} from "../../FakeDB";

export default {
  posts: {
    type: new GraphQLList(Post),
    description: 'List of all blog posts',
    resolve: () => FakeDB.getBlogPosts()
  }
}
