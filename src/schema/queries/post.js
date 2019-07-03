import {Post} from "../types/Post";
import {GraphQLNonNull} from "graphql/type/definition";
import {GraphQLInt} from "graphql/type/scalars";
import {FakeDB} from "../../FakeDB";

export default {
  post: {
    type: Post,
    description: 'Gets a specific post',
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve: (parent, {id}) => FakeDB.getBlogPost(id) 
  }
}
