import Product from "../../common/models/product.js";
import ProductCategory from "../../common/models/product_category.js";
import ProductStatus from "../../common/models/product_status.js";
import { imgPath } from "../../common/config/params.js";


const pdIndex=async(req,res)=>{
    try{
        
        const products = await Product.findAll();

        res.json({
            "status": 68,
            "data":products,
        });


    }
    catch (err){
        res.json({
            "status": 60,
            "message":err.message,
        });
    } 

}


const pdView=async(req,res)=>{
    try{
        
        const p = await Product.findOne({
            where:{
                id:req.body.id
            },
            include:[
                {
                    model:ProductStatus,
                    as:'status'
                },
                {
                    model:ProductCategory,
                    as:'category',
                    attributes:['category']
                }
            ]
        });

        

        res.json({
            "status": 68,
            "data":{
                id:p.id,
                product:p.product,
                category:p.category.category,
                status:p.status.status,
                image:imgPath+ p.image,
            },
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
    pdIndex,pdView
}