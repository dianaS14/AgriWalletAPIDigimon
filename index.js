require('dotenv').config();

const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");
const server = new ApolloServer({
  typeDefs, resolvers,
  plugins: [ApolloServerPluginLandingPageDisabled()],   
});




const port = process.env.PORT || 3000;
const url = process.env.URL || `http://localhost:${port}`;

server.listen({ port }).then(() => {
  console.log(`🚀 API IS RUNNING AT: ${url}`);
});