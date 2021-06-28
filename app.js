const express = require("express");
const cors = require("cors");
const app = express();

const portNum = 5000;

const taskRouter = require("./component/router/taskRouter");
const { invalidUrl } = require("./component/controller/taskController");

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header("Content-Type", "application/json");
//   //   res.header(
//   //     "Access-Control-Allow-Headers",
//   //     "Origin, X-Requested-With, Content-Type, Accept"
//   //   );
//   next();
// });
app.use("/todolist", taskRouter);
app.use("/*", invalidUrl);

app.listen(portNum, () => console.log(`serveris listening!!`));
