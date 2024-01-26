const express =require("express")
const app=express()
const collection=require("./config")

app.use(express.static("public"));
app.use(express.static("images"));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("login")
 })

 app.get("/signup",(req,res)=>{
    res.render("signup")
 })
 app.get("/home",(req,res)=>{
    res.render("home")
 })

app.get("/login",(req,res)=>{
   res.render("login")
})

app.post("/signup",async(req,res)=>{
    const data=[{
        userName:req.body.userName,
        password:req.body.password
    }];

const extinct=await collection.findOne({userName:req.body.userName});
if(extinct){
    res.send(" user already exist");
  
}

else{
   
    const userdata=await collection.insertMany(data)
    console.log(userdata);
}



})

app.post("/login",async(req,res)=>{
    try {
        const check=await collection.findOne({userName:req.body.userName})

        if(check.password === req.body.password){
            res.render("home.ejs")
        }
        else{
            res.send("wrong pasword")
        }
    } 
    catch{
        res.send("wrong details")
    }
})


app.listen(3000);