let dom = document.getElementById("main1");
let myChart = echarts.init(dom, null, {
    renderer: "canvas",
    useDirtyRect: false,
});
let option;

option = {
    title: {
        text: "2015-2022华语新歌年度总数量",
    },
    dataset: {
        source: [
            ["number", "year"],
            [80000, "2015年"],
            [95000, "2016年"],
            [110000, "2017年"],
            [170000, "2018年"],
            [236000, "2019年"],
            [770000, "2020年"],
            [1145000, "2021年"],
        ],
    },
    grid: { containLabel: true },
    xAxis: { name: "数量" },
    yAxis: { type: "category" },
    series: [{
        type: "bar",
        encode: {
            // Map the "amount" column to X axis.
            x: "amount",
            // Map the "product" column to Y axis
            y: "product",
        },
    }, ],
};

if (option && typeof option === "object") {
    myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);