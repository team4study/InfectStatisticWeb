var request = require('request');
const fs = require('fs');
const path = require('path');
request('https://lab.isaaclin.cn/nCoV/api/overall?latest=0', function(err, response, body) {
    //err 当前接口请求错误信息
    //response 一般使用statusCode来获取接口的http的执行状态
    //body 当前接口response返回的具体数据 返回的是一个jsonString类型的数据 
    //需要通过JSON.parse(body)来转换
    if (!err && response.statusCode == 200) {
        //todoJSON.parse(body)
        var res = JSON.parse(body);
        fs.writeFile(path.join(__dirname, './data_total.json'), JSON.stringify(res), err => {
            if (err) throw err
            console.log("数据写入成功")
        })
    }
})