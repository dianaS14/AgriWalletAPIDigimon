const { gql } = require("apollo-server");

const typeDefs = gql`
  
  type character {
   name: String!
   level: String!
   img: String
    }

  type Query {
    characters:  [character!]
     }



`;

module.exports = { typeDefs };
