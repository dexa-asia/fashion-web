


const siteIndex=async(req,res)=>{
    try{
        const data ={
            "title":"hallo",
            "name":"rudi"
        }

        res.json({
            "status": 68,
            "data":data,
        });


    }
    catch (err){
        res.json({
            "status": 60,
            "message":err.message,
        });
    } 

}

const siteHome=async(req,res)=>{
    try{
        const data ={
            "title":"home",
            "name":"halaman utana"
        }

        res.json({
            "status": 68,
            "data":data,
        });


    }
    catch (err){
        res.json({
            "status": 60,
            "message":err.message,
        });
    } 

}

export{
    siteIndex,siteHome
}
