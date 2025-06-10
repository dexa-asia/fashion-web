import express from "express";
import { siteHome, siteIndex } from "../controllers/site_controller.js"

const r = express.Router();
r.post('',siteIndex)
r.post('/home',siteHome)



const routeSite=r
export default routeSite