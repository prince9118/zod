import express from "express";
const app= express();
app.get('/health',(req,res)=>{
    const username= req.headers.username;
    const password= req.headers.password;
    const kidneyId=Number(req.query.kidneyId);
    if(!(username==="Prince" && password==="9118")){
        res.status(400).json({
            "msg":"something up with your inputs"
        });
    }
    if( kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            "msg":"something up with your inputs"
        });
    }
    // true
    res.json({
        success:true,
        message:"your kideney  working"
    
    });
});
app.listen(3000,()=>{
    console.log("server is runing on port 3000");

});