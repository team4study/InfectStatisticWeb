lineTabData1 = [{
        name: '新增确诊',
        type: 'line',
        stack: '总量',
        itemStyle: {
            normal: {
                color: '#e83132', //改变折线点的颜色
                lineStyle: {
                    color: '#e83132' //改变折线颜色
                }
            }
        },
        data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
        name: '新增疑似',
        type: 'line',
        stack: '总量',
        itemStyle: {
            normal: {
                color: '#ec9217', //改变折线点的颜色
                lineStyle: {
                    color: '#ec9217' //改变折线颜色
                }
            }
        },
        data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
        name: '新增治愈',
        type: 'line',
        stack: '总量',
        itemStyle: {
            normal: {
                color: '#10aeb5', //改变折线点的颜色
                lineStyle: {
                    color: '#10aeb5' //改变折线颜色
                }
            }
        },
        data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
        name: '新增死亡',
        type: 'line',
        stack: '总量',
        itemStyle: {
            normal: {
                color: '#4d5054', //改变折线点的颜色
                lineStyle: {
                    color: '#4d5054' //改变折线颜色
                }
            }
        },
        data: [320, 332, 301, 334, 390, 330, 320]
    },
];
lineLegend1 = ['新增确诊', '新增疑似', '新增治愈', '新增死亡'];
lineTabData2 = [{
        name: '现有确诊',
        type: 'line',
        stack: '总量',
        itemStyle: {
            normal: {
                color: '#fe9688', //改变折线点的颜色
                lineStyle: {
                    color: '#fe9688' //改变折线颜色
                }
            }
        },
        data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
        name: '现有疑似',
        type: 'line',
        stack: '总量',
        itemStyle: {
            normal: {
                color: '#ec9217', //改变折线点的颜色
                lineStyle: {
                    color: '#ec9217' //改变折线颜色
                }
            }
        },
        data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
        name: '累计确诊',
        type: 'line',
        stack: '总量',
        itemStyle: {
            normal: {
                color: '#e83132', //改变折线点的颜色
                lineStyle: {
                    color: '#e83132' //改变折线颜色
                }
            }
        },
        data: [320, 332, 301, 334, 390, 330, 320]
    }
];
lineLegend2 = ['现有确诊', '现有疑似', '累计确诊'];
lineTabData3 = [{
        name: '治愈人数',
        type: 'line',
        stack: '总量',
        itemStyle: {
            normal: {
                color: '#10aeb5', //改变折线点的颜色
                lineStyle: {
                    color: '#10aeb5' //改变折线颜色
                }
            }
        },
        data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
        name: '死亡人数',
        type: 'line',
        stack: '总量',
        itemStyle: {
            normal: {
                color: '#4d5054', //改变折线点的颜色
                lineStyle: {
                    color: '#4d5054' //改变折线颜色
                }
            }
        },
        data: [320, 332, 301, 334, 390, 330, 320]
    }
];
lineLegend3 = ['治愈人数', '死亡人数'];
lineTabData4 = [{
        name: '治愈率',
        type: 'line',
        stack: '总量',
        itemStyle: {
            normal: {
                color: '#10aeb5', //改变折线点的颜色
                lineStyle: {
                    color: '#10aeb5' //改变折线颜色
                }
            }
        },
        data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
        name: '死亡率',
        type: 'line',
        stack: '总量',
        itemStyle: {
            normal: {
                color: '#4d5054', //改变折线点的颜色
                lineStyle: {
                    color: '#4d5054' //改变折线颜色
                }
            }
        },
        data: [320, 332, 301, 334, 390, 330, 320]
    }
];
lineLegend4 = ['治愈率', '死亡率'];

function init1() {
    echartsLine(1);
}

function tab(tabId, tabC) {
    var len = document.getElementById('getId').getElementsByTagName('li').length;
    for (i = 1; i <= len; i++) {
        if ("tabId" + i == tabId) {
            document.getElementById(tabId).className = "current";
            echartsLine(i);
        } else {
            document.getElementById("tabId" + i).className = "";
        }
        if ("tabC" + i == tabC) {
            document.getElementById(tabC).className = "show";
            echartsLine(i);
        } else {
            document.getElementById("tabC" + i).className = "hidden";
        }
    }
}

function echartsLine(key) {
    var glstring = 'global-line' + key;
    var myChart = echarts.init(document.getElementById(glstring));
    var lineLg;
    var lineTD;
    if (key == 1) {
        lineLg = lineLegend1;
        lineTD = lineTabData1;
    }
    if (key == 2) {
        lineLg = lineLegend2;
        lineTD = lineTabData2;
    }
    if (key == 3) {
        lineLg = lineLegend3;
        lineTD = lineTabData3;
    }
    if (key == 4) {
        lineLg = lineLegend4;
        lineTD = lineTabData4;
    }
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['line', 'bar', 'stack', 'tiled']
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: lineTD,
        legend: {
            data: lineLg
        }
    };

    // 为echarts对象加载数据 
    myChart.setOption(option);
}
window.onload = function() {
    this.init1();
    this.init2();

}