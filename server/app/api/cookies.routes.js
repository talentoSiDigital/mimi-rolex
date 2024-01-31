module.exports = app =>{

    let router = require("express").Router()
    
    // Routes
    
    router.get("/getCookie",(req,res)=>{
    
        res.send(res.cookie)
    })
    
    router.post("/updateCookie", (req,res)=>{
        res.cookie("rlx-consent", "false")
        res.send("changed value")

        
    })

    app.use('/api',router)
// 
}