const express = require("express");
const port = 3000
app = express()

app.get('/', function(req,res){
    res.send('Hello World!')
    res.send("<b>yes, it is working indeed<b>")
})

// app.listen(port, function(){
// 
// })

app.listen(port,()=>{
    console.log("it works")
})