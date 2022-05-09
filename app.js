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

const bowlingStatSchema = { No: Number,
    Name: String,
    ballsBowled: Number,
    madians: Number,
    RunsConsumed: Number,
    wickets: Number,
    bowlingAverage:Number
}

const playerProfileODI = mongoose.model("playerProfile",playerProfileSchema);
const battingStatODI = mongoose.model("battingStat",battingStatSchema);
const bowlingStatODI = mongoose.model("bowlingStat",bowlingStatSchema);

app.route("/odi/playerprofile")
.get(function (req,res) {
    playerProfileODI.find(function (err,result) {
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
app.route("/odi/battingstats")
.get(function (req,res) {
    battingStatODI.find(function (err,result) {
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
app.route("/odi/bowlingstats")
.get(function (req,res) {
    bowlingStatODI.find(function (err,result) {
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
app.route("/odi/playerprofile/:playerName")
.get(function (req,res) {
    
    playerProfileODI.findOne({Name: req.params.playerName}, function (err,foundPlayer){
        if(foundPlayer)
        {
            res.send(foundPlayer);
        }
        else
        {
            res.send("No Player Information found");
        }
    });
});
app.route("/odi/battingstats/:playerName")
.get(function (req,res) {
    
    battingStatODI.findOne({Name: req.params.playerName}, function (err,foundPlayer){
        if(foundPlayer)
        {
            res.send(foundPlayer);
        }
        else
        {
            res.send("No Player Information found");
        }
    });
});
app.route("/odi/bowlingstats/:playerName")
.get(function (req,res) {
    
    bowlingStatODI.findOne({Name: req.params.playerName}, function (err,foundPlayer){
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