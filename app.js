const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.get("/version", (req, res) => {
  res.send("0.0.17"); // change this string to ensure a new version deployed
});

app.get("/health", (req, res) => {
  const test = 3;
  res.send("ok"); // health check ensuring that the app deployed (for example in render) is in a functional state.
});

// app.get("/health", (req, res) => { // simulate a broken deployment
//   // eslint-disable-next-line no-constant-condition
//   if (true) throw "error...  ";
//   res.send("ok");
// });

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});
