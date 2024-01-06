const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");
const server = new ApolloServer({
  typeDefs, resolvers
});


const port = process.env.PORT || 3000;
const url = process.env.URL || 'http://localhost:3000';

server.listen({port}).then(() => {
  console.log(`🚀 API IS RUNNING AT: ${url} `);
});
