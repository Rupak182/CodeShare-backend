import {postCode} from "../controller/code.controller.js"
import { viewCode } from "../controller/code.controller.js";
import { updateCode } from "../controller/code.controller.js";

import express from "express";

const router= express.Router();

router.post('/post',postCode)
router.put('/update',updateCode)
router.post('/view',viewCode)


export default router