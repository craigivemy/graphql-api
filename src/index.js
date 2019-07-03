import {graphql} from "graphql";
import {Schema} from "./schema";

const query = `
  {
    posts {
      title,
      author {
        name
      }
    }
  }
`;
graphql(Schema, query).then(result => {
  console.log(JSON.stringify(result, null, 2));
}).catch(err => console.log(err));
