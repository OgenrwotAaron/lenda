import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as path from "path";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(
  express.static(path.join(__dirname, "..", "..", "..", "client", "build"))
);

app.get("/api", (_req, res) => res.json({ message: "Welcome to the API" }));

app.get("*", (_req, res) => {
  res.sendFile(
    path.resolve(__dirname, "..", "..", "..", "client", "build", "index.html")
  );
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
