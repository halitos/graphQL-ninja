const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
// const schema = require("./")

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});