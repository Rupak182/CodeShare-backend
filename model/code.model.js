import mongoose from "mongoose"

const schema = new mongoose.Schema({
    id:"string",
    codeData:{
        type:"string",
    }
})

const Code = mongoose.model("Code",schema)

export default Code