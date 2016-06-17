//模块加载
//var yk = require("yk");
//yk.test();

//var test = require("./src/test");
//test.test();
//console.log(module.paths);

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

//非I/O 的异步 API
//加入两个setImmediate()的回调函数
//setImmediate(function(){
//    console.log("setImmediate延迟执行1");
//    //进行下次循环
//    process.nextTick(function(){
//        console.log('强势插入');
//    });
//});
//setImmediate(function(){
//    console.log("setImmediate延迟执行2");
//});
////加入两个nextTick()的回调函数
//process.nextTick(function(){
//    console.log('nextTick延迟执行1');
//});
//process.nextTick(function(){
//    console.log('nextTick延迟执行2');
//})
//console.log("正常执行");

//async示例

var async = require("async");
var fs = require("fs");

//1 异步的串行执行
//async.series([
//    function(callBack){
//        fs.readFile("file1.txt",'utf-8',callBack);
//    },
//    function(callBack){
//        fs.readFile("file2.txt",'utf-8',callBack);
//    }
//],function(err,results){
//    console.log(results);
//});

// 等价于
//fs.readFile('file1.txt','utf-8',function(err,content){
//    if(err){
//        return callback(err);
//    }
//    fs.readFile('file2.txt','utf-8',function(err,data){
//        if(err){
//            return callback(err);
//        }
//        callback(null,[content,data]);
//    });
//});

//2 异步的并行执行
//async.parallel([
//    function(callBack){
//        fs.readFile("file1.txt",'utf-8',callBack);
//    },
//    function(callBack){
//        fs.readFile("file2.txt",'utf-8',callBack);
//    }
//],function(err,results){
//    console.log(results);
//});

// 上面代码等价于
//var counter = 2;
//var results = [];
//var callback = function(err,results){
//    if(err){
//        console.log("error");
//    }
//    console.log(results);
//}
//var done = function(index,value){
//    results[index] = value;
//    counter--;
//    if(counter === 0){
//        callback(null,results);
//    }
//};
////只传递第一个异常
//var hasErr = false;
//var fail = function(err){
//        if(!hasErr){
//            hasErr = true;
//            callback(err);
//        }
//};
//
//fs.readFile('file1.txt','utf-8',function(err,content){
//    if(err){
//        callback(err);
//    }
//    done(0,content);
//});
//
//fs.readFile('file2.txt','utf-8',function(err,content){
//    if(err){
//        callback(err);
//    }
//    done(1,content);
//});


//3 异步调用的依赖处理
//async.waterfall([
//    function(callBack){
//        fs.readFile("file1.txt",'utf-8',function(err,content){
//            callBack(err,content);
//        });
//    },
//    function(arg1,callBack){
//        //arg1 => file2.txt
//        fs.readFile(arg1.toString(),'utf-8',function(err,content) {
//            callBack(err, content);
//        });
//    },function(arg1,callBack){
//        //arg1 => file3.txt
//        fs.readFile(arg1.toString(),'utf-8',function(err,content) {
//            callBack(err, content);
//        });
//    }
//],function(err,results){
//    // results => This is file3.txt
//    console.log(results);
//});

// 上面代码等价于
var callback = function(err,results){
    if(err){
        console.log("error");
    }
    console.log(results);
}
fs.readFile('file1.txt','utf-8',function(err,data1){
    if(err){
        callback(err);
    }
    fs.readFile(data1.toString(),'utf-8',function(err,data2) {
        if (err) {
            callback(err);
        }
        fs.readFile(data2.toString(),'utf-8',function(err,data3) {
            if (err) {
                callback(err);
            }
            callback(null,data3);
        });
    });
});

//3 自动依赖处理

