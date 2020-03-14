const fs = require('fs')
const path = require('path')
fs.readFile(path.join(__dirname, './Data/data_anhui.json'), 'utf8', (err, res) => {
    if (err) throw err
    var data = JSON.parse(res)
    var data_anhui = [];
    var ti = 0;
    data.results.forEach(element => {
        var tp = getDateTime(ConvertJSONDateToJSDate("/Date(" + element.updateTime + ")/"))
        if (tp != ti) {
            ti = tp;
            element.updateTime = tp;
            data_anhui.push({
                name: element.provinceName,
                value: element.confirmedCount,
                date: element.updateTime,
            })
        }
    });
    console.log(data_anhui)
})

function getDateTime(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    return year + "-" + month + "-" + day;
}
//调用的是这个方法
function ConvertJSONDateToJSDate(jsondate) {
    var date = new Date(parseInt(jsondate.replace("/Date(", "").replace(")/", ""), 10));
    return date;
}