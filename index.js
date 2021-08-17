const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const members = require('./Members')
const logger = require("./middleware/logger");

const app = express();

// app.use(logger);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.render('index', {
  title: 'member App',
  members
}))

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

// app.get("/", (req, res) => {
//   res.send(path.join(__dirname, 'public', 'index.html'));
// });

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
