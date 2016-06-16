//模块加载
var yk = require("yk");
if(yk){
    yk.test();
}

console.log(module.paths);

//var fs = require("fs");
//var filePath = "file1.txt";
//var content = "file2.txt";
//同步
//fs.writeFileSync(filePath,content);
//var result = fs.readFileSync(filePath).toString();
//console.log(result);

////异步
//fs.writeFile(filePath,content,function(err){
//    if(err) throw err;
//    fs.readFile(filePath,function(err,res){
//        if(err) throw err;
//        console.log(res.toString());
//    })
//});


