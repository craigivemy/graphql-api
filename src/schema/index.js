import posts from "./queries/posts";
import post from "./queries/post";
import author from "./queries/author";
import {GraphQLSchema} from "graphql/type/schema";
import {GraphQLObjectType} from "graphql/type/definition";
import addPost from "./mutations/addPost";
import addComment from "./mutations/addComment";

export const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Rootquery',
    fields: () => ({
      ...posts,
      ...post,
      ...author
    })
  }),
  mutation: new GraphQLObjectType({
    name: 'Rootmutation',
    fields: () => ({
      ...addPost,
      ...addComment
    })
  })
});
