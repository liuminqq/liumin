let dom3 = document.getElementById("main3");
let myChart3 = echarts.init(dom3, null, {
    renderer: "canvas",
    useDirtyRect: false,
});
let option3;

option3 = {
    title: {
        text: "2015-2021中国数字音乐产业规模",
        subtext: "亿元",
    },
    xAxis: {
        type: "category",
        data: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
    },
    yAxis: {
        type: "value",
    },
    series: [{
        data: [53.5, 137.3, 285.5, 498.4, 753.4, 960.5, 1230.6],
        type: "line",
        symbol: "triangle",
        symbolSize: 20,
        lineStyle: {
            color: "#5470C6",
            width: 4,
            type: "dashed",
        },
        itemStyle: {
            borderWidth: 3,
            borderColor: "#EE6666",
            color: "yellow",
        },
    }, ],
};

if (option3 && typeof option3 === "object") {
    myChart3.setOption(option3);
}

window.addEventListener("resize", myChart3.resize);