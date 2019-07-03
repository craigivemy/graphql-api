import {GraphQLNonNull} from "graphql/type/definition";
import {Author} from "../types/Author";
import {FakeDB} from "../../FakeDB";
import {GraphQLInt} from "graphql/type/scalars";

export default {
  author: {
    type: Author,
    description: 'Gets an author',
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve: (parent, {id}) => FakeDB.getAuthor(id)
  }
}
