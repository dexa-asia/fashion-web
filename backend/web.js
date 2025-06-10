import express from "express"
import cors from "cors";
import setupRoutes from "./webapi/routes/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

setupRoutes(app);
const PORT = 1234;
app.listen(PORT, () => {
    console.log(`bizz backend is running on port ${PORT}`);
});