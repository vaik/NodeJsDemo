var fs = require("fs");
fs.readFile("big.txt",function(err,res){
    if(err) throw err;
    console.log("read big.txt! the length is "+res.toString().length);
});
fs.readFile("small.txt",function(err,res){
    if(err) throw err;
    console.log("read small.txt! the length is "+res.toString().length);
});
fs.readFile("middle.txt",function(err,res){
    if(err) throw err;
    console.log("read middle.txt! the length is "+res.toString().length);
});