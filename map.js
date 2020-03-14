function init2() {
    var datechoose = document.getElementById('choose-date');
    datechoose.valueAsDate = new Date();
    var bo1 = document.getElementById("rall-timeButton");
    var bo2 = document.getElementById("totalButton");
    echartsMap(1);

    bo1.onclick = function() {
        echartsMap(1);
    }
    bo2.onclick = function() {
        echartsMap(2);
    }
}

function echartsMap(mapType) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('global-map'));
    var datechoose = document.getElementById('choose-date');
    var maptime = getDate(datechoose);
    var index = maptime.length - 1;
    var anhui, beijing, fujian, gansu, guangdong, guangxi, guizhou, hainan, hebei, henan
    var heilongjiang, hubei, hunan, jilin, jiangsu, jiangxi, liaoning, neimengggu, ningxia, qinghai
    var shandong, shan1xi, shan3xi, shanghai, sichuan, tianjin, xinjiang, yunnan, zhejiang, chongqing
    var xizang, aomen, taiwan, xianggang
    if (mapType == 1) {
        tempdata1 = currentConfirmed("安徽");
        if (index >= tempdata1.length)
            index = tempdata.length - 1
        anhui = tempdata1[index];
        tempdata2 = currentConfirmed("北京");
        beijing = tempdata2[index];
        tempdata3 = currentConfirmed("福建");
        fujian = tempdata3[index];
        tempdata4 = currentConfirmed("甘肃");
        gansu = tempdata4[index];
        tempdata5 = currentConfirmed("广东");
        guangdong = tempdata5[index];
        tempdata6 = currentConfirmed("广西");
        guangxi = tempdata6[index];
        tempdata7 = currentConfirmed("贵州");
        guizhou = tempdata7[index];
        tempdata8 = currentConfirmed("海南");
        hainan = tempdata8[index];
        tempdata9 = currentConfirmed("河北");
        hebei = tempdata9[index];
        tempdata10 = currentConfirmed("河南");
        henan = tempdata10[index];
        tempdata11 = currentConfirmed("黑龙江");
        heilongjiang = tempdata11[index];
        tempdata12 = currentConfirmed("湖北");
        hubei = tempdata12[index];
        tempdata13 = currentConfirmed("湖南");
        hunan = tempdata13[index];
        tempdata14 = currentConfirmed("吉林");
        jilin = tempdata14[index];
        tempdata15 = currentConfirmed("江苏");
        jiangsu = tempdata15[index];
        tempdata16 = currentConfirmed("江西");
        jiangxi = tempdata16[index];
        tempdata17 = currentConfirmed("辽宁");
        liaoning = tempdata17[index];
        tempdata18 = currentConfirmed("内蒙古");
        neimengggu = tempdata18[index];
        tempdata19 = currentConfirmed("宁夏");
        ningxia = tempdata19[index];
        tempdata20 = currentConfirmed("青海");
        qinghai = tempdata20[index];
        tempdata21 = currentConfirmed("山东");
        shandong = tempdata21[index];
        tempdata22 = currentConfirmed("山西");
        shan1xi = tempdata22[index];
        tempdata23 = currentConfirmed("陕西");
        shan3xi = tempdata23[index];
        tempdata24 = currentConfirmed("上海");
        shanghai = tempdata24[index];
        tempdata25 = currentConfirmed("四川");
        sichuan = tempdata25[index];
        tempdata26 = currentConfirmed("天津");
        tianjin = tempdata26[index];
        tempdata27 = currentConfirmed("新疆");
        xinjiang = tempdata27[index];
        tempdata28 = currentConfirmed("云南");
        yunnan = tempdata28[index];
        tempdata29 = currentConfirmed("浙江");
        zhejiang = tempdata29[index];
        tempdata30 = currentConfirmed("重庆");
        chongqing = tempdata30[index];
        tempdata31 = currentConfirmed("西藏");
        xizang = tempdata31[index];
        tempdata32 = currentConfirmed("澳门");
        aomen = tempdata32[index];
        tempdata33 = currentConfirmed("台湾");
        taiwan = tempdata33[index];
        tempdata34 = currentConfirmed("香港");
        xianggang = tempdata34[index];
    } else {
        tempdata1 = totalConfirmed("安徽");
        if (index >= tempdata1.length)
            index = tempdata.length - 1
        anhui = tempdata1[index];
        tempdata2 = totalConfirmed("北京");
        beijing = tempdata2[index];
        tempdata3 = totalConfirmed("福建");
        fujian = tempdata3[index];
        tempdata4 = totalConfirmed("甘肃");
        gansu = tempdata4[index];
        tempdata5 = totalConfirmed("广东");
        guangdong = tempdata5[index];
        tempdata6 = totalConfirmed("广西");
        guangxi = tempdata6[index];
        tempdata7 = totalConfirmed("贵州");
        guizhou = tempdata7[index];
        tempdata8 = totalConfirmed("海南");
        hainan = tempdata8[index];
        tempdata9 = totalConfirmed("河北");
        hebei = tempdata9[index];
        tempdata10 = totalConfirmed("河南");
        henan = tempdata10[index];
        tempdata11 = totalConfirmed("黑龙江");
        heilongjiang = tempdata11[index];
        tempdata12 = totalConfirmed("湖北");
        hubei = tempdata12[index];
        tempdata13 = totalConfirmed("湖南");
        hunan = tempdata13[index];
        tempdata14 = totalConfirmed("吉林");
        jilin = tempdata14[index];
        tempdata15 = totalConfirmed("江苏");
        jiangsu = tempdata15[index];
        tempdata16 = totalConfirmed("江西");
        jiangxi = tempdata16[index];
        tempdata17 = totalConfirmed("辽宁");
        liaoning = tempdata17[index];
        tempdata18 = totalConfirmed("内蒙古");
        neimengggu = tempdata18[index];
        tempdata19 = totalConfirmed("宁夏");
        ningxia = tempdata19[index];
        tempdata20 = totalConfirmed("青海");
        qinghai = tempdata20[index];
        tempdata21 = totalConfirmed("山东");
        shandong = tempdata21[index];
        tempdata22 = totalConfirmed("山西");
        shan1xi = tempdata22[index];
        tempdata23 = totalConfirmed("陕西");
        shan3xi = tempdata23[index];
        tempdata24 = totalConfirmed("上海");
        shanghai = tempdata24[index];
        tempdata25 = totalConfirmed("四川");
        sichuan = tempdata25[index];
        tempdata26 = totalConfirmed("天津");
        tianjin = tempdata26[index];
        tempdata27 = totalConfirmed("新疆");
        xinjiang = tempdata27[index];
        tempdata28 = totalConfirmed("云南");
        yunnan = tempdata28[index];
        tempdata29 = totalConfirmed("浙江");
        zhejiang = tempdata29[index];
        tempdata30 = totalConfirmed("重庆");
        chongqing = tempdata30[index];
        tempdata31 = totalConfirmed("西藏");
        xizang = tempdata31[index];
        tempdata32 = totalConfirmed("澳门");
        aomen = tempdata32[index];
        tempdata33 = totalConfirmed("台湾");
        taiwan = tempdata33[index];
        tempdata34 = totalConfirmed("香港");
        xianggang = tempdata34[index];
    }
    var option = {
        title: {
            text: '某次疫情统计可视化的实现(截止至' + datechoose.value + ')',
            subtext: '纯属虚构',
            x: 'center'
        },
        backgroundColor: '#f7f7f7',
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['确诊人数']
        },
        dataRange: {
            x: 'left',
            y: 'bottom',
            splitList: [
                { start: 10000, color: '#480f10' },
                { start: 1000, end: 9999, color: '#772526' },
                { start: 100, end: 999, color: '#d56355' },
                { start: 10, end: 99, color: '#e9a188' },
                { start: 1, end: 9, color: '#faebd2' },
                { start: 0, end: 0, color: '#ffffff' },
            ],
            color: ['#E0022B', '#E09107', '#A3E00B']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        roamController: {
            show: true,
            x: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series: [{
            name: '确诊人数(点击可查看详情)',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: 'black'
                        }
                    },
                    borderWidth: 2,
                    borderColor: '#8ac2e5',
                    color: '#9fd7dd',
                    areaStyle: { color: '#9fd7dd' }
                },
                emphasis: { label: { show: true } }
            },
            data: [{ name: '北京', value: beijing },
                { name: '天津', value: tianjin },
                { name: '上海', value: shanghai },
                { name: '重庆', value: chongqing },
                { name: '河北', value: hebei },
                { name: '河南', value: henan },
                { name: '云南', value: yunnan },
                { name: '辽宁', value: liaoning },
                { name: '黑龙江', value: heilongjiang },
                { name: '湖南', value: hunan },
                { name: '安徽', value: anhui },
                { name: '山东', value: shandong },
                { name: '新疆', value: xinjiang },
                { name: '江苏', value: jiangsu },
                { name: '浙江', value: zhejiang },
                { name: '江西', value: jiangxi },
                { name: '湖北', value: hubei },
                { name: '广西', value: guangxi },
                { name: '甘肃', value: gansu },
                { name: '山西', value: shan1xi },
                { name: '内蒙古', value: neimengggu },
                { name: '陕西', value: shan3xi },
                { name: '吉林', value: jilin },
                { name: '福建', value: fujian },
                { name: '贵州', value: guizhou },
                { name: '广东', value: guangdong },
                { name: '青海', value: qinghai },
                { name: '西藏', value: xizang },
                { name: '四川', value: sichuan },
                { name: '宁夏', value: ningxia },
                { name: '海南', value: hainan },
                { name: '台湾', value: taiwan },
                { name: '香港', value: xianggang },
                { name: '澳门', value: aomen }
            ]
        }]
    };

    // 为echarts对象加载数据 
    myChart.setOption(option, true, true);
    myChart.on('click', function(param) {
        window.location.href = "province.html?name=" + param.name;
    })
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    } else {
        return '全国';
    }
}
//window.onload = init;