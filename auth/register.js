const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://karthika:karthika@cluster0.guuzjnf.mongodb.net/?retryWrites=true&w=majority")
    .then(() =>{
        console.log("database connected successfully");
    }) .catch((err)=>{
        console.log("error occured", err);
    });

const Employee = mongoose.model("Employee", {
    name: String,
    password: String,
});

//Register
app.post("/register",(req,res)=>{
    const {name,password, confirmPassword} = req.body;
    if (password !== confirmPassword){
        res.status(400).send("Passwords do not match");
    } else{
        const employee = new Employee({name, password});
        employee.save().then(()=>{
            res.send("employee registered successfully");
        }) .catch((err)=>{
            console.log("error occured", err);
        });
    }
});


//Login

app.post('/login', (req,res)=>{
    const {name, password} = req.body;
    Employee.findOne({name, password})
        .then((employee)=>{
            if(employee){
                console.log(employee);
                res.send("login Successfully");
            } else{
                res.status(400).send("invalid Credentials");
            }
        });
});

app.listen(3000, ()=>{
    console.log('server started on port 3000');
})