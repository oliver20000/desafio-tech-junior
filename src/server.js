require("dotenv").config();

const app = require("./index");

app.listen(process.env.PORT || 3333, () =>
  console.log(`🚀 Server started on port ${process.env.PORT || 3333}!`)
);
