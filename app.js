const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/cricketAPI");

const playerProfileSchema = { No : Number,
    Name : String,
    debutYear : Number,
    lastPlayed : Number,
    matches : Number 
}

const battingStatSchema = { No :Number,
  Name: String,
  inningsBatted: Number,
  notOuts: Number,
  runsScored: Number,
  highestScore: Number,
  battingAverage: Number
}

const playerProfile = mongoose.model("playerProfile",playerProfileSchema);
const battingStat = mongoose.model("battingStat",battingStatSchema);

app.route("/playerprofile")
.get(function (req,res) {
    playerProfile.find(function (err,result) {
        if(!err)
        {
            res.send(result); 
        }
        else
        {
            res.send(err);
        }  
    });
});

app.route("/battingstats")
.get(function (req,res) {
    battingStat.find(function (err,result) {
        if(!err)
        {
            res.send(result); 
        }
        else
        {
            res.send(err);
        }  
    });
});

app.route("/playerprofile/:playerName")
.get(function (req,res) {
    
    playerProfile.findOne({Name: req.params.playerName}, function (err,foundPlayer){
        if(foundPlayer)
        {
            res.send(foundPlayer);
        }
        else
        {
            res.send("No Player Information found");
        }
    });
    
})

app.route("/battingstats/:playerName")
.get(function (req,res) {
    
    battingStat.findOne({Name: req.params.playerName}, function (err,foundPlayer){
        if(foundPlayer)
        {
            res.send(foundPlayer);
        }
        else
        {
            res.send("No Player Information found");
        }
    });
    
})

app.listen(3000 , function (req,res) {
    console.log("server is running");
});