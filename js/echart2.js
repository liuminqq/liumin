let dom2 = document.getElementById("main2");
let myChart2 = echarts.init(dom2, null, {
    renderer: "canvas",
    useDirtyRect: false,
});
let option2;

option2 = {
    title: {
        text: "2016-2021品牌合作歌曲数量及单曲最高热度",
    },
    tooltip: {
        trigger: "axis",
    },
    legend: {
        data: ["歌曲数量", "最高热度"],
    },
    grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        },
    },
    xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["2016年", "2017年", "2018年", "2019年", "2020年", "2021年"],
    },
    yAxis: {
        type: "value",
    },
    series: [{
            name: "歌曲数量",
            type: "line",
            stack: "Total",
            data: [18, 27, 42, 68, 102, 20],
        },
        {
            name: "最高热度",
            type: "line",
            stack: "Total",
            data: [4300000, 9000000, 17000000, 30000000, 200000000, 800000000],
        },
    ],
};

if (option2 && typeof option2 === "object") {
    myChart2.setOption(option2);
}

window.addEventListener("resize", myChart2.resize);