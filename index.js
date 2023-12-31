const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");
const server = new ApolloServer({ typeDefs, resolvers });

const port = 3000;

server.listen(port).then(({ url }) => {
  console.log(`API IS RUNNING AT: ${url} `);
});
