import {GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType} from "graphql/type/definition";
import { GraphQLString, GraphQLInt } from "graphql/type/scalars";

export const Comment = new GraphQLObjectType({
  name: "Comment",
  description: "Comments attached to posts",
  fields: () => ({
    id: { type: GraphQLInt },
    postId: { type: GraphQLInt },
    name: { type: GraphQLString },
    content: { type: GraphQLString }
  })
});

export const CommentInputType = new GraphQLInputObjectType({
  name: 'CommentInput',
  fields: {
    postID: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    content: { type: GraphQLString }
  }
});
