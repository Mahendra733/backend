const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PortalModel = require('./models/mongoose');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to the MongoDB database (no need for useNewUrlParser or useUnifiedTopology)
mongoose.connect('mongodb://127.0.0.1:27017/portal');

app.post('/student', (req, res) => {
  PortalModel.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).json({ error: err.message }));
});
app.post('/student_login',(req,res) =>{
    const {username,password}=req.body;
    PortalModel.findOne({username:username})
    .then(user =>{
        if(user) {
            if(user.password ===password){
                res.json("success")
            }
            else{
                res.json("the password is incorrect")
            }
        }
        else{
            res.json("no recoed exists.please signup")
        }
    })
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
