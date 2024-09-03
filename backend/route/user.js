const express=require("express");
const router=express.Router();

const {addProduct,productList} =require("../controller/admin")

router.post("/addProduct",addProduct)
router.post("/productList",productList)

module.exports=router;