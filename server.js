import { app } from "./src/app.js";
import connectDB from "./src/db/dbconn.js";
import './src/config/env.js'

connectDB();

app.get("/", (req, res) => {
    res.send("app is running")
})





app.listen(3000, () => {
    console.log(`server is running on the port 3000`);
})
