const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const users = require("./routes/api/users");
const articles = require("./routes/api/articles");
const files = require("./routes/api/files");
const { checkToken } = require("./middleware/auth");
async function connect(){
    try {
      const mongoUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:27017/test`;
      console.log(mongoUri)
      await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      });
    } catch (error) {
      console.log("-------");
      console.log(error);
    }
}

const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(checkToken);
app.use("/api/users", users);
app.use("/api/articles", articles);
app.use("/api/files", files);

app.use(express.static("client/build"));

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 3002;
app.listen(port, () => {
    connect()
  console.log(`Server running on port ${port}`);
});
