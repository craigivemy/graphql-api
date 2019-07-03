import {GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType} from "graphql/type/definition";
import { GraphQLString, GraphQLInt } from "graphql/type/scalars";
import {Author} from "./Author";
import {FakeDB} from "../../FakeDB";
import {Comment} from "./Comment";

export const Post = new GraphQLObjectType({
  name: "BlogPost",
  description: "Blog posts on the site",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    author: {
      type: Author,
      resolve: (post => {
        return FakeDB.getAuthor(post.author);
      })
    },
    comments: {
      type: new GraphQLList(Comment),
      resolve: (post) => {
        return FakeDB.getCommentsForPost(post.id);
      }
    }
  })
});

export const PostInputType = new GraphQLInputObjectType({
  name: 'PostInput',
  fields: {
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    author: { type: GraphQLNonNull(GraphQLInt) }
  }
});
