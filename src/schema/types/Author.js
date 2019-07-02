import {GraphQLList, GraphQLObjectType} from "graphql/type/definition";
import { GraphQLString, GraphQLInt } from "graphql/type/scalars";
import {Post} from "./Post";
import {FakeDB} from "../../FakeDB";

export const Author = new GraphQLObjectType({
  name: "Author",
  description: "Author details",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    posts: {
      type: new GraphQLList(Post),
      resolve: (author) => {
        return FakeDB.getPostsOfAuthor(author.id);
      }
    }
  })
});
