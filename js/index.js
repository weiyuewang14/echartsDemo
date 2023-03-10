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
        yAxis: [
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
                yAxisIndex: 0,
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
                yAxisIndex: 1,
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

// 第一个折线图
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector('.line .chart'));
    // 定义数据
    var yearData = [
        {
            year: "2020", // 年份
            data: [
                // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: "2021", // 年份
            data: [
                // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];
    // 配置项
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                color: '#4c9bfd',
            },
            right: '10%',
            data: ['Email', 'Union Ads']
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true, // 显示边框
            borderColor: '#012f4a',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,//去除轴内间距
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            // 分割线颜色
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        color: ['#00f2f1', '#ed3f35'],
        series: [
            {
                name: '新增粉丝',
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                type: 'line',
                smooth: true
            }, {
                name: '新增游客',
                data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
                type: 'line',
                smooth: true
            }

        ]
    };
    // 绑定
    myChart.setOption(option);
    // 5.点击切换效果
    $(".line h2").on("click", "a", function () {
        // alert(1);
        // console.log($(this).index());
        // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
        // console.log(yearData[$(this).index()]);
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        // 需要重新渲染
        myChart.setOption(option);
    });
    // 自适应
    window.addEventListener('resize', function () {
        myChart.resize()
    });
})();

// 第二个折线图
(function () {
    // 实例化
    var myChart = echarts.init(document.querySelector('.line2 .chart'));

    // 配置项
    var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                // x轴线的颜色为   rgba(255,255,255,.2)
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                // 修改分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            },

        ],
        series: [
            {
                name: '阅读量',
                type: 'line',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
                // 单独修改线的样式
                lineStyle: {
                    color: "#0184d5",
                    width: 2
                },
                // 填充区域
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
            },
            {
                type: 'line',
                emphasis: {
                    focus: 'series'
                },
                name: "转发量",
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
            }
        ]
    };

    // 绑定
    myChart.setOption(option);

    // 自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

// 第一个饼状图
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector('.pie .chart'));
    // 指定配置项
    var option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: '2%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            },
            // data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                center: ['50%', '50%'],
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    show: true
                },
                labelLine: {
                    show: true
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ],
                color: [
                    "#065aab",
                    "#066eab",
                    "#0682ab",
                    "#0696ab",
                    "#06a0ab",
                ]
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

// 第二个饼状图
(function () {
    // 初始化实例
    var myChart = echarts.init(document.querySelector('.pie2 .chart'))

    // 配置项
    var option = {
        series: [
            {
                name: '地区分布',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                    fontSize: 10
                },
                // 引导线调整
                labelLine: {
                    // 连接扇形图线长
                    length: 6,
                    // 连接文字线长
                    length2: 8
                },
                itemStyle: {
                    borderRadius: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ],
                color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
            }
        ]
    };
    // 绑定
    myChart.setOption(option);
    //自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();