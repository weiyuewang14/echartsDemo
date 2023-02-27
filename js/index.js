// 第一个柱状图
(function name() {
    //初始化实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));

    //指定配置项
    var option = {
        color: ["#3398DB"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow", // 默认为line
            }
        },
        //修改图标大小
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 2
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        },
        series: [
            {
                name: "直接访问",
                type: "bar",
                barWidth: "35%",
                itemStyle: {
                    barBorderRadius: 3
                },
                data: [200, 300, 300, 900, 1500, 1200, 600],
                type: 'bar'
            }
        ]
    };
    myChart.setOption(option);
    // 图标自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

// 第二个柱状图
(function () {
    //初始化实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    // 声明颜色数组
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];

    //指定配置项
    var option = {
        grid: {
            top: '10%',
            left: '22%',
            bottom: '10%',
        },
        xAxis: {
            show: false
        },
        yAxis:[
            {
                type: 'category',
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff"
                }
            },
            {
                show: true,
                data: [702, 350, 610, 793, 664],
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    }
                }
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                yAxisIndex:0,
                barCategoryGap: 50,
                barWidth: 10,
                data: [70, 34, 60, 78, 69],
                itemStyle: {
                    barBorderRadius: 20,
                    color: function (params) {
                        return myColor[params.dataIndex];
                    }
                },
                label: {
                    show: true,
                    position: "inside",
                    formatter: "{c}%"
                }
            },
            {
                name: "框",
                type: 'bar',
                yAxisIndex:1,
                barCategoryGap: 50,
                barWidth: 15,
                data: [100, 100, 100, 100, 100],
                itemStyle: {
                    color: 'none',
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                }
            }
        ]
    };

    // 绑定配置项
    myChart.setOption(option);
    // 自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();