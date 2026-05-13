import express from "express";
const app= express();
app.get('/health',(req,res)=>{
    const username= req.headers.username;
    const password= req.headers.password;
    if(username==="Prince" && password==="9118"){
        res.json({
            success:true,
            message:"your kideney  working"
        
        });
    }
});
app.listen(3000,()=>{
    console.log("server is runing on port 3000");

});