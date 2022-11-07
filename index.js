const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.route");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/v1/user",userRouter)
app.get("/", (req, res)=> {
    res.send("Server is running");
});

app.listen(port, ()=> {
    console.log("Server is running on port: ",port);
})