require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});

// 使用
require(
    [
        'echarts',
        'echarts/chart/map'
    ],
    function(ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('global-map'));

        var option = {
            title: {
                text: '某次疫情统计可视化的实现',
                subtext: '纯属虚构',
                x: 'center'
            },
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
                    { start: 10000 },
                    { start: 1000, end: 9999 },
                    { start: 100, end: 999 },
                    { start: 10, end: 99 },
                    { start: 1, end: 9 },
                    { start: 0, end: 0 },
                ],
                color: ['#760000','#b02016','#ff0000','#ff5a4e','#ffaa7f','#ffffff']
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
                        }
                    },
                    emphasis: { label: { show: true } }
                },
                data: [
                    { name: '北京', value: Math.round(Math.random() * 2000) },
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
        myChart.setOption(option);
    }
);