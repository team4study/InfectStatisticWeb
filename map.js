function init2() {
    var datechoose = document.getElementById('choose-date');
    datechoose.valueAsDate = new Date();
    var bo1 = document.getElementById("rall-timeButton");
    var bo2 = document.getElementById("totalButton");
    echartsMap(1);
    echartsMap(2);

    bo1.onclick = function() {
        echartsMap(3);
    }
    bo2.onclick = function() {
        echartsMap(4);
    }
}

function echartsMap(x) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('global-map'));
    var datechoose = document.getElementById('choose-date');
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
            data: [{ name: '北京', value: x },
                { name: '天津', value: Math.round(Math.random() * 2000) },
                { name: '上海', value: Math.round(Math.random() * 2000) },
                { name: '重庆', value: Math.round(Math.random() * 2000) },
                { name: '河北', value: 0 },
                { name: '河南', value: Math.round(Math.random() * 2000) },
                { name: '云南', value: 5 },
                { name: '辽宁', value: 305 },
                { name: '黑龙江', value: Math.round(Math.random() * 2000) },
                { name: '湖南', value: 200 },
                { name: '安徽', value: Math.round(Math.random() * 2000) },
                { name: '山东', value: Math.round(Math.random() * 2000) },
                { name: '新疆', value: Math.round(Math.random() * 2000) },
                { name: '江苏', value: Math.round(Math.random() * 2000) },
                { name: '浙江', value: Math.round(Math.random() * 2000) },
                { name: '江西', value: Math.round(Math.random() * 2000) },
                { name: '湖北', value: Math.round(Math.random() * 2000) },
                { name: '广西', value: Math.round(Math.random() * 2000) },
                { name: '甘肃', value: Math.round(Math.random() * 2000) },
                { name: '山西', value: Math.round(Math.random() * 2000) },
                { name: '内蒙古', value: Math.round(Math.random() * 2000) },
                { name: '陕西', value: Math.round(Math.random() * 2000) },
                { name: '吉林', value: Math.round(Math.random() * 2000) },
                { name: '福建', value: Math.round(Math.random() * 2000) },
                { name: '贵州', value: Math.round(Math.random() * 2000) },
                { name: '广东', value: Math.round(Math.random() * 2000) },
                { name: '青海', value: Math.round(Math.random() * 2000) },
                { name: '西藏', value: Math.round(Math.random() * 2000) },
                { name: '四川', value: Math.round(Math.random() * 2000) },
                { name: '宁夏', value: Math.round(Math.random() * 2000) },
                { name: '海南', value: Math.round(Math.random() * 2000) },
                { name: '台湾', value: Math.round(Math.random() * 2000) },
                { name: '香港', value: Math.round(Math.random() * 2000) },
                { name: '澳门', value: Math.round(Math.random() * 2000) }
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