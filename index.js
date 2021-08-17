const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.send(path.join(__dirname, 'public', 'index.html'));
// });

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
