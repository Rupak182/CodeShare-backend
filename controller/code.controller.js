import Code from "../model/code.model.js"

export const postCode = async(req,res)=>{
    try {

        const {id,code}= req.body;
            
        let createdCode= new Code({
            "id":id,
            "codeData":code
            })

        await createdCode.save()
        res.status(201).json({
            message:"Data inserted successfully",
            code:code
            })
            

     

        
    } catch (error) {
        console.log("Error :",error.message);
        res.status(500).json({message: "Internal server error"})
        
    }
}


export const updateCode = async(req,res)=>{
    try {

        const {id,code}= req.body

        let data =await  Code.findOne({id:id}).exec();
        data.codeData = code;
        data.save();

        res.status(200).json({
            message:`Document with id : ${id} updated successfully`
        })

        
    } catch (error) {
        console.log("Error :", error);
        res.status(500).json({
            message:"Internal server error",
        })
    }
}

export const viewCode = async (req,res)=>{
    try {
        const {id}=req.body;
            console.log(req.body)
            const data= await Code.findOne({id:id});
            if(data)
                res.status(200).json({
                message:"Data fetched from the database",
                code:data.codeData
            })

            else{
                res.status(400).json({message:"unable to fetch data"});
            }
        
    } catch (error) {
        console.log("Error :", error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}



// export const putCode = async(req,res)=>{
//     try {
//         const {id,code}= req.body;

//         const doesCodeExists = await Code.exists({ id: id });


//         if(!doesCodeExists)
//             {
//                 let createdCode= new Code({
//                     "id":id,
//                     "codeData":code
//                 })

//                 await createdCode.save()
//                 res.status(201).json({
//                     message:"Data inserted successfully",
//                     code:code
//                 })
//             }

//         else
//         {
//             let data =await  Code.findOne({id:id}).exec();
//             console.log(data)
//             res.status(200).json({
//                 message:"Data fetched from the database",
//                 code:data.codeData
//             })

//         }

        
//     } catch (error) {
//         console.log("Error :",error.message);
//         res.status(500).json({message: "Internal server error"})
        
//     }
// }