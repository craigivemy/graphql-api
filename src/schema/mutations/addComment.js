import {Comment, CommentInputType} from "../types/Comment";
import {FakeDB} from "../../FakeDB";

export default {
  addComment: {
    type: Comment,
    description: 'Adds new comment',
    args: {
      comment: { type: CommentInputType }
    },
    resolve: (parent, {comment}) => FakeDB.addComment(comment)
  }
}
