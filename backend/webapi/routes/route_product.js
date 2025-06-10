import express from "express";
import { pdIndex, pdView } from "../controllers/product_controller.js"

const r = express.Router();
r.post('',pdIndex)
r.post('/view',pdView)



const routeProduct=r
export default routeProduct