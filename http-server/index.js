const express = require("express")

const app = express();

// app.get("/", (req,res)=>{
//     // res.json({
//     //     name: "himika",
//     //     age:21

//     // })

//     res.send('<b>this is working, yes !!</b>')
// });

app.post('/work', (req,res)=>{
    // console.log(req.headers)
});

app.listen(3000, ()=>{
    console.log("this is working");
})