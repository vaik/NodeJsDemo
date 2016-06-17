var fs = require("fs");
fs.readFile("big.txt",function(err,res){
    if(err) throw err;
    console.log("read big.txt! ");
});
fs.readFile("small.txt",function(err,res){
    if(err) throw err;
    console.log("read small.txt! the length is "+res.toString().length);
});
fs.readFile("middle.txt",function(err,res){
    if(err) throw err;
    console.log("read middle.txt! the length is "+res.toString().length);
});

//var fs = require("fs");
//var getAsynPromise = function(filePath){
//    return new Promise(function(resolve,reject){
//        fs.readFile(filePath,{encoding:'utf-8'},function(err,res){
//            if(err) return reject(err);
//            else return resolve(res);
//        })
//    });
//};

