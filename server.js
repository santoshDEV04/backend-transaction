import { app } from "./src/app.js";
import connectDB from "./src/db/dbconn.js";
import './src/config/env.js'

connectDB();

app.get("/", (req, res) => {
    res.send("app is running")
})

const PORT = process.env.PORT || 5000



app.listen(PORT, () => {
    console.log(`server is running on the port ${PORT}`);
})
