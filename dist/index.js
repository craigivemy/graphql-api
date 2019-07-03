"use strict";

var _graphql = require("graphql");

var _schema = require("./schema");

var query = "\n  {\n    posts {\n      title\n    }\n  }\n";
(0, _graphql.graphql)(_schema.Schema, query).then(function (result) {
  console.log(JSON.stringify(result, null, 2));
}).catch(function (err) {
  return console.log(err);
});